<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goToAboutDetail">点击跳转</button>
    <hr />
    <button @click="bindedGetMsg">点击调用Inject方法</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "来自About组件的msg",
    };
  },
  // 通过provide和inject实现跨层级组件通信。
  // 注入的属性是非响应式的，所以不能用在computed中。
  inject: ["getMsg"],
  methods: {
    goToAboutDetail() {
      this.$router.push({ path: "/aboutDetail?name=aboutDetail" }).then(() => {
        console.log("成功导航");
      });
    },
    // 这里如果不绑定的当前组件的this，调用时会报错：reading property msg of null,
    // 也就是说，inject注入的方法被调用时，它里面的this会是null, 需要重新绑定到当前组件。
    bindedGetMsg() {
      this.getMsg.bind(this)();
    },
  },
};
</script>
