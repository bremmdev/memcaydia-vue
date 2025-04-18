<script setup lang="ts">
import { slugify } from "@/lib/utils";
import { useQuery } from "@tanstack/vue-query";
import { getGames } from "@/lib/query.ts";

const {
  isError,
  data: games,
} = useQuery({
  queryKey: ["games"],
  queryFn: getGames,
});
</script>

<template>
  <section class="space-y-12 md:space-y-16">
    <h2
      class="text-xl sm:text-3xl text-primary-teal tracking-wide font-bold text-center leading-tight max-w-2xl mx-auto"
    >
      Enhance your brain health through fun and engaging memory games
    </h2>
    <p v-if="isError" class="text-red-500 w-full font-bold mx-auto text-center">
      An error occurred while fetching the games
    </p>
    <div
      v-if="games"
      class="text-slate-900 grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
    >
      <div v-for="game in games">
        <RouterLink
          :to="`/games/${slugify(game.name)}`"
          class="group"
          :key="game.id"
          :aria-label="game.name"
        >
          <div class="group-hover:-translate-y-1 transition-all">
            <img :src="game.image" :alt="game.name" class="max-h-56 w-full" />
            <div
              class="p-6 border border-teal-500 border-t-0 rounded-b-md space-y-3 group-hover:border-primary-teal"
            >
              <h3 class="text-primary-teal text-lg font-medium uppercase">
                {{ game.name }}
              </h3>
              <p class="line-clamp-4">{{ game.description }}</p>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
