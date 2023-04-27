<template>
  <q-page class="q-pa-md">
    <h5 class="q-mt-none q-mb-md">Контакты</h5>

    <ContactsList />

    <q-page-sticky class="lt-xl" position="bottom-right" :offset="[12, 12]">
      <q-btn fab icon="add" color="primary" to="/contact/create" />
    </q-page-sticky>
  </q-page>
</template>

<script setup lang="ts">
import ContactsList from 'components/Lists/ContactsList.vue';
</script>
