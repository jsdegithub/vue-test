<template>
  <div>
    <h1>Slot Page</h1>
    <button @click="showModal">展示Modal</button>
    <BaseModal v-show="isVisible" @closeModal="closeModal">
      <template #[slotName]="{ headerProps }">
        <p>子组件传递来的 props => {{ headerProps }}</p>
      </template>
      <!-- 即使template里面内容为空，也会进行占位在，最终渲染结果为默认的default body -->
      <!-- #body是v-slot:body的简写 -->
      <template #body> </template>
      <!-- 默认插槽向父组件传参的简写方式为： -->
      <template #default="{ footerProps = '缺省值' }">
        <!-- 以下内容将被渲染到BaseModal所有的匿名插槽中 -->
        <p>子组件传递来的 props => {{ footerProps }}</p>
      </template>
      <!-- 以下内容不会被渲染到BaseModal的默认插槽中，因为BaseModal的插槽坑位已经被占满了， -->
      <!-- 这就相当于BaseModal中不提供slot位置的话，在父组件引入的BaseModal中间添加再多HTML代码都不会被显示一样 -->
      <h2>footer</h2>
    </BaseModal>
  </div>
</template>

<script>
import BaseModal from "../components/BaseModal.vue";
export default {
  name: "SlotTest",
  data() {
    return {
      isVisible: false,
      slotName: "header",
    };
  },
  methods: {
    showModal() {
      this.isVisible = true;
    },
    closeModal() {
      this.isVisible = false;
    },
  },
  components: {
    BaseModal,
  },
};
</script>

<style scoped></style>
