<template>
  <div>
    <span>{{ folder.name }}</span>
    <TreeFolderContent :children="folder.children" />
  </div>
</template>

<script>
export default {
  name: "TreeFolder",
  props: {
    folder: {
      type: Object,
      required: true,
    },
  },
  components: {
    TreeFolderContent: () => import("./TreeFolderContent.vue"),
  },
};
</script>

<style scoped></style>
