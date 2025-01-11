<script setup lang="ts">
const EventCard = defineAsyncComponent(() => import('@/components/EventCard.vue'))

const currentYear = new Date().getFullYear()
const year = ref(currentYear)

async function chooseYear(type: string) {
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
  await getEventsByFilter()
}

// 取得 eventsData
const { eventsData, getEventsData } = useEventData()

const searchFilter = useSearch()

const Months = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
]
const currentMonth = new Date().getMonth()
const activedMonth = ref(Months[currentMonth])
const scrollContainer = ref<HTMLElement | null>(null)

const activeSort = ref('sessionTime')

async function getEventsByFilter() {
  searchFilter.value.year = year.value
  searchFilter.value.month = Months.findIndex(i => i === activedMonth.value) + 1
  searchFilter.value.sortBy = activeSort.value
}

watch(searchFilter, async (newFilter) => {
  await getEventsData(newFilter)
},
{
  deep: true,
},
)
onMounted(() => {
  getEventsByFilter()
})

async function getEventsByMonth(month: string) {
  activedMonth.value = month
  getEventsByFilter()
}
async function getEventsBySort(sort: string) {
  activeSort.value = sort
  getEventsByFilter()
}

const sortType = ref([
  {
    label: '近期演出',
    value: 'sessionTime',
  },
  {
    label: '最新上架',
    value: 'publishTime',
  },
  {
    label: '最新開賣',
    value: 'availableTime',
  },
])

// function getCurrentEvent(event: eventType) {
//   currentEvent.value = event
// }

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
                {{ i + 1 }}
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
      <div
        v-if="eventsData.length"
        class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 my-10"
      >
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
      <template v-else>
        <div class="w-full">
          <h2 class="text-center text-2xl font-bold py-16 text-primary">
            無演出資訊
          </h2>
        </div>
      </template>
    </section>
  </div>
</template>

<style lang="scss" scoped>

</style>
