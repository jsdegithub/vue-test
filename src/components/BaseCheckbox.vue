<template>
  <div>
    <input
      id="baseCheckbox"
      type="checkbox"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
    />
    <label for="baseCheckbox">{{ labelContent }}</label>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    labelContent: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>
