<script setup lang="ts">
import AsAvatarGroup from './AsAvatarGroup.vue'

function initState() {
  return {}
}

</script>
<template>
  <Story
    :title="AsAvatarGroup.name"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <AsAvatarGroup v-bind="state" />
      </template>
    </Variant>
  </Story>
</template>
