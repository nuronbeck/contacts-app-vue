<template>
  <q-list>
    <q-item-label header>Offline</q-item-label>
    <q-item
      v-for="contact in offline"
      :key="contact.id"
      class="q-mb-sm"
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-avatar color="primary" text-color="white">
          {{ contact.name.substring(0, 1) }}
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ contact.name }}</q-item-label>
        <q-item-label :class="$style.emailLabel" caption lines="1">{{
          contact.email
        }}</q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-item
      v-for="contact in contacts"
      :key="contact.id"
      class="q-mb-sm"
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-avatar color="primary" text-color="white">
          {{ contact.name.substring(0, 1) }}
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ contact.name }}</q-item-label>
        <q-item-label :class="$style.emailLabel" caption lines="1">{{
          contact.email
        }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { useContactsStore } from 'stores/contactsStore';

const { contacts, offline } = useContactsStore();
</script>

<style lang="scss" module>
@include body-light {
  .emailLabel {
    color: $dark;
  }
}

@include body-dark {
  .emailLabel {
    color: $white;
  }
}
</style>
