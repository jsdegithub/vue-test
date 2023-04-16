<template>
  <div>
    <button @click="$emit('childLogin')">通过子组件回调父组件login方法登录</button>
  </div>
</template>

<script>
export default {
  name: "LoginButton",
};
</script>

<style scoped></style>
