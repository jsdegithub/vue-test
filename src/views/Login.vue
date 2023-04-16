<template>
  <div>
    <h1>Login Page</h1>
    <div v-html="htmlData"></div>
    <div v-html="xss"></div>
    <div>
      <label for="">输入username: </label>
      <input type="text" name="" id="" placeholder="回车以提交" @keyup.enter="submitUsername" />
    </div>
    <div>
      <button @click.left="leftClick">左键以触发点击事件</button>
    </div>
    <label for="">username</label> <input v-model="username" /> <label for="">password</label>
    <input v-model="password" />
    {{ username }} ——
    {{ password }}
    <InputBox v-bind="inputBoxAttr"></InputBox>
    <button @[eventName]="login">点击登录</button>
    <LoginButton @childLogin="login">通过子组件回调父组件login方法登录</LoginButton>
    <div class="aLableContainer">
      <!-- 什么情况下需要使用prevent修饰符呢？ -->
      <!-- 当我们需要使用a标签但是不想进行点击跳转的时候 -->
      <!-- 当然还可以直接使用href='javascript:;' -->
      <a href="https://www.baidu.com" @click.prevent="jump">点击进行跳转</a>
    </div>
  </div>
</template>

<script>
import InputBox from "../components/InputBox.vue";
import LoginButton from "../components/LoginButton.vue";

export default {
  name: "Login",
  props: ["query"],
  data() {
    return {
      eventName: "click",
      inputBoxAttr: {
        name: "inputBox",
        type: "input",
        label: "输入框",
        value: "默认值...",
        extra: "额外的属性",
      },
      username: "",
      password: "",
      htmlData: "<h2>这是一个h2标签</h2>",
      xss: "<h2>alert('xss')</h2>",
    };
  },
  methods: {
    login() {
      alert("login success");
    },
    jump() {
      alert("阻止了默认的跳转行为");
    },
    submitUsername() {
      alert("submit username");
    },
    leftClick() {
      alert("left click");
    },
  },
  components: {
    InputBox,
    LoginButton,
  },
  mounted() {
    console.log("Login.vue 获取从路由中传递的props —— query: ", this.query);
  },
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm("Do you really want to leave? you have unsaved changes!");
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aLableContainer {
  margin-top: 20px;
  margin-bottom: 20px;
  height: 30px;
  line-height: 30px;
  background-color: #ccc;
}
</style>
