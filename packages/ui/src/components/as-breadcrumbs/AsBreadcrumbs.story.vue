<script setup lang="ts">
import AsBreadcrumbs from './AsBreadcrumbs.vue'

function initState() {
  return {}
}

const buttonIcon = ref(false)
const demoItems = ref(['Home', 'Section', 'Subsection', 'Endpoint'])
</script>
<template>
  <Story
    :title="AsBreadcrumbs.name"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <AsBreadcrumbs v-bind="state">
          <ul>
            <li v-for="(item, idx) in demoItems" :key="`demo-crumb-${idx}`">
              <a>
                <span v-if="buttonIcon" class="mr-2 icon-ph-heart" />
                {{ item }}
              </a>
            </li>
          </ul>
        </AsBreadcrumbs>
      </template>
    </Variant>
  </Story>
</template>
