<template>
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the home page!</p>
    <div v-if="userData">
      <h3>User Information</h3>
      <p>Email: {{ userData.email }}</p>
      <p>First Name: {{ userData.firstName }}</p>
      <p>Last Name: {{ userData.lastName }}</p>
    </div>
    <router-link to="/login" @click="logout">Logout</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, ref } from "vue";
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

    async function logout() {
      localStorage.removeItem("token");
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
/* Add your home page styles here */
</style>
