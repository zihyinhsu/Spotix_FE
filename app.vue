<script setup lang="ts">
const notify = useNotify()
watch(() => notify.value.visible, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      notify.value.visible = false
    }, 2000)
  }
})

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
    <Transition>
      <fwb-toast
        v-if="notify.visible"
        divide
        class="fixed top-4 right-4 z-[100] shadow-lg"
        :type="notify.status"
      >
        {{ notify.message }}
      </fwb-toast>
    </Transition>

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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
