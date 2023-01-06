<template>
  <AsBreadcrumbs>
    <AsNav as="ul" item-as="li" :items="items" />
  </AsBreadcrumbs>
</template>

<script setup lang="ts">
import { defineProps, computed, PropType } from 'vue'
import { useRoute } from 'vue-router'

import { WyrdNavItem } from '/@/ui.types'

const props = defineProps({
  homeRoute: {
    type: Object as PropType<WyrdNavItem>,
    default: null,
  },
})

const route = useRoute()
const matched = route.matched.filter(r => r.name)

const matchedItems = computed<WyrdNavItem[]>(() =>
  matched.map(r => {
    const label = (r.meta?.title as string) || (r.name as string)
    const to = r.name ? { name: r.name } : undefined

    return {
      label,
      to,
    }
  })
)
const items = computed<WyrdNavItem[]>(() =>
  props.homeRoute
    ? [props.homeRoute, ...matchedItems.value]
    : matchedItems.value
)
</script>

<style lang="css" scoped>
@import url('as-breadcrumbs-auto.css');
</style>
