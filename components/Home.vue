<script setup lang="ts">
import { onMounted } from "vue";
import ReactScreen from "@/components/ReactScreen.vue";
import AngularScreen from "@/components/AngularScreen.vue";
import VueScreen from "@/components/VueScreen.vue";
import FrontendScreen from "@/components/FrontendScreen.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const colors = ["#61dbfb", "#dd1b16", "#41b883", "#f0db4f"];
// const colors = [
//   "radial-gradient(circle, rgba(97,219,251,1) 60%, rgba(0,0,0,0.835171568627451) 100%)",
//   "radial-gradient(circle, rgba(221,27,22,1) 60%, rgba(0,0,0,0.835171568627451) 100%)",
//   "radial-gradient(circle, rgba(65,184,131,1) 60%, rgba(0,0,0,0.835171568627451) 100%)",
//   "radial-gradient(circle, rgba(240,219,79,1) 60%, rgba(0,0,0,0.835171568627451) 100%)",
// ];
const reverseColors = ["#f0db4f", "#41b883", "#dd1b16", "#61dbfb"];

gsap.registerPlugin(ScrollTrigger);

const sections = ref<HTMLElement[]>([]);
const mainContainer = ref<HTMLElement | null>(null);
const customCursor = ref<HTMLElement | null>(null);

onMounted(() => {
  sections.value = Array.from(
    document.querySelectorAll(".section")
  ) as HTMLElement[];

  sections.value.forEach((section, index) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 50%",
      end: "bottom 50%",
      animation: gsap.to(mainContainer.value, {
        background: colors[index],
        immediateRender: false,
        duration: 1,
      }),
      toggleActions: "restart none none reverse",
    });

    ScrollTrigger.create({
      trigger: section,
      start: "top 50%",
      end: "bottom 50%",
      animation: gsap.to(customCursor.value, {
        backgroundColor: reverseColors[index],
        immediateRender: false,
        duration: 1,
      }),
      toggleActions: "restart none none reverse",
    });
  });
});
</script>

<template>
  <div class="main-container" ref="mainContainer">
    <ReactScreen />
    <AngularScreen />
    <VueScreen />
    <FrontendScreen />
  </div>
</template>
