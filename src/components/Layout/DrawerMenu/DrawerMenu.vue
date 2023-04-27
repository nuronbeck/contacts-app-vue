<template>
  <q-drawer
    v-model="leftDrawerOpen"
    :class="$style.drawer"
    side="left"
    show-if-above
    bordered
  >
    <div class="gt-lg q-pa-md flex align-center justify-start">
      <q-btn
        class="text-capitalize"
        color="primary"
        icon="add"
        size="md"
        rounded
        unelevated
        to="/contact/create"
      >
        Добавить контакт
      </q-btn>
    </div>

    <q-list>
      <q-item-label header> Управление контактами </q-item-label>

      <DrawerMenuItem
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLayoutSettingsStore } from 'src/stores/layoutSettingsStore';

import DrawerMenuItem from './DrawerMenuItem.vue';
import type { IDrawerMenuItem } from './DrawerMenuItem.vue';

const essentialLinks: IDrawerMenuItem[] = [
  {
    title: 'Мои контакты',
    icon: 'group',
    url: '/',
  },
  {
    title: 'Настройки',
    icon: 'settings',
    url: '/settings',
  },
];

const { leftDrawerOpen } = storeToRefs(useLayoutSettingsStore());
</script>

<style lang="scss" module>
@include body-light {
  .drawer {
    background-color: $white;
  }
}

@include body-dark {
  .drawer {
    background-color: $dark;
  }
}
</style>
