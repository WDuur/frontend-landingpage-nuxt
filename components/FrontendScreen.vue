<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const animateText = () => {
  gsap.to(".header-top", {
    text: "",
    ease: "power1",
    duration: 2,
  });
};

let path: SVGPathElement | null;
let textElements: NodeListOf<SVGTextElement>;
let containerElements: SVGRectElement | null;

let p1 = { x: 130, y: 0 };
let p2 = { x: 130, y: 105 };
let p3 = { x: 130, y: 220 };

onMounted(() => {
  path = document.querySelector("path");
  textElements = document.querySelectorAll("text");
  // containerElements = document.querySelectorAll("rect");
  containerElements = document.querySelector("#card");

  if (!path) {
    console.error("Path element not found.");
    return;
  }
  if (containerElements) {
    containerElements.addEventListener("click", handleCardClick);
  }
  updatePath();

  gsap.defaults({ ease: "power1.inOut" });

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
    .fromTo(".frontend-content", { scale: 0.9 }, { scale: 1 })
    .fromTo(
      ".ninja",
      { top: "0", left: "100px" },
      { top: "-100px", left: "1000px" },
      0
    );

  const tl = gsap.timeline({ onUpdate: updatePath, repeat: -1, yoyo: true });

  tl.fromTo(p2, { x: "-=50" }, { x: "+=100", duration: 1.1 }, 0)
    .fromTo(p3, { x: "-=50" }, { x: "+=100", duration: 1.1 }, 0)
    .fromTo(
      p2,
      { y: "-=5" },
      { y: "+=5", repeat: 1, yoyo: true, duration: 0.5 },
      0
    )
    .fromTo(
      p3,
      { y: "-=5" },
      { y: "+=50", repeat: 1, yoyo: true, duration: 0.5 },
      0
    );
});

const updatePath = () => {
  const p2x = p2.x * 2 - (p1.x + p3.x) / 2;
  const p2y = p2.y * 2 - (p1.y + p3.y) / 2;

  const d = `M${p1.x},${p1.y}Q${p2x},${p2y},${p3.x},${p3.y}`;
  if (!path) return;
  path.setAttribute("d", d);

  gsap.set(containerElements, { x: p3.x - 90, y: p3.y - 10 });
  gsap.set(textElements, { x: p3.x - 80, y: p3.y });
};

const handleCardClick = () => {
  console.log("clicked");
  alert("clicked");
};
</script>

<template>
  <div class="sharevalue section">
    <div class="sharevalue-content">
      <h2 id="sharevalue-content">SHARE<span>VALUE</span></h2>
      <h3 class="header-bottom">FRONTEND DEVELOPMENT</h3>
      <div class="swing">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="sharevalue-content__card"
          ref="svgElement"
        >
          <path class="sharevalue-content__card-rope" />

          <path
            id="card"
            class="sharevalue-content__card-rect"
            d="M 60 10 L 110 10 L 135 50 M 135 50 L 135 210 L 35 210 L 35 50 L 60 10"
            fill="rgba(232, 223, 197, 0.9)"
            @click="handleCardClick"
          />

          <text
            x="90"
            y="62"
            class="sharevalue-content__card-text"
            fill="black"
            style="font-size: 22px;"
            transform="rotate(90 20 100)"
            @click="handleCardClick"
          >
            Meer weten?
          </text>
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sharevalue-content {
  &__swing {
    height: 500px;
    position: absolute;
    left: 50%;
    top: 210px;
    animation: card 1.5s ease 3;
    filter: drop-shadow(3px 3px 8px #222);
  }
  &__card {
    height: 500px;
    position: absolute;
    left: 50%;
    top: 210px;
    animation: card 1.5s ease infinite;
    &-rope {
      fill: none;
      stroke: rgba(56, 54, 48, 0.9);
      stroke-width: 2;
      stroke-linecap: round;
    }
    &-rect {
      cursor: pointer;
      width: 180px;
      height: 80px;
      stroke-width: 1;
      filter: drop-shadow(2px 8px 4px #222);
    }
    &-text {
      cursor: pointer;
    }
  }

  @keyframes card {
    0% {
      transform: rotate(1deg);
    }
    66% {
      transform: rotate(-4deg);
    }
    100% {
      transform: rotate(1deg);
    }
  }
}
</style>
