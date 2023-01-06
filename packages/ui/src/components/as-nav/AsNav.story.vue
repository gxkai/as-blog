<script setup lang="ts">
import AsNav from './AsNav.vue'

function initState() {
  return {
  }
}
</script>
<template>
  <Story
    title="AsNav"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <AsNav v-bind="state" />
      </template>
    </Variant>
  </Story>
</template>

