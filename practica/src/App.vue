<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="head">
      <h1 class="logo">Ramsess</h1>
      <nav>
        <RouterLink to="/" class="enlaces">Home</RouterLink>
        <RouterLink to="/tareas" class="enlaces">Tareas</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: black;
}

.logo {
  color: white;
  font-size: 2rem;
}

.enlaces {
  color: white;
  text-decoration: none;
  font-size: 1.3rem;
  margin-right: 1rem;
}

</style>
