import Vue from "vue";
// import VueCompositionAPI from "@vue/composition-api";
import App from "./App.vue";
import router from "./router";
import store from "./store";

console.log("App: ", App);

// Vue.use(VueCompositionAPI);
// Vue.config.productionTip = false;

Vue.options = Object.assign(Vue.options, {
  data: {
    testDataMerge: "Vue.options",
    testDataMerge2: "Vue.options",
  },
});

Vue.mixin({
  data() {
    return { testDataMerge: "Vue.mixin" };
  },
  beforeCreate: [
    function () {
      console.log("Vue.mixin beforeCreate");
    },
  ],
  created: [
    function () {
      console.log("Vue.mixin created");
    },
  ],
  beforeMount: [
    function () {
      console.log("Vue.mixin beforeMount");
    },
  ],
  // mounted: [
  //   function () {
  //     console.log("Vue.mixin mounted");
  //   },
  // ],
});

console.log("Vue.options", Vue.options);

new Vue({
  // router,
  // store,
  // render: (h) => h(App),
  // render: (h) => h("div", { attrs: { id: "app" } }, ["text"]),
  data: function () {
    return {
      name: "main.js",
    };
  },
  render: function (h) {
    return h("div", { attrs: { id: "app" } }, [h("h1", ["组件名：", this.name])]);
  },
  // extends: App,
  // render: (h) =>
  //   h({
  //     data: function () {
  //       return {
  //         name: "App.vue",
  //       };
  //     },
  //     render: function () {
  //       var _vm = this;
  //       var _h = _vm.$createElement;
  //       var _c = _vm._self._c || _h;
  //       return _c(
  //         "div",
  //         { attrs: { id: "app" } },
  //         [
  //           _c("h1", [_vm._v("组件名：" + _vm._s(_vm.name))]),
  //           // _c("hello-world", { attrs: { msg: "Welcome to Your Vue.js App" } }),
  //         ],
  //         1
  //       );
  //     },
  //   }),
}).$mount("#app");

// 当前render的结果是下面这个函数：
function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c("h1", [_vm._v("组件名：" + _vm._s(_vm.name))]),
      _c("hello-world", { attrs: { msg: "Welcome to Your Vue.js App" } }),
    ],
    1
  );
}
// 其模板如下
{
  /*
    <template>
      <div id="app">
        <h1>组件名：{{ name }}</h1>
        <hello-world msg="Welcome to Your Vue.js App" />
      </div>
    </template>; 
  */
}
