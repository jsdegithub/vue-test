<template>
  <input type="text" :value="value" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  name: "BaseInput",
  props: ["value"],
  data() {
    return {
      componentName: "BaseInput",
    };
  },
};
</script>

<style scoped></style>
