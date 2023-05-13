<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
// import { NConfigProvider, darkTheme, zhCN } from 'naive-ui';

// import { useDesignSettingStore } from '@/store/modules/themeStore';
// import { computed } from 'vue';

// const designStore = useDesignSettingStore();
// const getDarkTheme = computed(() => (designStore.darkTheme ? darkTheme : undefined));
//TODO 修一下darkTheme

</script>

<!-- <template>
  <NConfigProvider :theme="darkTheme" :locale="zhCN">
    <HelloWorld msg="Vite + Vue" />
    <router-view />
  </NConfigProvider>
</template> -->


<template>
  <HelloWorld msg="Vite + Vue" />
  <router-view />
</template>

<style scoped>
</style>
