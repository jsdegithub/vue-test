<template>
  <div>
    <h1>TreeFolder Page</h1>
    <h2>递归引用和循环引用</h2>
    <hr />
    <TreeFolder :folder="folder" />
  </div>
</template>

<script>
import TreeFolder from "../components/TreeFolder.vue";
export default {
  name: "TreeFolderTest",
  components: {
    TreeFolder,
  },
  data() {
    return {
      folder: {
        name: "folder1",
        children: [
          {
            name: "folder1-1",
            children: [
              {
                name: "file1-1-1",
                children: [],
              },
              {
                name: "file1-1-2",
                children: [],
              },
            ],
          },
          {
            name: "folder1-2",
            children: [
              {
                name: "file1-2-1",
                children: [],
              },
              {
                name: "file1-2-2",
                children: [],
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style scoped></style>
