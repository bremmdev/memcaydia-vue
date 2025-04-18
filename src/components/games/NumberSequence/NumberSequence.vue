<script setup lang="ts">
const { isPlaying } = defineProps<{
  isPlaying: boolean;
}>();
</script>

<template>
  Number Sequence Game
  <div v-if="isPlaying" class="text-center">
    <h1 class="text-2xl font-bold">Game is in progress...</h1>
  </div>
</template>
