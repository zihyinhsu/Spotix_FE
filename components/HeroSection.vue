<script setup lang="ts">
import { VueTypedJs } from 'vue3-typed-ts'

const { getEventsData } = useEventData()
const currentYear = new Date().getFullYear()
const searchFilter = ref()

const heroEvents = ref<eventType[]>([])

onMounted(async () => {
  searchFilter.value = {
    filterQuery: '',
    year: currentYear,
    month: null,
    sortBy: 'publishTime',
    pageNumber: 1,
    pageSize: 5,
  }
})
watch(searchFilter, async (newFilter) => {
  const result = await getEventsData(newFilter)
  if (result.value?.data) heroEvents.value = result.value.data
},
{
  deep: true,
},
)
const breakpoints = {
  768: {
    itemsToShow: 1.8,
    snapAlign: 'center',
  },
}
</script>

<template>
  <section class="w-full">
    <Carousel
      v-if="heroEvents?.length"
      ref="carousel"
      class="cursor-pointer"
      :breakpoints="breakpoints"
      :wrap-around="true"
      :autoplay="4000"
      :prevent-excessive-dragging="true"
    >
      <Slide
        v-for="(slide, idx) in heroEvents"
        :key="idx"
        @click="$router.push('/events/' + slide.id)"
      >
        <div class="carousel__item w-full h-[187px] md:h-[300px] overflow-hidden">
          <img
            :src="slide.coverUrl"
            :alt="slide.name"
            class="object-fit shadow-lg"
          >
        </div>
      </Slide>

      <template #addons>
        <!-- <Pagination />
        <Navigation /> -->
      </template>
    </Carousel>

    <section class="py-6 md:py-14">
      <h1 class="text-gray-600 text-xl md:text-4xl text-extrabold tracking-wider font-mono text-center">
        <VueTypedJs
          :strings="['體驗 每一場值得記住的<span class=\'font-bold\' style=\'color: #AE0000\'>瞬間</span>', '體驗 每一刻心之所向的<span class=\'font-bold\' style=\'color: #AE0000\'>悸動</span>']"
          :type-speed="100"
          :back-speed="80"
          :auto-insert-css="true"
          :cursor-char="'_'"
          :back-delay="2000"
          :loop="true"
        >
          <span class="typing" />
        </VueTypedJs>
      </h1>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.callToAction{
  order:1;
  @media (min-width: 768px) {
    order:0;
  }
}

.carousel__slide {
  padding: 5px;
  height:200px;
  @media (min-width: 768px) {
    height:350px;
  }
}

.carousel__slide{
  padding: 0;
}

:deep(.carousel__icon){
  color: #ffffff;
}
</style>
