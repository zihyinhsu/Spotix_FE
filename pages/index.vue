<script setup lang="ts">
const EventCard = defineAsyncComponent(() => import('~/components/EventCard.vue'))

const currentYear = new Date().getFullYear()
const year = ref(currentYear)

function chooseYear(type: string) {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTo({
      left: 0,
      behavior: 'smooth',
    })
  }

  activedMonth.value = 'JAN'

  if (type === 'next') {
    if (year.value === currentYear + 2) return
    year.value++
  }
  else {
    if (year.value === currentYear - 1) return
    year.value--
  }
}

const eventsData = ref<eventType[]>(
  [
    {
      id: 1,
      name: 'DAY6 3RD WORLD TOUR ＜FOREVER YOUNG＞ in KAOHSIUNG',
      orderNumber: '141777450',
      seat: 'A區 5排 1號',
      date: '2025-01-19 18:00',
      url: 'https://static.tixcraft.com/images/activity/25_day6_70552ba96e820fbd83666c05d1b73da8.jpg',
      location: '台北小巨蛋',
      price: 5000,
      description: 'DAY6 3RD WORLD TOUR ＜FOREVER YOUNG＞ in KAOHSIUNG',
    },
    {
      id: 2,
      name: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
      orderNumber: '141777450',
      seat: 'A區 5排 1號',
      date: '2024-12-27',
      url: 'https://static.tixcraft.com/images/activity/25_yinyin_625ac6f479224a41ff6bd26413eb64f5.png',
      location: '台北小巨蛋',
      price: 5000,
      description: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
    },
    {
      id: 3,
      name: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
      orderNumber: '141777450',
      seat: 'A區 5排 1號',
      date: '2024-12-27',
      url: 'https://static.tixcraft.com/images/activity/25_yinyin_625ac6f479224a41ff6bd26413eb64f5.png',
      location: '台北小巨蛋',
      price: 5000,
      description: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
    },
    {
      id: 4,
      name: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
      orderNumber: '141777450',
      seat: 'A區 5排 1號',
      date: '2024-12-27',
      url: 'https://static.tixcraft.com/images/activity/25_yinyin_625ac6f479224a41ff6bd26413eb64f5.png',
      location: '台北小巨蛋',
      price: 5000,
      description: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
    },
    {
      id: 5,
      name: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
      orderNumber: '141777450',
      seat: 'A區 5排 1號',
      date: '2024-12-27',
      url: 'https://static.tixcraft.com/images/activity/25_yinyin_625ac6f479224a41ff6bd26413eb64f5.png',
      location: '台北小巨蛋',
      price: 5000,
      description: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
    },
    {
      id: 6,
      name: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
      orderNumber: '141777450',
      seat: 'A區 5排 1號',
      date: '2024-12-27',
      url: 'https://static.tixcraft.com/images/activity/25_yinyin_625ac6f479224a41ff6bd26413eb64f5.png',
      location: '台北小巨蛋',
      price: 5000,
      description: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
    },
    {
      id: 7,
      name: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
      orderNumber: '141777450',
      seat: 'A區 5排 1號',
      date: '2024-12-27',
      url: 'https://static.tixcraft.com/images/activity/25_yinyin_625ac6f479224a41ff6bd26413eb64f5.png',
      location: '台北小巨蛋',
      price: 5000,
      description: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
    },
    {
      id: 8,
      name: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
      orderNumber: '141777450',
      seat: 'A區 5排 1號',
      date: '2024-12-27',
      url: 'https://static.tixcraft.com/images/activity/25_yinyin_625ac6f479224a41ff6bd26413eb64f5.png',
      location: '台北小巨蛋',
      price: 5000,
      description: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
    },
    {
      id: 9,
      name: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
      orderNumber: '141777450',
      seat: 'A區 5排 1號',
      date: '2024-12-27',
      url: 'https://static.tixcraft.com/images/activity/25_yinyin_625ac6f479224a41ff6bd26413eb64f5.png',
      location: '台北小巨蛋',
      price: 5000,
      description: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
    },
    {
      id: 10,
      name: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
      orderNumber: '141777450',
      seat: 'A區 5排 1號',
      date: '2024-12-27',
      url: 'https://static.tixcraft.com/images/activity/25_yinyin_625ac6f479224a41ff6bd26413eb64f5.png',
      location: '台北小巨蛋',
      price: 5000,
      description: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
    },
    {
      id: 11,
      name: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
      orderNumber: '141777450',
      seat: 'A區 5排 1號',
      date: '2024-12-27',
      url: 'https://static.tixcraft.com/images/activity/25_yinyin_625ac6f479224a41ff6bd26413eb64f5.png',
      location: '台北小巨蛋',
      price: 5000,
      description: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025(1)',
    },
  ],
)

