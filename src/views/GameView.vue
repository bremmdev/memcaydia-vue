<script setup lang="ts">
import { MoveLeft } from "lucide-vue-next";
import TheContainer from "@/components/TheContainer.vue";
import GameHero from "@/components/games/GameHero.vue";
import { computed, defineAsyncComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import { getGame } from "@/lib/query.ts";

const isPlaying = ref(false);
const loadError = ref(false);

const route = useRoute();
const gameSlug = route.params.slug as string;

const { isPending, data: game } = useQuery({
  queryKey: ["game", gameSlug],
  queryFn: () => getGame(gameSlug),
});

// Use a computed property to create the async component definition
// This ensures it updates if the input name changes
const GameComponent = computed(() => {
  const unsluggedGameName = game.value?.name.replace(/ /g, "");
  if (!unsluggedGameName) {
    return null;
  }

  // defineAsyncComponent takes a factory function that returns the import promise
  return defineAsyncComponent(() =>
    import(
      `../components/games/${unsluggedGameName}/${unsluggedGameName}.vue`
    ).catch((err) => {
      loadError.value = true;
      return null; // Return null or a fallback component if needed
    })
  );
});
</script>

<template>
  <div>
    <TheContainer v-if="game && !isPending">
      <RouterLink
        to="/"
        class="flex text-primary-teal justify-center gap-2 items-center border border-primary-teal px-4 py-2 w-fit rounded-md font-medium uppercase hover:bg-primary-teal/10 -mt-6"
      >
        <MoveLeft class="size-5" />
        Back
      </RouterLink>
      <GameHero :game="game!" />
      <component :is="GameComponent" v-if="isPlaying" :isPlaying="isPlaying" />

      <button v-else @click="isPlaying = true">Start</button>
    </TheContainer>
    <TheContainer v-else-if="!game && !isPending">
      <h1
        class="max-sm:mt-6 w-fit mx-auto sm:translate-y-1.5 text-2xl sm:text-3xl tracking-wide font-bold text-center text-primary-teal"
      >
        Game not found
      </h1>
      <img
        src="@/assets/not-found.webp"
        alt="404"
        class="w-5/6 max-w-lg mx-auto"
      />
      <RouterLink
        to="/"
        class="text-white flex justify-center gap-2 items-center bg-primary-teal px-4 py-2 w-fit rounded-md font-medium uppercase hover:bg-opacity-90 mx-auto"
        >Home</RouterLink
      >
    </TheContainer>
    <TheContainer v-if="loadError">
      <p
        v-if="loadError"
        class="text-red-500 w-full font-bold mx-auto text-center"
      >
        Error loading game component. Please try again later.
      </p></TheContainer
    >
  </div>
</template>
