<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header
    class="text-white bg-primary-teal flex justify-between items-center p-4 md:px-8"
  >
    <RouterLink to="/" class="text-2xl font-medium -translate-y-1">
      <span class="text-teal-200">mem</span>caydia
    </RouterLink>
    <nav>
      <ul class="uppercase font-medium">
        <li>
          <RouterLink
            to="/highscores"
            class="hover:text-teal-200"
            activeClass="text-teal-200"
          >
            highscores
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