const Months = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
]
const currentMonth = new Date().getMonth()
const activedMonth = ref(Months[currentMonth])
const scrollContainer = ref<HTMLElement | null>(null)

function getEventsByMonth(month: string) {
  activedMonth.value = month
}
onMounted(() => {
  // 初始滾動位置
  if (scrollContainer.value) {
    const index = Months.indexOf(activedMonth.value)
    const scrollAmount = index * 60// 根據需要調整滾動量
    scrollContainer.value.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    })
  }
})

const activeSort = ref('arrival')
const sortType = ref([
  {
    label: '最新上架',
    value: 'arrival',
  },
  {
    label: '最新開賣',
    value: 'latest',
  },
  {
    label: '近期演出',
    value: 'near',
  },
])
function getEventsBySort(sort: string) {
  activeSort.value = sort
}
</script>

<template>
  <div>
    <HeroSection />

    <section class="bg-secondary text-white pt-6">
      <div class="container py-6">
        <div
          class="flex md:justify-between mx-auto items-center"
        >
          <div
            class="flex items-center"
            :class="year === currentYear - 1 ? 'pointer-eventsData-none' : 'cursor-pointer'"
            @click="chooseYear('prev')"
          >
            <Icon
              name="bi:arrow-left-circle-fill"
              size="24"
              class="mr-4"
              :class="{
                'text-gray-400': year === currentYear - 1,
              }"
            />
            <span class="md:text-2xl font-mono">{{ year - 1 }}</span>
          </div>
          <span class="font-bold text-xl md:text-4xl font-mono text-center"> {{ year }} Event Schedule</span>
          <div
            class="flex items-center"
            :class="year === currentYear + 2 ? 'pointer-eventsData-none' : 'cursor-pointer'"
            @click="chooseYear('next')"
          >
            <span class="md:text-2xl font-mono"> {{ year + 1 }}</span>
            <Icon
              name="bi:arrow-right-circle-fill"
              size="24"
              class="ml-4"
              :class="{
                'text-gray-400': year === currentYear + 2,
              }"
            />
          </div>
        </div>
      </div>
      <div class="px-3 md:px-6">
        <div
          ref="scrollContainer"
          class="overflow-x-auto pt-2"
        >
          <div class="flex justify-between space-x-4 md:space-x-6 text-secondary">
            <div
              v-for="(month, i) in Months"
              :key="month"
              class="text-center text-lg md:text-2xl font-mono p-4 w-full cursor-pointer hover:-translate-y-1 transition-ease rounded-md"
              :class="{ ' text-white -translate-y-1 bg-primary': activedMonth === month, 'bg-white': activedMonth !== month }"
              @click="getEventsByMonth(month)"
            >
              <div>
                {{ month }}
              </div>
              <div class="text-md">
                {{ i+1 }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container pt-12 flex justify-center">
        <div class="flex rounded-t-md overflow-hidden">
          <div
            v-for="sort in sortType"
            :key="sort.value"
            class="text-center px-6 py-4 cursor-pointer transition-ease font-bold"
            :class="activeSort === sort.value?'bg-primary text-white': 'bg-white text-secondary' "
            @click="getEventsBySort(sort.value)"
          >
            {{ sort.label }}
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 my-10">
        <NuxtLink
          v-for="event in eventsData"
          :key="event.id"
          :to="'/events/' + event.id"
          class="h-full"
        >
          <EventCard
            :event="event"
          />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>

</style>
