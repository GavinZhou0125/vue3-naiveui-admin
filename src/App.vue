<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue';
  import { NConfigProvider, GlobalTheme, darkTheme, lightTheme, zhCN } from 'naive-ui';
  import { getTheme } from './utils/cookies';

  const theme: GlobalTheme = getTheme() ? darkTheme : lightTheme;
</script>

<template>
  <NConfigProvider :theme="theme" :locale="zhCN">
    <HelloWorld msg="Vite + Vue" />
    <router-view />
  </NConfigProvider>
</template>

<style scoped></style>
