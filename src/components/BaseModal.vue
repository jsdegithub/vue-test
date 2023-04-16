<template>
  <div class="base-modal">
    <div class="base-modal__mask"></div>
    <div class="base-modal__content">
      <div class="close-modal__icon" @click="$emit('closeModal')">
        <span>X</span>
      </div>
      <div class="base-modal__header">
        <slot name="header" :headerProps="headerProps">default header</slot>
      </div>
      <div class="base-modal__body">
        <slot name="body">default body</slot>
      </div>
      <div class="base-modal__footer">
        <!-- 这是默认插槽 -->
        <slot :footerProps="footerProps"></slot>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
  data() {
    return {
      headerProps: "props from child header",
      footerProps: "props from child footer",
    };
  },
};
</script>

<style scoped>
.base-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}
.base-modal__mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.base-modal__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 260px;
  background-color: #fff;
}
.base-modal__header {
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.base-modal__body {
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.base-modal__footer {
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-top: 1px solid #ccc;
}
.close-modal__icon {
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  color: #fff;
  background-color: lightcoral;
}
.close-modal__icon:hover {
  background-color: red;
}
</style>
