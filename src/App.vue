<template>
  <div id="app">
    <count-result></count-result>
    <add-count></add-count>
    <subtract-count></subtract-count>
    <h2>Asynchronous</h2>
    <async-add-count></async-add-count>
  </div>
</template>

<script>
import Result from "./components/Result.vue";
import AddCount from "./components/AddCount.vue";
import SubtractCount from "./components/SubtractCount.vue";
import AsyncAddCount from "./components/AsyncAddCount.vue";
export default {
  name: "App",
  components: {
    CountResult: Result,
    AddCount,
    SubtractCount,
    AsyncAddCount,
  },
};
</script>

<style>
</style>
