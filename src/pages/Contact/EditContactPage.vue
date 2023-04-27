<template>
  <q-page>
    <ContactForm @on-submit="handleFormSubmit" />
  </q-page>
</template>

<script setup lang="ts">
// import { useContactsStore } from 'stores/contactsStore';
// import { useRouter, useRoute } from 'vue-router';
import { useQuasar } from 'quasar';
import ContactForm from 'components/Forms/ContactForm.vue';
import type { IContact } from 'components/models';

const $q = useQuasar();
// const $route = useRoute();
// const $router = useRouter();
// const { addNewContact } = useContactsStore();

const handleFormSubmit = (data: Omit<IContact, 'id'>) => {
  $q.notify({
    message: 'Under the development!',
    color: 'positive',
    position: 'top',
    timeout: 600,
  });
};
</script>
