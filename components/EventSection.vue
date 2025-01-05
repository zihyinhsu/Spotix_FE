<script setup lang="ts">
const prop = defineProps<{
  eventData: eventType
  selectedArea?: {
    name: string
    value: string
    date: string
  }
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
        <span>{{ prop.selectedArea?.date }}</span>
        <span class="flex">
          <Icon
            name="line-md:map-marker-alt-twotone-loop"
            size="24"
            class="mr-1"
          />
          {{ eventData.location }}
        </span>
      </div>
    </div>
  </div>
</template>
