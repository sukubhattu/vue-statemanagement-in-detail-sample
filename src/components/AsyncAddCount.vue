<template>
  <div>
    <button
      class="add-button"
      @click="incrementAsync({ by: 100, duration: 1000 })"
    >
      Add 100 after 1 sec of button click
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["incrementAsync"]),
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