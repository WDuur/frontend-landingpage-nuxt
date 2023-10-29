<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useConfetti } from "../composables/useConfetti";
import Confetti from "./atom/Confetti.vue";

const { setFire, stackToFire } = useConfetti();

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const animateText = () => {
  gsap.to(".angular-header", {
    duration: 1,
    delay: 0,
    text: "OF BEN JE ÉÉN EN AL ANGULAR-ACTIE?",
    ease: "power1",
  });
};

onMounted(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".angular",
        onEnter: animateText,
        start: "top 100px",
        end: "bottom",
        scrub: true,
        toggleActions: "restart none none reverse",
        immediateRender: false,
      },
    })
    .fromTo(
      ".angular-header",
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
      ".angular-logo",
      { translateY: "0", opacity: 1, scale: 1 },
      { translateY: "150px", opacity: 0.5, scale: 1.3 },
      0
    )
    .fromTo(
      ".ninja",
      { top: "-10vh", left: "-400px" },
      { top: "100%", left: "100%" },
      0
    );
});
const explode = async () => {
  setFire("angular");
};
</script>

<template>
  <div class="angular section">
    <div class="content">
      <h1 class="angular-header"></h1>
      <Confetti
        v-if="stackToFire === 'angular'"
        :power="0.5"
        height="5000"
        :colors="['#942c29', '#e38886']"
      />
      <img
        src="@/assets/images/angular-logo.svg"
        alt="Angular Logo"
        class="angular-logo logo"
        @click="explode()"
      />
    </div>
    <img src="@/assets/images/ninja.png" alt="ninja" class="ninja" />
  </div>
</template>

<style scoped>
.confetti {
  position: relative;
  top: 0vh;
  left: 50vw;
}
</style>
