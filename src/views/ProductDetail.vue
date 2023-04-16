<template>
  <div>
    <h1>ProductDetail Page</h1>
    <!-- <h2>商品ID: {{ productId }}</h2> -->
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data: () => {
    return {};
  },
  computed: {
    // productId() {
    //   return this.$route.params.id;
    // },
  },
  watch: {
    $route(to, from) {
      console.log("===productDetail  to===: ", to);
      console.log("===productDetail  from===: ", from);
    },
  },
  created() {
    console.log("productDetail.vue ===created===");
  },
  mounted() {
    console.log("productDetail.vue ===mounted===");
  },
  // updated钩子会在data、computed变更时触发
  // 所以即使动态路由的参数变化不会触发生命周期函数，
  // 但由于商品id的变化会导致productId计算属性变化，所以自然会触发updated生命周期
  /**
   * updated钩子会在data、computed变更时触发，
   * 所以即使动态路由的参数变化不会触发生命周期函数，
   * 但由于商品id的变化会导致productId计算属性变化，所以自然会触发updated生命周期，
   * 但若组件中没有使用到data、computed，那么当动态路由的参数变化时，updated生命周期不会被触发。
   */
  updated() {
    console.log("productDetail.vue ===updated===");
  },
  beforeRouteEnter(to, from, next) {
    console.log("productDetail.vue 的组件内前置守卫触发");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log("productDetail.vue 的组件内路由update钩子触发");
    next();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
