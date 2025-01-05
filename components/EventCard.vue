<script lang="ts" setup>
import { useDateFormat } from '@vueuse/core'

const props = defineProps<{
  event: eventType
}>()
const formattedDate = useDateFormat(props.event.date, 'YYYY-MM-DD HH:mm')
</script>

<template>
  <div class="w-full h-full rounded-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-ease cursor-pointer hover-primary flex flex-col">
    <img
      class="object-fit w-full min-h-[160px] md:min-h-[80px]"
      :src="props.event.coverUrl"
      alt="event"
    >
    <div class="p-4 bg-secondary bg-opacity-60 event transition-ease flex-grow flex flex-col justify-between">
      <h3 class="text-white text-md font-bold text-sm mb-2">
        {{ props.event.name }}
      </h3>
      <p class="text-white">
        {{ formattedDate }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .hover-primary:hover{
      .event{
          background-color: theme('colors.primary');
      }
  }
</style>
