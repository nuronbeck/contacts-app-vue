<template>
  <section>
    <div :class="[$style.toolbar, 'q-mb-md']">
      <q-toolbar>
        <q-btn flat round dense icon="close" to="/">
          <q-tooltip> Отмена </q-tooltip>
        </q-btn>

        <q-space />

        <q-btn
          class="text-capitalize"
          color="primary"
          unelevated
          @click="handleFormSubmit"
          >Сохранить</q-btn
        >
      </q-toolbar>

      <q-separator />
    </div>

    <form :class="[$style.form, 'q-pa-md']" action="#" @submit.prevent>
      <h5 class="q-mt-none q-mb-md">Создать контакт</h5>

      <div class="row q-col-gutter-sm q-mb-md">
        <div class="col-12">
          <q-input
            v-model="form.firstName"
            label="Имя"
            outlined
            dense
            clearable
            :dark="isDarkMode"
          >
            <template v-slot:before>
              <q-icon name="person" :class="[$style.prependIcon, 'q-mx-sm']" />
            </template>
          </q-input>
        </div>

        <div class="col-12">
          <q-input
            v-model="form.lastName"
            label="Фамилия"
            outlined
            dense
            clearable
            :dark="isDarkMode"
          >
            <template v-slot:before>
              <q-icon name="edit" class="text-transparent q-mx-sm" />
            </template>
          </q-input>
        </div>
      </div>

      <div class="row q-col-gutter-sm q-mb-md">
        <div class="col-12">
          <q-input
            v-model="form.phoneNumber"
            label="Номер телефона"
            outlined
            dense
            clearable
            :dark="isDarkMode"
            :error="v$.phoneNumber.$error"
            :error-message="v$.phoneNumber.$errors?.[0]?.$message.toString()"
            @blur="() => v$.phoneNumber.$touch()"
          >
            <template v-slot:before>
              <q-icon name="phone" :class="[$style.prependIcon, 'q-mx-sm']" />
            </template>
          </q-input>
        </div>

        <div class="col-12">
          <q-input
            v-model="form.email"
            label="Email"
            outlined
            dense
            clearable
            :dark="isDarkMode"
            :error="v$.email.$error"
            :error-message="v$.email.$errors?.[0]?.$message.toString()"
            @blur="() => v$.email.$touch()"
          >
            <template v-slot:before>
              <q-icon name="mail" :class="[$style.prependIcon, 'q-mx-sm']" />
            </template>
          </q-input>
        </div>
      </div>

      <div class="row q-col-gutter-sm q-mb-md">
        <div class="col-12">
          <q-select
            v-model="form.tags"
            :options="STATIC_TAGS"
            label="Теги"
            outlined
            dense
            clearable
            multiple
            :dark="isDarkMode"
          >
            <template v-slot:before>
              <q-icon
                name="bookmarks"
                :class="[$style.prependIcon, 'q-mx-sm']"
              />
            </template>
          </q-select>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { STATIC_TAGS } from 'src/constant';
import { isValidPhonenumber } from 'src/utils/regex';
import { computed, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, maxLength, helpers } from '@vuelidate/validators';
import { storeToRefs } from 'pinia';
import { useLayoutSettingsStore } from 'src/stores/layoutSettingsStore';

import type { IContact } from 'components/models';

const { isDarkMode } = storeToRefs(useLayoutSettingsStore());

const emit = defineEmits<{
  (e: 'on-submit', payload: Omit<IContact, 'id'>): void;
}>();

const form = reactive({
  firstName: undefined,
  lastName: undefined,
  phoneNumber: '',
  email: undefined,
  tags: undefined,
});

const rules = computed(() => ({
  phoneNumber: {
    required: helpers.withMessage('Обязательное поле', required),
    maxLength: helpers.withMessage(
      'Максимальное количество символов 13',
      maxLength(13)
    ),
    isValidPhoneNumber: helpers.withMessage(
      'Указан невалидный номер телефона',
      isValidPhonenumber
    ),
  },
  email: {
    email: helpers.withMessage('Email не валидный', email),
    maxLength: helpers.withMessage(
      'Максимальное количество символов 255',
      maxLength(255)
    ),
  },
}));

const v$ = useVuelidate(rules, form, {
  $lazy: true,
});

const handleFormSubmit = () => {
  v$.value.$validate();

  if (!v$.value.$invalid) {
    emit('on-submit', {
      firstName: form.firstName,
      lastName: form.lastName,
      phoneNumber: form.phoneNumber,
      email: form.email,
      tags: (form.tags || [])?.map(({ id, label }) => ({ id, label })),
    });
  }
};
</script>

<style lang="scss" module>
@include body-light {
  .prependIcon {
    color: $dark;
  }

  .toolbar {
    color: $dark;
    background-color: $white;
  }
}

@include body-dark {
  .prependIcon {
    color: $white;
  }

  .toolbar {
    color: $white;
    background-color: $dark;
  }
}

.form {
  max-width: $breakpoint-md;
}
</style>
