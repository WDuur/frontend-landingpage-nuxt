<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// const props = defineProps(["id"]);

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const animateText = () => {
  gsap.to(".header-top", {
    text: "",
    ease: "power1",
    duration: 2,
  });
};

onMounted(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".share-value",
        onEnter: animateText,
        start: "top 200px",
        end: "bottom 50px",
        scrub: true,
        immediateRender: false,
        toggleActions: "restart none none reverse",
      },
    })
    .fromTo(".frontend-content", { scale: 0.9 }, { scale: 1 });
});
</script>

<template>
  <div class="share-value section">
    <div class="frontend-content">
      <h2>SHARE<span>VALUE</span></h2>
      <h3 class="header-bottom">FRONTEND DEVELOPMENT</h3>

      <!-- <a
        href="https://www.sharevalue.nl/word-onze-collega/front-end"
        class="btn"
      >
        Join the club!
      </a> -->
    </div>
  </div>
</template>
