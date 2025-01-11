<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'

const prop = defineProps<{
  eventData: eventType
  selectedSession?: sessionType
}>()
</script>

<template>
  <div class="md:flex md:items-center">
    <img
      :src="prop.eventData.coverUrl"
      :alt="prop.eventData.name"
      class="md:h-[110px]"
    >
    <div class="container my-4 md:pr-0">
      <div class="font-bold text-lg mb-2">
        {{ prop.eventData.name }}
      </div>
      <div class="flex space-x-4 w-full">
        <span>{{ useDateFormat(prop.selectedSession?.sessionTime, 'YYYY-MM-DD HH:mm') }}</span>
        <span class="flex">
          <Icon
            name="line-md:map-marker-alt-twotone-loop"
            size="24"
            class="mr-1"
          />
          {{ eventData.place.name }}
        </span>
      </div>
    </div>
  </div>
</template>
