<script setup lang="ts">
import AsTabNav from './AsTabNav.vue'

function initState() {
  return {
  }
}
</script>
<template>
  <Story
    title="AsTabNav"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <AsTabNav v-bind="state" />
      </template>
    </Variant>
  </Story>
</template>

