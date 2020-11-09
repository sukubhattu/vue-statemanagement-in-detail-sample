<template>
  <div>
    <button class="subtract-button" @click="decrement">Subtract</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["decrement"]),
  },
};
</script>

<style scoped>
.subtract-button {
  background-color: rgb(230, 33, 33);
  color: white;
  padding: 10px 20px;
  border: none;
}
</style>