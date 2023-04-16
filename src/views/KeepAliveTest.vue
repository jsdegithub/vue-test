<template>
  <div>
    <h1>KeepAlive Page</h1>
    <div id="dynamic-component-demo">
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
      >
        {{ tab }}
      </button>
      <keep-alive>
        <component v-bind:is="currentTabComponent" class="tab"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import TabPosts from "../components/TabPosts.vue";
import TabArchive from "../components/TabArchive.vue";

export default {
  name: "KeepAliveTest",
  data() {
    return {
      currentTab: "TabPosts",
      tabs: ["TabPosts", "TabArchive"],
    };
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab;
    },
  },
  components: {
    TabPosts,
    TabArchive,
  },
  mounted() {
    console.log("KeepAliveTest mounted");
  },
};
</script>

<style scoped>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
