<template>
  <div><button class="add-button" @click="increment">Add</button></div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["increment"]),
  },
};
</script>


<style scoped>
.add-button {
  background-color: rgb(59, 187, 59);
  color: white;
  padding: 10px 20px;
  margin-bottom: 10px;
  border: none;
}
</style>