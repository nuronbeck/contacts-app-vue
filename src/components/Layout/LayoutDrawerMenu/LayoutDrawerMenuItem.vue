<template>
  <q-item clickable :to="url" exact>
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface ILayoutDrawerMenuItem {
  title: string;
  caption?: string;
  url?: string;
  icon?: string;
}
withDefaults(defineProps<ILayoutDrawerMenuItem>(), {
  caption: '',
  url: '#',
  icon: '',
});
</script>
