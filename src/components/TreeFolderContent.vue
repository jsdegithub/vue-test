<template>
  <ul>
    <li v-for="child in children" :key="child.name">
      <TreeFolder v-if="child.children.length > 0" :folder="child" />
      <span v-else>{{ child.name }}</span>
    </li>
  </ul>
</template>

<script>
import TreeFolder from "./TreeFolder.vue";

export default {
  name: "TreeFolderContent",
  props: {
    children: {
      type: Array,
      required: true,
    },
  },
  components: {
    TreeFolder,
  },
};
</script>

<style scoped></style>
