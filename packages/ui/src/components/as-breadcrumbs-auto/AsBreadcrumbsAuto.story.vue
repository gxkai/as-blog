<script setup lang="ts">
import AsBreadcrumbsAuto from './AsBreadcrumbsAuto.vue'

function initState() {
  return {
  }
}
</script>
<template>
  <Story
    title="AsBreadcrumbsAuto"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <AsBreadcrumbsAuto v-bind="state" />
      </template>
    </Variant>
  </Story>
</template>

