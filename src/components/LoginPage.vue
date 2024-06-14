<template>
  <div>
    <h2>Login Page</h2>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required />
      <br />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("Username:", this.username);
      console.log("Password:", this.password);
      // Implement login logic here
    },
  },
});
</script>

<style scoped>
/* Add your login page styles here */
</style>
