import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';

import type { Ref } from 'vue';

export const useLayoutSettingsStore = defineStore('layoutSettings', () => {
  const isDarkMode = useDark({
    selector: 'body',
    attribute: 'class',
    valueDark: 'body--dark',
    valueLight: 'body--light',
  });

  const toggleDark = useToggle(isDarkMode);

  const leftDrawerOpen: Ref<boolean> = ref(false);

  const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value;
  };

  return {
    isDarkMode,
    leftDrawerOpen,
    toggleDarkMode: () => toggleDark(),
    toggleLeftDrawer,
  };
});
