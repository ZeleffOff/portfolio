<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
    <header>
      <Navbar />
    </header>

    <RouterView />

    <Footer />
  </div>
</template>

<style scoped></style>
