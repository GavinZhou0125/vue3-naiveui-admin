<script setup lang="ts">
import { NButton } from 'naive-ui';
import { useDesignSettingStore } from '@/store/modules/themeStore';

  defineProps<{ msg: string }>();


  const designStore = useDesignSettingStore()

  const handelClick = () => {
    designStore.darkTheme = !designStore.darkTheme
  };
</script>

<template>
  <h1>{{ designStore.darkTheme ? '深' : '浅' }}色主题</h1>

  <div class="card">
    <n-button type="primary" @click="handelClick">change theme</n-button>
    <p>
      {{ designStore.appTheme }}
    </p>
  </div>
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
