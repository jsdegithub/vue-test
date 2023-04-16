<template>
  <div>
    <h1>Test Page</h1>
    <router-view></router-view>

    <div>
      测试watche深度监听
      <button @click="watchDeepObj.subObj.name = 'subObj1'">{{ watchDeepObj.subObj.name }}</button>
      <!-- <button @click="watchDeepObj.subObj = { name: 'subObj2' }">{{ watchDeepObj.subObj }}</button> -->
    </div>

    <div>
      <h3>单个复选框绑定到布尔值</h3>
      <input type="checkbox" id="jack" v-model="checked" />
      <label for="jack">{{ checked }}</label>
    </div>

    <div>
      <h3>多个复选框绑定到同一个数组</h3>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span>
    </div>

    <div>
      <h3>单选按钮</h3>
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>
      <br />
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
      <br />
      <span>Picked: {{ picked }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      checked: false,
      checkedNames: [],
      picked: "",
      watchDeepObj: {
        subObj: {
          name: "subObj",
        },
      },
    };
  },
  watch: {
    // 深度监听
    watchDeepObj: {
      handler(newVal, oldVal) {
        console.log("newVal", newVal.subObj.name);
        console.log("oldVal", oldVal.subObj.name);
      },
      deep: true,
    },
  },
};
</script>

<style scoped></style>
