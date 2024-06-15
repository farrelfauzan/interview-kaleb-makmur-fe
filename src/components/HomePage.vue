<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800"
  >
    <div
      class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-700"
    >
      <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white">
        Home Page
      </h2>
      <p class="text-center text-gray-700 dark:text-gray-300">
        Welcome to the home page!
      </p>
      <div v-if="userData" class="space-y-4">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
          User Information
        </h3>
        <p class="text-gray-700 dark:text-gray-300">
          Email: {{ userData.email }}
        </p>
        <p class="text-gray-700 dark:text-gray-300">
          First Name: {{ userData.firstName }}
        </p>
        <p class="text-gray-700 dark:text-gray-300">
          Last Name: {{ userData.lastName }}
        </p>
      </div>
      <router-link
        to="/login"
        @click="logout"
        class="block w-full px-4 py-2 mt-6 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
      >
        Logout
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import api from "../../plugins/service";
import { useRoute } from "vue-router";
import { User } from "swagger/api";

export default defineComponent({
  setup() {
    const route = useRoute();
    const email = route.params.email as string;

    const userData = ref<User>();
    async function fetchData() {
      try {
        const response = await api.users.usersControllerFindUserByEmail(email);
        console.log(response.data);
        userData.value = response.data;
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }

    function logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    }

    onBeforeMount(() => {
      fetchData();
    });

    return {
      userData,
      logout,
    };
  },
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
