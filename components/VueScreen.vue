<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useStack } from '../composables/useStack';

const { setStack } = useStack();


const emit = defineEmits();
gsap.registerPlugin(TextPlugin, ScrollTrigger);

const animateText = () => {
  gsap.to(".vue-header", {
    text: "OF BEN JE EEN  <span>VUE-FIGHTER?</span>",
    ease: "power1",
    duration: 1,
  });
};

onMounted(() => {
  const screenWidth = window.innerWidth;
  const animations =
    screenWidth < 768 ? smallScreenAnimations() : largeScreenAnimations();

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".vue",
        onEnter: animateText,
        start: "top 50vh",
        end: "bottom",
        scrub: true,
        toggleActions: "restart none none reverse",
        immediateRender: false,
      },
    })
    .fromTo(
      ".vue-header",
      { translateY: "0", opacity: 1, scale: 1 },
      {
        translateY: "-50px",
        opacity: 0.6,
        scale: 0.5,
        immediateRender: false,
      },
      0
    )

    .fromTo(
      ".vue-logo",
      { translateY: "0", opacity: 1, scale: 1.1 },
      { translateY: "150px", opacity: 0.8, scale: 1.3 },
      0
    )
    .fromTo(
      ".space-ship",
      animations.spaceShip.from,
      animations.spaceShip.to,
      0
    );
});

// Define animations for small screen
const smallScreenAnimations = () => {
  return {
    spaceShip: {
      from: { top: "90%", left: "46%", opacity: 1, scale: 1.5, width: "40vw" },
      to: { top: "-20vh", left: "47%", opacity: 1, scale: 0.1, width: "150px" },
    },
  };
};

// Define animations for large screen
const largeScreenAnimations = () => {
  return {
    spaceShip: {
      from: { top: "90%", left: "46%", opacity: 1, scale: 1.5, width: "20vw" },
      to: { top: "-20vh", left: "47%", opacity: 1, scale: 0.1, width: "150px" },
    },
  };
};
const handleClick = (): void => {
  setStack('Ik ben een vue vechter')
  emit("scroll");
};
</script>

<template>
  <div class="vue section">
    <img src="@/assets/images/ship.png" alt="Space ship" class="space-ship" />
    <div class="content">
      <h1 class="vue-header"></h1>
      <img
        src="@/assets/images/vue-logo.png"
        alt="Vue logo"
        class="vue-logo"
        @click="handleClick()"
      />
    </div>
  </div>
</template>
