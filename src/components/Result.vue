<template>
  <div>
    <p>Count Available: {{ getCountValue }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCountValue"]),
  },
};
</script>

<style>
</style>