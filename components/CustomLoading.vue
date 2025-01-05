<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 z-10 flex justify-center items-center bg-white bg-opacity-30"
  >
    <img
      src="/images/loading.gif"
      alt="Loading..."
      class="w-[250px]"
    >
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp()
const isLoading = useLoading()
nuxtApp.hook('page:start', () => {
  isLoading.value = true

  scrollToTop()
})

nuxtApp.hook('page:finish', () => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
watch(isLoading, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      isLoading.value = false
    }, 1000)
  }
})
onMounted(() => {
  isLoading.value = false
})
</script>
