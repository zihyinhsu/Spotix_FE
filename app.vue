<script setup lang="ts">
const notify = useNotify()
watch(() => notify.value.visible, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      notify.value.visible = false
    }, 2000)
  }
})
const { initUserState } = useUser()

initUserState()

// line login
const { userData, userLineLogin } = useUser()
onMounted(async () => {
  const route = useRoute()
  const router = useRouter()
  if (route.query.code && !userData.value) {
    await nextTick()
    const result = await userLineLogin(route.query.code)
    const { isSuccess } = result.value
    if (isSuccess) {
      router.replace({ path: '/', query: {} })
      notify.value = {
        visible: true,
        status: 'success',
        message: '登入成功',
      }
    }
  }
})

useHead({
  meta: [
    { name: 'title', content: 'Spotix' },
    { name: 'description', content: '為各項藝文活動服務的售票系統。 ' },
    { name: 'keywords', content: 'bookstore,second-hand' },
    { property: 'og:title', content: 'Spotix' },
    { property: 'og:description', content: '為各項藝文活動服務的售票系統。 ' },
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
