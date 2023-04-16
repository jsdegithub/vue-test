<template>
  <div :style="styleObj">
    <label>
      {{ label }}
    </label>
    <input v-bind:value="value" v-on:input="$emit('input', $event.target.value)" />
    <InputBoxChild v-bind="$attrs" testAttr="testAttr"></InputBoxChild>
  </div>
</template>

<script>
import InputBoxChild from "../components/InputBoxChild.vue";

export default {
  name: "InputBox",
  props: ["label", "value"],
  inheritAttrs: false,
  data() {
    return {
      styleObj: {
        border: "2px solid lightblue",
        marginBottom: "20px",
        marginTop: "20px",
      },
    };
  },
  components: { InputBoxChild },
  mounted() {
    console.log("InputBox => this.$attrs: ", this.$attrs);
  },
};
</script>

<style scoped>

</style>
