<script setup lang="ts">
import type { Game } from "@/lib/types.ts";

const { game } = defineProps<{
  game: Game;
}>();
</script>

<template>
  <section
    class="text-slate-900 relative bg-primary-teal/5 rounded-md flex items-center flex-col p-8 md:p-12"
  >
    <div class="max-w-4xl mx-auto space-y-6">
      <h1
        class="text-2xl sm:text-3xl tracking-wide font-bold text-center text-primary-teal"
      >
        {{ game?.name }}
      </h1>
      <div class="flex flex-col md:flex-row gap-8 items-center">
        <p class="max-md:text-center">{{ game?.description }}</p>
        <img
          class="w-1/2 md:w-1/4 lg:w-1/5"
          :src="game.image"
          :alt="game.name"
        />
      </div>
      <!-- <Highscore gameName={game.name} /> -->
    </div>
  </section>
</template>
