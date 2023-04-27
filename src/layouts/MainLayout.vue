<template>
  <q-layout view="hHh LpR fFf">
    <LayoutHeader />
    <DrawerMenu />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import LayoutHeader from 'src/components/Layout/LayoutHeader.vue';
import DrawerMenu from 'components/Layout/DrawerMenu/DrawerMenu.vue';
</script>
