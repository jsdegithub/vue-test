<template>
  <input type="text" :value="title" @input="$emit('update:title', $event.target.value)" />
</template>

<script>
export default {
  name: "SyncInput",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>
