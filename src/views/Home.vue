<template>
  <div class="home">
    <!-- <div>
      <h3>当前时间：{{ now }}</h3>
      <h3>当前时间：{{ time }}</h3>
    </div> -->
    <div>
      <hr />
      <p>测试data合并</p>
      <p>testDataMerge: {{ testDataMerge }}</p>
      <br />
      <p>testDataMerge2: {{ testDataMerge2 }}</p>
      <hr />
    </div>
    <div>
      <hr />
      <p>嵌套computed测试</p>
      <p>显示区域：{{ computed1 }}</p>
      <button @click="changeComputed2Dependencies">点击更新computed2的依赖</button>
      <hr />
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <h2>username: {{ username }} 拥有资产：{{ usermoney }}</h2> -->
    <!-- <button @click="changeMoneyHandler">增加资产</button> -->
    <!-- <h2>doneTodos: {{ doneTodos }}</h2> -->
    <button @click="goToCart">导航到购物车</button>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import VueRouter from "vue-router";
const { isNavigationFailure, NavigationFailureType } = VueRouter;
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  props: ["name"],
  mixins: [
    {
      data() {
        return {
          // testDataMerge: "component mixin",
        };
      },
    },
  ],
  data() {
    return {
      // testDataMerge: "child component",
      componentName: "home.vue",
      time: new Date(),
    };
  },
  // computed只有在接收响应式数据作为依赖时，才会触发动态更新
  computed: {
    // ...mapState(["username", "usermoney"]),
    // ...mapGetters(["doneTodos"]),
    // now() {
    //   return new Date();
    // },
    computed2() {
      return this.componentName;
    },
    computed1() {
      return this.computed2 + " aaaaaaa";
    },
  },
  methods: {
    // ...mapMutations(["changeMoney"]),
    ...mapActions(["changeMoney"]),
    goToCart() {
      this.$router
        .push({ path: "/cart" })
        .then(() => {
          console.log("成功导航");
        })
        .catch((failure) => {
          // 到导航到初始路由失败，且是重定向原因时，向用户展示弹窗
          // 重定向逻辑在vue-router的index.js中
          if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
            // 向用户显示一个小通知
            console.log("failure.to", failure.to);
            console.log("failure.from", failure.from);
            this.showToast("请先登录");
          }
        });
    },
    showToast(msg) {
      alert(msg);
    },
    changeMoneyHandler() {
      // 不使用mapMutations
      //   this.$store.commit({
      //     type: "changeMoney",
      //     money: 100,
      //   });
      // 使用mapMutations
      // this.changeMoney({ money: 100 });
      // 使用mapActions
      this.changeMoney({ money: 100 });
    },
    changeComputed2Dependencies() {
      this.componentName = "home.vue" + Math.random();
    },
  },

  // beforeRouteEnter(to, from, next) {
  //   // 在 渲染该组件的对应路由 被 confirm 前调用
  //   // 不！能！获取组件实例 `this`
  //   // 因为当守卫执行前，组件实例还没被创建
  //   console.log("Home.vue的组件内前置守卫触发");
  //   next((vm) => {
  //     // 通过 `vm` 访问组件实例
  //     console.log("在Home.vue的beforeRouteEnter中获取组件实例", vm);
  //   });
  // },
  // beforeRouteUpdate(to, from, next) {
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  //   console.log("Home.vue的组件内路由update钩子触发");
  //   next();
  // },
  // beforeRouteLeave(to, from, next) {
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  //   console.log("Home.vue的组件内后置钩子触发");
  //   next();
  // },
  components: {
    HelloWorld,
  },
  watch: {
    $route: {
      handler(to, from) {
        console.log("watch ===Home.vue to===: ", to);
        console.log("watch ===Home.vue from===: ", from);
      },
    },
  },
  beforeCreate() {
    console.log("Home.vue  beforeCreate");
  },
  created() {
    console.log("Home.vue  created");
    // console.log("在Home.vue的created中打印的this.$data", this.$data);
    // console.log("在Home.vue的created中打印的this.$data.componentName", this.$data.componentName);
  },
  beforeMount() {
    console.log("Home.vue  beforeMount");
  },
  // mounted() {
  //   console.log("Home.vue  mounted");
  //   // console.log("获取从路由中传递的props —— name: ", this.name);
  //   // console.log("Home.vue => this.$root: ", this.$root);
  // },
  destroyed() {
    console.log("Home.vue  destroyed");
  },
};
</script>
