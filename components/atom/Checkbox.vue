import { clamp } from 'gsap';
<script setup lang="ts">
defineProps({
  id: String,
  label: String,
  stroke: Number,
  selected: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="checkbox-wrapper">
    <input
      type="checkbox"
      class="check"
      :id="`check-${id}`"
      :checked="selected"
    />
    <label :for="`check-${id}`" class="label">
      <svg width="65" height="65" viewbox="0 0 95 95">
        <rect
          x="30"
          y="20"
          width="50"
          height="50"
          stroke-width="3"
          stroke="black"
          fill="rgba(232, 223, 197, 0.1)"
        />
        <g :transform="`translate(0,-952) rotate(${-stroke})`">
          <path
            d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 "
            stroke="yellow"
            stroke-width="5"
            fill="none"
            class="path1"
          />
        </g>
      </svg>
      <span>{{ label }}</span>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.checkbox-wrapper {
  position: relative;
  display: block;
  overflow: hidden;

  & input[type="checkbox"] {
    visibility: hidden;
    display: none;
  }

  *,
  &::before,
  &::after {
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
  .check {
    width: 50px;
    height: 50px;
    position: absolute;
    opacity: 0;
    &:checked + label {
      svg {
        g {
          path {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
      }
    }
  }
  .label {
    svg {
      vertical-align: middle;
    }
    span {
      font-size: clamp(1rem, 2vw, 1.4rem);
    }
  }
  .path1 {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    transition: 0.5s stroke-dashoffset;
    opacity: 0;
  }
}
</style>
