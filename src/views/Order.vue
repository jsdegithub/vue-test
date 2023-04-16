<template>
  <div>
    <h1>Order Page</h1>
    <BaseCheckbox v-model="checked" labelContent="这是一个基本的checkbox" />
    <router-view></router-view>
  </div>
</template>

<script>
import BaseCheckbox from "../components/BaseCheckbox.vue";
export default {
  name: "Order",
  data() {
    return {
      checked: false,
    };
  },
  components: {
    BaseCheckbox,
  },
};
</script>

<style scoped></style>
