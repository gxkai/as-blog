<script setup lang="ts">
import AsAlert from './AsAlert.vue'
import { Colors } from '/@/models/enums'

function initState() {
  return {
    type: Colors.PRIMARY
  }
}
</script>
<template>
  <Story
    title="AsAlert"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <AsAlert v-bind="state" />
      </template>
    </Variant>
  </Story>
</template>
