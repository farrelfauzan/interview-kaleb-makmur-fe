<template>
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the home page!</p>
    <p>API URL: {{ apiUrl }}</p>
    <router-link to="/login">Logout</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    apiUrl(): string {
      return process.env.VUE_APP_API_URL || "";
    },
  },
});
</script>

<style scoped>
/* Add your home page styles here */
</style>
