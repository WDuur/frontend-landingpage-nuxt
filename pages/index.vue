<script setup lang="ts">
import Home from "@/components/Home.vue";
</script>

<template>
  <main class="main">
    <Home />
  </main>
  <div class="main__mask"></div>
</template>

<style scoped>
/* Add your component-specific styles here */
.main__mask {
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0) 30%,
    rgba(0, 0, 0, 0.3) 100%
  );
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
