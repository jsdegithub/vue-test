<template>
  <div>
    <p>
      真实的输入框如下, value的值之所以跟着变单纯是因为父组件传递给的子组件的props变了,
      而不是因为input的事件直接更改的（props在子组件中是只读的）。
    </p>
    <input :value="value" @input="$emit('input', $event.target.value)" />
    <p>props value的值: {{ value }}</p>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["value"],
};
</script>

<style scoped></style>
