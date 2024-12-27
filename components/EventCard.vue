<script lang="ts" setup>
import { useDateFormat } from '@vueuse/core'

const props = defineProps<{
  event: {
    id: number
    name: string
    date: string
    url: string
  }
}>()
const formattedDate = useDateFormat(props.event.date, 'YYYY-MM-DD HH:mm')
</script>

<template>
  <div class="w-full rounded-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-ease cursor-pointer hover-primary">
    <img
      class="object-fit w-full"
      :src="props.event.url"
      alt="event"
    >
    <div class="p-4 bg-secondary bg-opacity-60 event transition-ease">
      <h3 class="text-white text-md font-bold">
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
