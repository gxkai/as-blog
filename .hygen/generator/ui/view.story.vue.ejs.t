---
to: packages/ui/src/components/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.pascalCase(name)%>.story.vue
---
<script setup lang="ts">
import <%=h.changeCase.pascalCase(name)%> from './<%=h.changeCase.pascalCase(name)%>.vue'

function initState() {
  return {
  }
}
</script>
<template>
  <Story
    title="<%=h.changeCase.pascalCase(name)%>"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <<%=h.changeCase.pascalCase(name)%> v-bind="state" />
      </template>
    </Variant>
  </Story>
</template>

