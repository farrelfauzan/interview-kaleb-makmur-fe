<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800"
  >
    <div
      class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-700"
    >
      <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white">
        Register Page
      </h2>
      <form @submit.prevent="register" class="space-y-4">
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
            for="username"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >Username:</label
          >
          <input
            type="text"
            id="username"
            v-model="username"
            required
            class="block w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            for="firstName"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >First Name:</label
          >
          <input
            type="text"
            id="firstName"
            v-model="firstName"
            required
            class="block w-full px-3 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            for="lastName"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >Last Name:</label
          >
          <input
            type="text"
            id="lastName"
            v-model="lastName"
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
        <div class="flex items-center justify-between">
          <router-link
            to="/login"
            class="inline-block px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-600"
          >
            Back
          </router-link>
          <button
            type="submit"
            class="inline-block px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Register
          </button>
        </div>
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
      username: "",
      firstName: "",
      lastName: "",
      password: "",
    };
  },

  methods: {
    async register() {
      try {
        const { email, username, firstName, lastName, password } = this;
        const response = await api.users.usersControllerCreate({
          email,
          username,
          firstName,
          lastName,
          password,
        });
        console.log(response.data);
        alert("User registered successfully");
        this.$router.replace("/login");
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
