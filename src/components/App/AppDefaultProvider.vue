<template>
  <n-dialog-provider>
    <n-notification-provider>
      <n-message-provider>
        <slot name="default"></slot>
      </n-message-provider>
    </n-notification-provider>
  </n-dialog-provider>
</template>

<script lang='ts' setup>
import { NDialogProvider, NNotificationProvider, NMessageProvider } from 'naive-ui';

</script>

<style scoped>
  
</style>
