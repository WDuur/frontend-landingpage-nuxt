<script setup lang="ts">
import { ref, onMounted } from "vue";
import ReactScreen from "@/components/ReactScreen.vue";
import AngularScreen from "@/components/AngularScreen.vue";
import VueScreen from "@/components/VueScreen.vue";
import FrontendScreen from "@/components/FrontendScreen.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const colors: string[] = ["#61dbfb", "#dd1b16", "#41b883", "#f0db4f"];
const progressColors: string[] = ["#197087", "#7F201E", "#237B54", "#9D8903"];
const reactScreen = ref<InstanceType<typeof ReactScreen> | null>(null);
const angularScreen = ref<InstanceType<typeof AngularScreen> | null>(null);
const vueScreen = ref<InstanceType<typeof VueScreen> | null>(null);
const frontendScreen = ref<InstanceType<typeof VueScreen> | null>(null);
const sections = ref<HTMLElement[]>([]);
const mainContainer = ref<HTMLElement | null>(null);
const progressBackgroundColor = ref<string>("#197087");

gsap.registerPlugin(ScrollTrigger);

const callback: IntersectionObserverCallback = (
  entries: IntersectionObserverEntry[]
): void => {
  entries.forEach((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      const targetId: number = parseInt(entry.target.id);
      progressBackgroundColor.value = progressColors[targetId];
    }
  });
};

onMounted(() => {
  const options: IntersectionObserverInit = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.6, // Trigger when 50% of the component is visible
  };

  const observerReact = new IntersectionObserver(callback, options);
  if (reactScreen.value) {
    observerReact.observe(reactScreen.value.$el);
  }

  const observerAngular = new IntersectionObserver(callback, options);
  if (angularScreen.value) {
    observerAngular.observe(angularScreen.value.$el);
  }

  const observerVue = new IntersectionObserver(callback, options);
  if (vueScreen.value) {
    observerVue.observe(vueScreen.value.$el);
  }

  const observerFrontend = new IntersectionObserver(callback, options);
  if (frontendScreen.value) {
    observerFrontend.observe(frontendScreen.value.$el);
  }

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
  });
});
</script>

<template>
  <div
    id="progress"
    :class="progressBackgroundColor"
    :style="{ backgroundColor: progressBackgroundColor }"
  ></div>
  <div class="main-container" ref="mainContainer">
    <ReactScreen :id="0" item="react" ref="reactScreen" />
    <AngularScreen :id="1" ref="angularScreen" />
    <VueScreen :id="2" ref="vueScreen" />
    <FrontendScreen :id="3" ref="frontendScreen" />
  </div>
</template>

<style scoped>
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
  position: fixed;

  transform-origin: 0 50%;
  animation: grow-progress auto linear;
  animation-timeline: scroll(block root);
}
</style>
