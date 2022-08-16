<script setup lang="ts">
import type { RunType } from '~/workers/types'
import CanvasWorker from '~/workers/canvas.worker?worker'
import { PayloadType } from '~/workers/canvas.worker.constants'
import { useWorker } from '~/composables/useWorker'

interface ComponentProps {
  width?: number
  height?: number
}

const { width = 800, height = 450 } = defineProps<ComponentProps>()

const { isSupported, post, terminate } = useWorker(new CanvasWorker())
const canvasElementRef = $ref<HTMLCanvasElement | null>(null)
const fps = $ref(30)

const run = (type: RunType) => post({ type })
const start = () => run(PayloadType.Start)
const stop = () => run(PayloadType.Stop)

watch(
  () => canvasElementRef,
  (value) => {
    const canvas = value?.transferControlToOffscreen()

    if (!canvas) {
      throw new Error('Canvas cannot be transferred')
    }

    post({ type: 'init', value: canvas }, [canvas])
    post({ type: 'start' })
  },
)

watch(
  () => fps,
  (value) => post({ type: 'fps', value }),
)

onUnmounted(terminate)
</script>

<template>
  <div v-if="!isSupported">Webworker and OffscreenCanvas not suported</div>
  <div v-if="isSupported">
    <div class="flex gap-4 flex-col">
      <span class="text-center">fps: {{ fps }}</span>
      <input type="range" min="1" max="60" v-model.number="fps" />
    </div>
    <canvas :width="width" :height="height" ref="canvasElementRef" class="rounded my-4" />
    <div class="flex gap-4 justify-center">
      <button class="btn-teal" @click="start">Start</button>
      <button class="btn-amber" @click="stop">Stop</button>
    </div>
  </div>
</template>
