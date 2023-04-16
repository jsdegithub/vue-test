import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import ProductDetail from "../views/ProductDetail.vue";
import Product from "../views/Product.vue";
import Order from "../views/Order.vue";
import Checkout from "../views/Checkout.vue";
import Left from "../components/Left.vue";
import Right from "../components/Right.vue";
import Center from "../components/Center.vue";
import Layout from "../views/Layout.vue";
import RedirectParent from "../views/RedirectParent.vue";
import redirect1 from "../views/redirect1.vue";
import redirect2 from "../views/redirect2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    alias: "/index",
    props: { name: "jinshuo" },
    component: Home,
    beforeEnter: (to, from, next) => {
      console.log("home的私有前置守卫触发");
      next();
    },
  },
  {
    path: "/redirectParent",
    name: "redirectParent",
    // 动态重定向
    redirect: (to) => {
      const param = to.query.num;
      return `/redirect${param}`;
    },
    component: RedirectParent,
  },
  {
    path: "/redirect1",
    name: "redirect1",
    component: redirect1,
  },
  {
    path: "/redirect2",
    name: "redirect2",
    component: redirect2,
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/aboutDetail",
    name: "aboutDetail",
    component: () => import(/* webpackChunkName: "about" */ "../views/aboutDetail.vue"),
  },
  {
    path: "/login",
    name: "login",
    // 注意，被传递的是query，而不是对象
    props: (to) => ({ query: to.query.q }),
    component: Login,
  },
  {
    path: "/productDetail/:id",
    name: "productDetail",
    component: ProductDetail,
  },
  {
    path: "/product",
    name: "product",
    component: Product,
  },
  //   通配符路由
  //   {
  //     path: "/product-*",
  //     name: "product",
  //     component: Product,
  //   },
  {
    path: "/order",
    name: "order",
    component: Order,
    meta: { requiresAuth: true },
    children: [
      {
        path: "checkout",
        name: "checkout",
        component: Checkout,
      },
    ],
  },
  {
    path: "/layout",
    name: "layout",
    component: Layout,
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
    // meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      const isAuthenticated = true;
      if (to.name !== "login" && !isAuthenticated) next({ name: "login" });
      //   if (to.name !== 'login' && !isAuthenticated) next(false)
      else next();
    },
  },
  {
    name: "input",
    path: "/input",
    component: () => import(/* webpackChunkName: "input" */ "../views/Input.vue"),
  },
  {
    name: "slotTest",
    path: "/slotTest",
    component: () => import(/* webpackChunkName: "input" */ "../views/SlotTest.vue"),
  },
  {
    name: "keepAliveTest",
    path: "/keepAliveTest",
    component: () => import(/* webpackChunkName: "input" */ "../views/KeepAliveTest.vue"),
  },
  {
    name: "treeFolderTest",
    path: "/treeFolderTest",
    component: () => import(/* webpackChunkName: "input" */ "../views/TreeFolderTest.vue"),
  },
  {
    name: "test",
    path: "/test",
    component: () => import(/* webpackChunkName: "test" */ "../views/Test.vue"),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    /**
     * 使用Promise的异步滚动
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ x: 0, y: 600 })
        }, 1000)
      })
    */
    // 如果需要在打开页面的同时跳转到对应的锚点，可以像如下这样做
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
    // savedPosition只会在 点击 前进/后退 按钮时触发
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  console.log("全局前置守卫触发");
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isAuthenticated = true;
    if (!isAuthenticated) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // 确保一定要调用 next()
  }
});

router.beforeResolve((to, from, next) => {
  console.log("全局解析守卫触发");
  next();
});
router.afterEach((to, from) => {
  console.log("全局后置钩子触发");
});

export default router;
