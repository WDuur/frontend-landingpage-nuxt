<script setup lang="ts">
import { ref } from 'vue'
import { useStack } from '../composables/useStack'

const selected = ref<boolean>(true)
const { stack } = useStack();



</script>

<template>
    <div class="checkbox-group">
        <UCheckbox v-model="selected" name="notifications" :label="stack" />
        <UCheckbox v-model="selected" name="notifications" label="Ik weet alles van Typescript" />
        <UCheckbox v-model="selected" name="notifications" label="Ik heb .NET kennis" />
    </div>
</template>