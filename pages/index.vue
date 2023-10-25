<script setup lang="ts">
import Home from "@/components/Home.vue";
</script>

<template>
  <div id="progress"></div>
  <div class="main__mask"></div>
  <main class="main">
    <Home />
  </main>
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
@keyframes grow-progress {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

#progress {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 1em;
  background: red;

  transform-origin: 0 50%;
  animation: grow-progress auto linear;
  animation-timeline: scroll(block root);
}
</style>
