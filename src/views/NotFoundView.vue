<script setup lang="ts">
import TheContainer from "@/components/TheContainer.vue";
</script>

<template>
  <TheContainer>
    <h1
      class="max-sm:mt-6 w-fit mx-auto sm:translate-y-1.5 text-2xl sm:text-3xl tracking-wide font-bold text-center text-primary-teal"
    >
      Page not found
    </h1>
    <img
      src="@/assets/not-found.webp"
      alt="404"
      class="w-5/6 max-w-lg mx-auto"
    />
    <RouterLink
      to="/"
      class="text-white flex justify-center gap-2 items-center bg-primary-teal px-4 py-2 w-fit rounded-md font-medium uppercase hover:bg-opacity-90 mx-auto"
    >
      Home
    </RouterLink></TheContainer
  >
</template>
