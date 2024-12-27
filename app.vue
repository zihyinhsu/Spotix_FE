<script setup lang="ts">
// mouse event
// const cursorVisible = ref(false)
// const cursorPosition = ref({
//   x: -50,
//   y: -50,
// })
// onMounted(() => {
//   cursorVisible.value = true
// })
// function updateCursorPosition(e: MouseEvent) {
//   cursorPosition.value = {
//     x: e.pageX,
//     y: e.pageY,
//   }
// }

const notify = useNotify()
watch(() => notify.value.visible, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      notify.value.visible = false
    }, 2000)
  }
})

// const { categoriesData, getCategories } = useBooksData()
// const cateResult = await getCategories()
// if (cateResult?.value?.data) categoriesData.value = cateResult?.value?.data

// const { getCart } = useCartData()
// const user = useSupabaseUser()
// onMounted(async () => {
//   if (user.value) {
//     await nextTick()
//     await getCart()
//   }
// })

useHead({
  meta: [
    { name: 'title', content: '徙閱二手書' },
    { name: 'description', content: '從流浪的書頁，重拾閱讀的況味。' },
    { name: 'keywords', content: 'bookstore,second-hand' },
    { property: 'og:title', content: '徙閱二手書' },
    { property: 'og:description', content: '從流浪的書頁，重拾閱讀的況味。' },
    { property: 'og:image', content: '/images/logo.png' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <!-- <img
      v-if="cursorVisible"
      class="hidden md:block myCursor"
      src="/images/cursor.png"
      :style="{ left: cursorPosition.x + 'px', top: cursorPosition.y + 'px' }"
    > -->
    <fwb-toast
      v-if="notify.visible"
      divide
      class="fixed top-4 right-4 z-10 shadow-lg"
      :type="notify.status"
    >
      {{ notify.message }}
    </fwb-toast>
    <CustomLoading />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body {
  height:100%;
  /* cursor: none; */
  overflow-x: hidden;
}
/* .myCursor {
  width: 25px;
  height: 25px;
  position: absolute;
  pointer-events: none;
  z-index: 30;
} */
</style>
