<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      // 注意在validator中拿不到实例的属性或方法，因为validator在实例创建之前执行
      validator(value) {
        return ["Welcome to Your Vue.js App", "Hello World."].includes(value);
      },
      default: "Hello World (default)",
    },
  },
  beforeRouteEnter(to, from, next) {
    // 在 渲染该组件的对应路由 被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log("HelloWorld.vue的组件内前置守卫触发");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log("HelloWorld.vue的组件内路由update钩子触发");
    next();
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log("HelloWorld.vue的组件内后置钩子触发");
    next();
  },
  beforeCreate() {
    console.log("HelloWorld.vue beforeCreate");
  },
  created() {
    console.log("HelloWorld.vue created");
  },
  beforeMount() {
    console.log("HelloWorld.vue beforeMount");
  },
  // mounted() {
  //   console.log("App.vue mounted");
  // },
};
</script>

<style scoped></style>
