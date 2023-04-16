<template>
  <div>
    <h1>Cart Page</h1>
    <h2>username: {{ username }}</h2>

    <div>
      <h2>商品列表</h2>
      <button @click="select">点击筛选已选择的商品</button>
      <ul>
        <li v-for="item in productList" :key="item.id">
          <a @click="goToProductDetails(item.id)" href="javascript:;">{{ item.name }}</a>
        </li>
      </ul>
    </div>

    <h2 v-if="loading">loading...</h2>
    <h2 v-if="error">{{ error }}</h2>

    <div>
      <h2>orderData展示区</h2>
      {{ orderData }}
    </div>

    <div>
      <button @click="checkout">checkout</button>
      <!-- 如果想要触发全局下的checkout而非shoppingCart模块下的checkout，只需要设置{root:true}即可 -->
      <!-- 此场景可以让我们在模块action中操作全局状态 -->
      <!-- <button @click="checkout(null, { root: true })">checkout</button> -->
    </div>

    <div>
      <button
        @click.once="clickOnce"
        :style="{
          marginTop: '20px',
        }"
      >
        这个按钮的回调只会触发一次
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Cart",
  // beforeRouteEnter: (to, from, next) => {
  //     const isAuthenticated = false;
  //     if (to.name !== "login" && !isAuthenticated) next({ name: "login" });
  //     //   if (to.name !== 'login' && !isAuthenticated) next(false)
  //     else next();
  // },

  data() {
    return {
      productList: [
        { id: 1, name: "商品1", selected: true },
        { id: 2, name: "商品2", selected: false },
        { id: 3, name: "商品3", selected: true },
      ],
    };
  },

  computed: {
    // (1)第一种方式
    // ...mapState({
    //   loading: (state) => state.shoppingCart.loading,
    //   error: (state) => state.shoppingCart.error,
    //   orderData: (state) => state.shoppingCart.orderData,
    // }),
    // (2)第二种方式
    ...mapState("shoppingCart", ["loading", "error", "orderData"]),
    ...mapGetters("shoppingCart", ["username"]),
  },

  methods: {
    // 如果不对shoppingCart模块设置namespaced: true，那么可以直接使用...mapActions(["checkout"])
    // ...mapActions(["checkout"]),

    // 如果设置了namespaced: true，那么需要使用
    // （1）...mapActions("shoppingCart", ["checkout"])
    ...mapActions("shoppingCart", ["checkout"]),
    // 或者
    //（2）...mapActions({
    //   checkout: "shoppingCart/checkout",
    // }),
    goToProductDetails(id) {
      this.$router.push(`/productDetail/${id}`);
    },
    select() {
      this.productList = this.productList.filter((item) => item.selected);
    },
    clickOnce() {
      alert("clickOnce");
    },
  },
};
</script>

<style scoped></style>
