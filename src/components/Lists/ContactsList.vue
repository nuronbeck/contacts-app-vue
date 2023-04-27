<template>
  <q-list class="q-pb-xl q-pb-xl-none">
    <div v-if="!list.length" :class="$style.emptyMessage">
      Добавьте ваш первый контакт.
    </div>

    <div v-else>
      <q-item-label header>Все контакты</q-item-label>

      <q-item
        v-for="contact in list"
        :key="contact.id"
        class="q-mb-sm"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar
            v-if="getAvatarLetter(contact)"
            color="primary"
            text-color="white"
            size="50px"
          >
            {{ getAvatarLetter(contact) }}
          </q-avatar>

          <q-avatar v-else color="primary" text-color="white" size="50px">
            <q-icon name="person" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ getFullname(contact) }}</q-item-label>

          <q-item-label :class="$style.emailLabel" caption lines="1">{{
            contact.email
          }}</q-item-label>

          <q-item-label class="q-gutter-xs">
            <q-badge
              v-for="tag in contact.tags"
              :key="tag.id"
              :class="$style.tagBadge"
              :label="tag.label"
            />
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-btn size="12px" flat dense round icon="more_vert">
            <q-menu>
              <q-list>
                <q-item
                  clickable
                  v-close-popup
                  :to="`/contact/edit/${contact.id}`"
                >
                  <q-item-section>Редактировать</q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-close-popup
                  @click="() => removeContact({ id: contact.id })"
                >
                  <q-item-section>Удалить</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-item-section>
      </q-item>
    </div>
  </q-list>
</template>

<script setup lang="ts">
import { useContactsStore } from 'stores/contactsStore';
import type { IContact } from 'components/models';
import { storeToRefs } from 'pinia';

const getFullname = ({
  firstName = '',
  lastName = '',
  phoneNumber,
}: IContact) => {
  if (!firstName && !lastName) {
    return phoneNumber;
  }

  return `${firstName ? firstName : firstName + ' '}${lastName}`;
};

const getAvatarLetter = ({ firstName, lastName }: IContact) => {
  if (firstName) {
    return firstName.charAt(0);
  }

  if (lastName) {
    return lastName.charAt(0);
  }

  return undefined;
};

const { removeContact } = useContactsStore();
const { list } = storeToRefs(useContactsStore());
</script>

<style lang="scss" module>
@include body-light {
  .emptyMessage {
    color: $grey-7;
  }

  .emailLabel {
    color: $dark;
  }

  .tagBadge {
    color: $dark;
    background-color: $grey-3;
  }
}

@include body-dark {
  .emptyMessage {
    color: $white;
  }

  .emailLabel {
    color: $white;
  }

  .tagBadge {
    color: $white;
    background-color: $grey-9;
  }
}
</style>
