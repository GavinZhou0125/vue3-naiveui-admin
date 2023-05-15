<script setup lang="ts">
import { NConfigProvider, darkTheme, zhCN } from 'naive-ui';
import { useDesignSettingStore } from '@/store/modules/themeStore';
import AppDefaultProvider from '@/components/App/AppDefaultProvider.vue';

// 深色主题相关
const designStore = useDesignSettingStore();

</script>

<template>
  <NConfigProvider :theme="designStore.darkTheme ? darkTheme : undefined" :locale="zhCN">
    <AppDefaultProvider>
      <RouterView />
    </AppDefaultProvider>
  </NConfigProvider>
</template>

<style scoped>
</style>
