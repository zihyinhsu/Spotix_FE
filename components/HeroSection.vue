<script setup lang="ts">
import { VueTypedJs } from 'vue3-typed-ts'

// const router = useRouter()

const heroSectionImg = [
  {
    url: 'https://static.tixcraft.com/images/activity/25_day6_70552ba96e820fbd83666c05d1b73da8.jpg',
  },
  {
    url: 'https://static.tixcraft.com/images/activity/25_yinyin_625ac6f479224a41ff6bd26413eb64f5.png',
  },
  {
    url: 'https://static.tixcraft.com/images/activity/25_2ne1_1896743e66ee548aab124dee4a892cbb.jpg',
  },
  {
    url: 'https://static.tixcraft.com/images/activity/25_casty_02b05d70dffe25a504383b508c04f0e0.png',
  },
  {
    url: 'https://static.tixcraft.com/images/activity/25_mogwaitp_0a7c7df81f17191ae1e912e0cf6ff6e2.png',
  },
]

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
      v-if="heroSectionImg.length"
      ref="carousel"
      class="cursor-pointer"
      :breakpoints="breakpoints"
      :wrap-around="true"
      :autoplay="4000"
    >
      <Slide
        v-for="(slide, idx) in heroSectionImg"
        :key="idx"
      >
        <div class="carousel__item">
          <img
            :src="slide.url"
            alt=""
            class="h-full object-fit shadow-lg"
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
    height:400px;
  }
}

.carousel__slide{
  padding: 0;
}

:deep(.carousel__icon){
  color: #ffffff;
}
</style>
