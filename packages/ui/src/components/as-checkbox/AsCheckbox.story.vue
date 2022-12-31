<script setup lang="ts">
import AsCheckbox from './AsCheckbox.vue'

function initState() {
  return {
    src: '/raspberry.jpg'
  }
}

</script>
<template>
  <Story
    :title="AsCheckbox.name"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <AsCheckbox v-bind="state" />
      </template>
    </Variant>
  </Story>
</template>
