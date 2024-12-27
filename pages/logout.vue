<script setup lang="ts">
// const supabase = useSupabaseClient()
// const notify = useNotify()

async function handleSignOut() {
  // const { error } = await supabase.auth.signOut()
  // if (error) {
  //   notify.value = {
  //     visible: true,
  //     status: 'danger',
  //     message: error?.message,
  //   }
  //   return
  // }

  // notify.value.visible = true
  // setTimeout(async () => {
  //   notify.value.visible = false
  //   notify.value.message = null
  //   await navigateTo('/')
  // }, 2000)
}

// 避免有未登入用戶進入 Logout 頁面，將導至 Login 頁面
// definePageMeta({
//   middleware: [
//     async () => {
//       const user = useSupabaseUser()
//       if (!user.value) return await navigateTo('/login')
//     },
//   ],
// })
</script>

<template>
  <div class="max-w-sm mx-auto">
    <fwb-button
      color="default"
      @click="handleSignOut"
    >
      Logout
    </fwb-button>
    <!-- <div v-if="notify.visible">
      {{ notify.message }}
    </div> -->
  </div>
</template>
