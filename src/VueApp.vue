<script setup lang="ts">
import Canvas from '~/components/vue/Canvas.vue'
</script>

<template>
  <div class="h-full grid gap-4 place-items-center">
    <h2 class="text-xl font-bold">Vue 3</h2>
    <Canvas :width="400" :height="225" />
  </div>
</template>
