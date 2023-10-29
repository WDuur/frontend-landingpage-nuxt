<script setup lang="ts">
import ConfettiExplosion from "vue-confetti-explosion";
import { useConfetti } from "./../../composables/useConfetti";

const { fire } = useConfetti();

defineProps({
  power: Number,
  height: String,
  colors: Array,
});
</script>

<template>
  <ConfettiExplosion
    class="confetti"
    v-if="fire"
    :force="power"
    :stageHeight="height"
    :colors="colors"
  />
</template>

<style lang="scss" scoped>
.confetti {
  position: relative;
  top: 0vh;
  left: 50vw;
}
</style>
