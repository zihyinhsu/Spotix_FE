<script setup lang="ts">
const route = useRoute()
const props = defineProps<{
  eventData: eventType
  currentStep?: string
}>()
</script>

<template>
  <div class="bg-white">
    <div class="container py-2">
      <fwb-breadcrumb>
        <fwb-breadcrumb-item
          home
          href="/"
        >
          <span class="text-xs md:text-sm w-[30px] md:w-auto">
            首頁
          </span>
        </fwb-breadcrumb-item>
        <fwb-breadcrumb-item>
          <span
            class="text-xs md:text-sm"
            :class="!route.path.includes('area')? 'text-primary' : 'cursor-pointer'"
            @click="$router.push(`/events/${props.eventData.id}`)"
          >
            {{ props.eventData.name }}
          </span>
        </fwb-breadcrumb-item>
        <fwb-breadcrumb-item v-if="route.path.includes('area')">
          <span class="text-xs md:text-sm text-primary">
            {{ props.currentStep }}
          </span>
        </fwb-breadcrumb-item>
      </fwb-breadcrumb>
    </div>
  </div>
</template>
