<script setup lang="ts">
import { ref } from "vue";
import Checkbox from "../components/atom/Checkbox.vue";
import { useStack } from "../composables/useStack";

const { stack, stackCheck, typeCheck } = useStack();
</script>

<template>
  <div class="checkbox-group">
    <Checkbox id="stack" :stroke="0" :label="stack" :selected="stackCheck" />
    <Checkbox
      id="typescript"
      :stroke="0.5"
      :selected="typeCheck"
      label="Ik weet alles van Typescript"
    />
    <Checkbox id="dotnet" :stroke="0.2" label="Ik heb ervaring met .NET" />
    <Checkbox id="team" :stroke="-0.4" label="Ik ben een echte teamplayer" />
  </div>
</template>

<style lang="scss" scoped>
.checkbox-group {
  position: relative;
  left: 20vw;
  top: 35%;
  @media (max-width: 1280px) {
    // top: 150px;
  }
  @media (max-width: 600px) {
    left: 10%;
    top: 45%;
  }
  @media (max-width: 380px) {
    left: 10%;
    top: 45%;
  }
}
</style>
