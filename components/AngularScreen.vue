<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

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
</script>

<template>
  <div class="angular section">
    <div class="content">
      <h1 class="angular-header"></h1>
      <img
        src="@/assets/images/angular-logo.SVG"
        alt="Angular Logo"
        class="angular-logo"
      />
    </div>
    <img src="@/assets/images/ninja.png" alt="ninja" class="ninja" />
  </div>
</template>
