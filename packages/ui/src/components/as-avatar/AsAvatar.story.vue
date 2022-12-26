<script setup lang="ts">
import AsAvatar from './AsAvatar.vue'

function initState() {
  return {
    src: '/raspberry.jpg'
  }
}

</script>
<template>
  <Story
    :title="AsAvatar.name"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <AsAvatar v-bind="state" />
      </template>
    </Variant>
  </Story>
</template>
