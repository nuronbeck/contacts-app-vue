<template>
  <q-layout view="hHh LpR fFf">
    <LayoutHeader />
    <LayoutDrawerMenu />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import LayoutHeader from 'components/Layout/LayoutHeader/LayoutHeader.vue';
import LayoutDrawerMenu from 'components/Layout/LayoutDrawerMenu/LayoutDrawerMenu.vue';
</script>
