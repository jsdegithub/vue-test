<template>
  <div>
    <h1>Product Page</h1>
    <a href="#anchor">点击跳转到锚点</a>
    <ul>
      <li>
        <a @click="goToProductDetails(1)" href="javascript:;">商品1</a>
      </li>
      <li>
        <a @click="goToProductDetails(2)" href="javascript:;">商品2</a>
      </li>
      <li>
        <a @click="goToProductDetails(3)" href="javascript:;">商品3</a>
      </li>
      <li>
        <a @click="goToProductDetails(1)" href="javascript:;">商品1</a>
      </li>
      <li>
        <a @click="goToProductDetails(2)" href="javascript:;">商品2</a>
      </li>
      <li>
        <a @click="goToProductDetails(3)" href="javascript:;">商品3</a>
      </li>
      <li>
        <a @click="goToProductDetails(1)" href="javascript:;">商品1</a>
      </li>
      <li>
        <a @click="goToProductDetails(2)" href="javascript:;">商品2</a>
      </li>
      <li>
        <a @click="goToProductDetails(3)" href="javascript:;">商品3</a>
      </li>
      <li>
        <a @click="goToProductDetails(1)" href="javascript:;">商品1</a>
      </li>
      <li>
        <a @click="goToProductDetails(2)" href="javascript:;">商品2</a>
      </li>
      <li>
        <a @click="goToProductDetails(3)" href="javascript:;">商品3</a>
      </li>
      <li>
        <a @click="goToProductDetails(1)" href="javascript:;">商品1</a>
      </li>
      <li>
        <a @click="goToProductDetails(2)" href="javascript:;">商品2</a>
      </li>
      <li>
        <a @click="goToProductDetails(3)" href="javascript:;">商品3</a>
      </li>
      <li>
        <a @click="goToProductDetails(1)" href="javascript:;">商品1</a>
      </li>
      <li>
        <a @click="goToProductDetails(2)" href="javascript:;">商品2</a>
      </li>
      <li>
        <a @click="goToProductDetails(3)" href="javascript:;">商品3</a>
      </li>
    </ul>
    <h1 id="anchor">这是一个锚点</h1>
  </div>
</template>

<script>
export default {
  name: "Product",
  methods: {
    goToProductDetails(id) {
      this.$router.push(`/productDetail/${id}`);
    },
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log("Product.vue的组件内路由update钩子触发");
    next();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  height: 60px;
}
</style>
