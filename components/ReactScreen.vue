<script setup lang="ts">
import { onMounted, defineEmits } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

const emit = defineEmits();

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const reactHeader = ref(null);

onMounted(() => {
  gsap.fromTo(
    reactHeader.value,
    { text: "", ease: "power1" },
    { text: "BEN JIJ EEN REACT-ROCKET?", duration: 1, delay: 0.5 }
  );

  gsap.fromTo(reactHeader.value, { scale: 0 }, { duration: 1, scale: 1 });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".react",
        start: "top",
        end: "bottom",
        scrub: true,
        toggleActions: "restart none none reverse",
        immediateRender: false,
      },
    })
    .fromTo(
      reactHeader.value,
      { translateY: "0", opacity: 1, scale: 1 },
      { translateY: "-50px", opacity: 0.6, scale: 0.5, immediateRender: false },
      0
    )
    .fromTo(
      ".react-logo",
      { translateY: "0", opacity: 1, scale: 1 },
      { translateY: "150px", opacity: 0.8, scale: 1.3 },
      0
    )
    .fromTo(
      ".rocket",
      { left: "-150px", bottom: "0px" },
      { left: "100%", bottom: "50%" },
      0
    );
});

const handleClick = (eventName: string): void => {
  emit("scroll", eventName);
};
</script>

<template>
  <div class="react section">
    <div class="content">
      <h1 ref="reactHeader" class="react-header"></h1>
      <img
        src="@/assets/images/react-logo.png"
        alt="React Logo"
        class="react-logo"
        @click="handleClick('react')"
      />
    </div>
    <img src="@/assets/images/rocket.png" alt="" class="rocket" />
  </div>
</template>

<style scoped>
/* Add your component-specific styles here */
</style>
