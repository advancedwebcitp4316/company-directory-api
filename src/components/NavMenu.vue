<template>
  <nav class="bg-slate-900 h-20 items-center text-white flex justify-center space-x-8">
    <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'Other' }">Other</RouterLink>


    
      <div v-if="isAuthenticated">
        Welcome {{ user?.email }}
        <RouterLink :to="{ name: 'SettingsPage' }">Settings</RouterLink>
        <button @click="logout" class="rounded-md bg-red-500 px-4 py-2 mx-2 text-red-100 hover:bg-red-700">Logout</button>
      </div>

      <div v-else>
        <RouterLink :to="{ name: 'LoginPage' }">Login</RouterLink>
      </div>

  </nav>
</template>

<script setup>

import { useAuth } from '../composables/useAuth'
const { isAuthenticated, logout, user } = useAuth()


</script>
