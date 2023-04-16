<template>
  <div>
    <h1>Input Page</h1>
    <p>在自定义输入组件上使用v-model:</p>
    <CustomInput v-model="searchText" />
    <p>输入内容显示区: {{ searchText }}</p>
    <hr />
    <p>.sync修饰符</p>
    <SyncInput :title.sync="doc.title"></SyncInput>
    <p>修改后的父组件data展示区: {{ doc.title }}</p>
    <p>注意: 与v-model不同的是, .sync可以作用于任意子组件props和父组件的双向绑定。</p>
    <hr />
    <p>通过$ref获取子组件实例</p>
    <BaseInput ref="baseInput" v-model="baseInputValue"></BaseInput>
    <button @click="getChildData">点击获取BaseInput子组件实例上的value和data</button>
  </div>
</template>

<script>
import CustomInput from "../components/CustomInput.vue";
import SyncInput from "../components/SyncInput.vue";
import BaseInput from "../components/BaseInput.vue";

export default {
  name: "Input",
  props: ["value"],
  data() {
    return {
      searchText: "",
      baseInputValue: "",
      doc: {
        title: ".sync修饰符测试",
      },
    };
  },
  methods: {
    getChildData() {
      console.log("value: ", this.$refs.baseInput.value);
      console.log("data: ", this.$refs.baseInput.$data);
    },
  },
  components: {
    CustomInput,
    SyncInput,
    BaseInput,
  },
};
</script>

<style scoped></style>
