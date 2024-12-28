<script setup lang="ts">
// const route = useRoute()

const eventData = ref<eventType>({
  id: 1,
  name: 'DAY6 3RD WORLD TOUR ＜FOREVER YOUNG＞ in KAOHSIUNG',
  orderNumber: '141777450',
  seat: 'A區 5排 1號',
  date: '2025-01-19 18:00',
  url: 'https://static.tixcraft.com/images/activity/25_day6_70552ba96e820fbd83666c05d1b73da8.jpg',
  location: '台北小巨蛋',
  price: 5000,
})
</script>

<template>
  <div>
    <div class="container py-2">
      <fwb-breadcrumb>
        <fwb-breadcrumb-item
          home
          href="/"
          class="min-w-[60px]"
        >
          首頁
        </fwb-breadcrumb-item>
        <fwb-breadcrumb-item class="text-primary">
          {{ eventData.name }}
        </fwb-breadcrumb-item>
      </fwb-breadcrumb>
    </div>
    <div class="bg-secondary bg-opacity-60">
      <div class="flex justify-center">
        <img
          :src="eventData.url"
          class="object-fit h-[187px] md:h-[370px]"
          :alt="eventData.name"
        >
      </div>
    </div>
    <div class="container my-6 md:my-12">
      <h1 class="text-xl md:text-2xl text-center font-bold ">
        {{ eventData.name }}
      </h1>
    </div>
  </div>
</template>
