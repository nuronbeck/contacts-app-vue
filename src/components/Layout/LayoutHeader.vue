<template>
  <q-header :class="$style.header" bordered>
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

      <q-toolbar-title> Контакты </q-toolbar-title>

      <q-btn
        dense
        flat
        round
        :icon="isDarkMode ? 'dark_mode' : 'light_mode'"
        @click="toggleDarkMode"
      >
        <q-tooltip>
          {{ isDarkMode ? 'Яркий режим' : 'Тёмный режим' }}
        </q-tooltip>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLayoutSettingsStore } from 'src/stores/layoutSettingsStore';

const { toggleDarkMode, toggleLeftDrawer } = useLayoutSettingsStore();
const { isDarkMode } = storeToRefs(useLayoutSettingsStore());
</script>

<style lang="scss" module>
@include body-light {
  .header {
    color: $dark;
    background-color: $white;
  }
}

@include body-dark {
  .header {
    color: $white;
    background-color: $dark;
  }
}
</style>
