<script setup lang="ts">
const { userData, userLogout } = useUser()

const searchFilter = useSearch()

const showDropdown = ref(false)

const route = useRoute()

const searchQuery = ref('')
function handleInput() {
  searchFilter.value.filterQuery = searchQuery.value
  searchFilter.value.month = null
}

watch(() => searchFilter.value.filterQuery, (newVal) => {
  if (newVal === '') {
    searchQuery.value = ''
  }
})
</script>

<template>
  <div>
    <ClientOnly>
      <header
        v-if="route.path !== '/login' && route.path !== '/register'"
        class="bg-white py-6 border-b-2 sticky-top"
      >
        <div class="container mx-auto">
          <section class="flex justify-between items-center">
            <section>
              <NuxtLink to="/">
                <fwb-navbar-logo
                  class="hidden md:block"
                  alt="Si-yueh"
                  image-url="/images/logo.png"
                />
                <img
                  src="/images/logo-sm.png"
                  alt="Si-yueh"
                  class="md:hidden h-[35px]"
                >
              </NuxtLink>
            </section>
            <section class="absolute top-50 left-[32rem]">
              <form @submit.prevent>
                <fwb-input
                  v-model="searchQuery"
                  placeholder="搜尋活動"
                  size="md"
                  class="rounded-full md:min-w-[400px] border-gray-600 focus:ring-gray-600 focus:border-gray-800 desktop-only"
                  @change="handleInput"
                >
                  <template #suffix>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </svg>
                  </template>
                </fwb-input>
              </form>
            </section>
            <section class="flex space-x-4">
              <NuxtLink
                v-if="!userData"
                to="/login"
                class="cursor-pointer"
              >
                <fwb-button
                  class="nav-link"
                >
                  登入
                </fwb-button>
              </NuxtLink>
              <NuxtLink
                v-if="userData"
                to="/memberCenter?type=tickets"
                class="desktop-only cursor-pointer"
                @click="showDropdown = false"
              >
                <fwb-button
                  class="nav-link"
                >
                  我的票券
                </fwb-button>
              </NuxtLink>
              <NuxtLink
                v-if="userData"
                to="/memberCenter?type=orderManagement"
                class="desktop-only cursor-pointer"
                @click="showDropdown = false"
              >
                <fwb-button class="nav-link">
                  訂單管理
                </fwb-button>
              </NuxtLink>

              <div
                v-if="userData"
                class="relative cursor-pointer"
              >
                <span
                  class="relative"
                  @click="showDropdown = !showDropdown"
                >
                  <div class="rounded-full w-[45px] h-[45px] overflow-hidden">

                    <img
                      v-if="userData.avatarUrl"
                      :src="userData.avatarUrl"
                      alt="cover"
                      class="w-[45px] object-cover"
                    >
                    <fwb-avatar
                      v-else
                      size="md"
                      rounded
                      class="border-2 border-gray-400 rounded-full"
                    />
                  </div>
                  <span class="p-1 bg-white shadow-md absolute bottom-[-5px] right-[-15px] rounded-full">
                    <Icon
                      class="mobile-only"
                      name="ei:navicon"
                      size="20"
                    />
                  </span>
                </span>

                <fwb-list-group
                  v-if="showDropdown"
                  class="absolute top-10 right-[-10px] z-10 min-w-[230px]"
                >
                  <fwb-list-group-item>
                    <div class="flex flex-col justify-start items-start">
                      <span>{{ userData.userName }}</span>
                      <span class="text-[12px] text-gray-500">
                        {{ userData.email }}
                      </span>
                    </div>
                  </fwb-list-group-item>
                  <fwb-list-group-item
                    class="flex items-center cursor-pointer"
                    @click="navigateTo('/memberCenter?type=profile'), showDropdown = false"
                  >
                    <div class="flex items-center">
                      <Icon
                        name="line-md:account-small"
                        size="25"
                        class="mr-1"
                      />
                      <span>會員資料</span>
                    </div>
                  </fwb-list-group-item>
                  <fwb-list-group-item
                    class="cursor-pointer mobile-only"
                    @click="navigateTo('/memberCenter?type=tickets'), showDropdown = false"
                  >
                    <div class="flex items-center">
                      <Icon
                        name="line-md:email-alt-twotone"
                        size="25"
                        class="mr-1"
                      />
                      <span>我的票券</span>
                    </div>
                  </fwb-list-group-item>

                  <fwb-list-group-item
                    class="flex items-center cursor-pointer mobile-only"
                    @click="navigateTo('/memberCenter?type=orderManagement'), showDropdown = false"
                  >
                    <div class="flex items-center">
                      <Icon
                        name="line-md:clipboard-list-twotone"
                        size="25"
                        class="mr-1"
                      />
                      <span>訂單管理</span>
                    </div>
                  </fwb-list-group-item>
                  <fwb-list-group-item
                    class="flex items-center cursor-pointer"
                    @click="userLogout"
                  >
                    <Icon
                      name="line-md:logout"
                      size="25"
                      class="mr-1"
                    />
                    <span>登出</span>
                  </fwb-list-group-item>
                </fwb-list-group>
              </div>

              <fwb-avatar
                v-else
                size="md"
                rounded
                class="border-2 border-gray-400 rounded-full"
              />
            </section>
          </section>
          <section
            class="mt-4 mobile-only"
          >
            <form @submit.prevent>
              <fwb-input
                v-model="searchQuery"
                placeholder="搜尋活動"
                size="md"
                style="border-radius: "
                class="md:min-w-[400px] border-gray-600 focus:ring-gray-600 focus:border-gray-800"
                @change="handleInput"
              >
                <template #suffix>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </template>
              </fwb-input>
            </form>
          </section>
        </div>
      </header>
    </ClientOnly>

    <main>
      <slot />
    </main>
    <fwb-footer
      v-if="route.path !== '/login' && route.path !== '/register'"
      class="bg-secondary flex justify-center md:justify-center text-white leading-relaxed tracking-wider rounded-none"
    >
      © 2024 Spotix. All rights reserved.
    </fwb-footer>
    <div
      class="w-[60px] h-[60px] bg-white text-secondary rounded-full fixed bottom-8 right-4 md:right-8 cursor-pointer overflow-hidden"
      style="box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;"
    >
      <a
        href="https://lin.ee/e1mTZkJ"
        target="_blank"
      >
        <img
          src="/images/line.png"
          class="w-[60px] object-cover"
          alt="line"
        >
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sticky-top {
  position: sticky;
  top: 0;
  z-index: 10;
}

.nav-link{
  height: 100%;
  background-color: white;
  color: theme('colors.secondary');
  padding-bottom: 10px;
  position: relative;
  &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: theme('colors.primary');
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.5s;
    }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
  &:focus {
    outline: none; // 確保沒有默認的 focus 樣式
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); // focus:ring-opacity-0
  }
}
</style>
