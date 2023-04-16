<template>
  <div id="app">
    <h1>组件名：{{ name }}</h1>
    <!-- <hello-world msg="Welcome to Your Vue.js App" /> -->
    <!-- <nav>
      <router-link to="/">Home</router-link>
      | <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/product">Product</router-link> |
      <router-link to="/product#anchor">ProductAnchor</router-link> |
      <router-link to="/cart">Cart</router-link> | <router-link to="/order">Order</router-link> |
      <router-link to="/input">Input</router-link> |
      <router-link to="/slotTest">SlotTest</router-link> |
      <router-link to="/keepAliveTest">KeepAliveTest</router-link> |
      <router-link to="/treeFolderTest">TreeFolderTest</router-link> |
      <router-link to="/test">Test</router-link>
    </nav> -->
    <!-- <router-view /> -->
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  // watch: {
  //   $route: {
  //     handler(to, from) {
  //       console.log("watch ===App.vue to===: ", to);
  //       console.log("watch ===App.vue from===: ", from);
  //     },
  //     // 在设置了 immediate:true 的情况下，watch会先于 created, 晚于 beforeCreate 执行
  //     // 刷新页面时from的输出是: undefined
  //     // 若没有设置 immediate:true ，那么即使刷新页面 watch 也不会触发
  //     // immediate: true
  //   },
  // },

  data() {
    return {
      name: "App.vue",
      msg: "Welcome to Your Vue.js App",
    };
  },

  // components: {
  //   HelloWorld,
  // },

  // provide() {
  //   return {
  //     getMsg() {
  //       console.log(this.msg);
  //     },
  //   };
  // },

  beforeCreate() {
    console.log("App.vue beforeCreate");
  },
  created() {
    console.log("App.vue created");
  },
  beforeMount() {
    console.log("App.vue beforeMount");
  },
  // mounted() {
  //   console.log("App.vue mounted");
  // },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
