<template>
  <div>
    <p>InputBoxChild</p>
    <p>name: {{ name }} ———— type: {{ type }}</p>
    <label>子组件输入框</label> <input />
  </div>
</template>

<script>
export default {
  name: "InputBoxChild",
  // 父组件传递给子组件的所有属性中，没有被加入到子组件props列表的属性会被添加到子组件实例的
  // $attrs对象中作为子组件的标签属性，且会被添加到子组件的根元素上。
  props: ["name", "type"],
  inheritAttrs: true,
};
</script>

<style scoped>

</style>
