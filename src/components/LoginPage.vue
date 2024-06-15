<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div
      class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white">
        Login Page
      </h2>
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >Email:</label
          >
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="block w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >Password:</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="block w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          class="block w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        >
          Login
        </button>
        <button
          type="button"
          @click="register"
          class="block w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
        >
          Register
        </button>
      </form>
    </div>
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

    async register() {
      this.$router.replace("/register");
    },
  },
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
