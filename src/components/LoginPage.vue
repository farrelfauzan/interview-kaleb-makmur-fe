<template>
  <div>
    <h2>Login Page</h2>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" required />
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
import api from "../../plugins/service";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const { email, password } = this;
        const response = await api.auth.authControllerLogin({
          email,
          password,
        });
        localStorage.setItem("token", response.data.bearerToken);
        localStorage.setItem("email", response.data.user.email);
        this.$router.replace(`/home/${email}`);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>

<style scoped>
/* Add your login page styles here */
</style>
