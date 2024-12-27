<script setup lang="ts">
const route = useRoute()

const tabs = ref([
  {
    label: '會員資料',
    value: 'profile',
  },
  {
    label: '我的票券',
    value: 'tickets',
  },
  {
    label: '訂單管理',
    value: 'orderManagement',
  },
])
const activeTab = ref('profile')
watch(() => route.query.type, () => {
  activeTab.value = String(route.query.type)
},
{
  immediate: true,
})

function handleSendOrder() {
  console.log('send order')
}

const user = ref({
  email: 'test@gmail.com',
  name: 'test123',
  gender: false,
  birthday: '1996-08-05',
  cellphone: '0982256547',
  address: '三清路77號',
  avatarUrl: 'https://i.namu.wiki/i/pQjJNXL4RNJrLGhvtquanpjtvqUK3iMsQT4GjgaE6aKciAZ88BxNp1RZ1Q0HTTei6msC1ii9q3zlaB2-YWeRaQ.webp',
  lineUserId: 'asdf',
})

const genderRadio = ref(String(user.value.gender))
watch(genderRadio, (value) => {
  user.value.gender = value === 'true'
})

const isEdit = ref(false)

const table = ref(
  [
    {
      label: 'Email',
      value: 'email',
    },
    {
      label: '姓名',
      value: 'name',
    },
    {
      label: '性別',
      value: 'gender',
    },
    {
      label: '生日',
      value: 'birthday',
    },
    {
      label: '手機',
      value: 'cellphone',
    },
    {
      label: '地址',
      value: 'address',
    }])

const isShowMask = ref(false)

function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    const reader = new FileReader()
    reader.onload = (e) => {
      user.value.avatarUrl = e.target?.result as string
    }
    reader.readAsDataURL(input.files[0])
  }
}
const router = useRouter()
function handlePaneClick(activeTab: string) {
  router.push({ query: { ...route.query, type: activeTab } })
}

const orderEvents = ref(
  [
    {
      id: 1,
      name: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025',
      orderNumber: '141777450',
      count: 5,
      date: '2025-08-24',
      url: 'https://static.tixcraft.com/images/activity/25_yinyin_625ac6f479224a41ff6bd26413eb64f5.png',
      location: '台北小巨蛋',
      price: 5000,
    },
    {
      id: 2,
      name: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025',
      orderNumber: '141777450',
      count: 5,
      date: '2025-08-24',
      url: 'https://static.tixcraft.com/images/activity/25_yinyin_625ac6f479224a41ff6bd26413eb64f5.png',
      location: '台北小巨蛋',
      price: 5000,
    },
    {
      id: 3,
      name: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025',
      orderNumber: '141777450',
      count: 5,
      date: '2025-08-24',
      url: 'https://static.tixcraft.com/images/activity/25_yinyin_625ac6f479224a41ff6bd26413eb64f5.png',
      location: '台北小巨蛋',
      price: 5000,
    },
    {
      id: 4,
      name: 'ULC Presents YĪN YĪN LIVE IN TAIPEI 2025',
      orderNumber: '141777450',
      count: 5,
      date: '2025-08-24',
      url: 'https://static.tixcraft.com/images/activity/25_yinyin_625ac6f479224a41ff6bd26413eb64f5.png',
      location: '台北小巨蛋',
      price: 5000,
    },
  ])

const tableConfig = ref([
  {
    label: '日期',
    value: 'date',
  },
  {
    label: '訂單編號',
    value: 'orderNumber',
  },
  {
    label: '名稱',
    value: 'name',
  },
  {
    label: '數量',
    value: 'count',
  },
  {
    label: '地點',
    value: 'location',
  },
  {
    label: '總票價',
    value: 'price',
  },
])

onMounted(() => {
  const bodyElement = document?.querySelector('body')
  bodyElement?.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
})
</script>

<template>
  <div
    class="container my-6 md:my-12"
    :class="{ 'max-w-[780px]': activeTab === 'profile' }"
    :style="{ minHeight: 'calc(100vh - 265px)' }"
  >
    <fwb-tabs
      v-model="activeTab"
      variant="underline"
      class="py-5"
      @click:pane="handlePaneClick(activeTab)"
    >
      <fwb-tab
        v-for="tab in tabs"
        :key="tab.value"
        :name="tab.value"
        :title="tab.label"
      >
        <template v-if="tab.value === 'profile'">
          <form
            v-if="isEdit"
            class="flex flex-col space-y-4 mb-4"
            @submit.prevent="handleSendOrder"
          >
            <div
              class="relative rounded-full w-[150px] h-[150px] overflow-hidden"
              @mouseenter="isShowMask = true"
              @mouseleave="isShowMask = false"
            >
              <img
                :src="user.avatarUrl"
                alt="cover"
                class="w-full h-full object-cover"
              >
              <div
                v-if="isShowMask"
                class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white"
              >
                <Icon
                  name="flowbite:arrow-up-from-bracket-outline"
                  size="30"
                />
                <input
                  id="fileInput"
                  type="file"
                  class="w-full h-full absolute cursor-pointer"
                  style="opacity: 0;"
                  @change="handleFileChange"
                >
              </div>
            </div>

            <fwb-input
              v-model="user.email"
              placeholder="請輸入電子郵件"
              label="Email"
              type="email"
              class="focus:border-secondary focus:ring-secondary"
              :validation-status="user.email && !validateEmailPattern.test(user.email) ? 'error' : undefined"
              required
            >
              <template
                v-if="user.email && !validateEmailPattern.test(user.email)"
                #validationMessage
              >
                請輸入有效的電子郵件地址
              </template>
            </fwb-input>
            <fwb-input
              v-model="user.name"
              placeholder="請輸入姓名"
              label="姓名"
              type="text"
              class="focus:border-secondary focus:ring-secondary"
              :validation-status="user.name && user.name?.length < 2 ? 'error' : undefined"
              required
            >
              <template
                v-if="user.name && user.name?.length < 2"
                #validationMessage
              >
                請輸入正確的姓名
              </template>
            </fwb-input>

            <div>
              <div class="text-sm font-bold">
                性別
              </div>
              <div class="flex">
                <fwb-radio
                  v-model="genderRadio"
                  label="女"
                  value="true"
                />
                <fwb-radio
                  v-model="genderRadio"
                  label="男"
                  value="false"
                />
              </div>
            </div>

            <div>
              <fwb-input
                v-model="user.birthday"
                class="focus:border-secondary focus:ring-secondary"
                type="date"
                label="生日"
                placeholder="enter your name"
                size="md"
              />
            </div>

            <fwb-input
              v-model="user.cellphone"
              placeholder="請輸入手機"
              label="手機"
              type="tel"
              class="focus:border-secondary focus:ring-secondary"
              :validation-status="user.cellphone && !validateCellphonePattern.test(user.cellphone) ? 'error' : undefined"
              required
            >
              <template
                v-if="user.cellphone && !validateCellphonePattern.test(user.cellphone)"
                #validationMessage
              >
                請輸入正確的手機號碼
              </template>
            </fwb-input>
            <fwb-input
              v-model="user.address"
              placeholder="請輸入地址"
              label="地址"
              type="text"
              class="focus:border-secondary focus:ring-secondary"
              :validation-status="user.address && !user.address?.length ? 'error' : undefined"
              required
            >
              <template
                v-if="user.address && !user.address?.length"
                #validationMessage
              >
                請輸入地址
              </template>
            </fwb-input>
            <div class="flex w-full space-x-4">
              <fwb-button
                class="w-[50%] bg-primary hover:bg-primary focus:ring-opacity-0 transition duration-500 ease-in-out"
                type="submit"
              >
                確認送出
              </fwb-button>
              <fwb-button
                outline
                class="w-[50%] border-primary hover:bg-transperant text-primary hover:text-primary focus:ring-opacity-0 transition duration-500 ease-in-out"
                @click="isEdit=false"
              >
                取消
              </fwb-button>
            </div>
          </form>

          <section v-else>
            <div class="flex justify-between items-end mb-6">
              <div
                class="rounded-full w-[150px] h-[150px] overflow-hidden"
              >
                <img
                  :src="user.avatarUrl"
                  alt="avatar"
                  class="w-full h-full object-cover"
                >
              </div>
              <div>
                <fwb-button
                  class=" bg-primary hover:bg-primary focus:ring-opacity-0 transition duration-500 ease-in-out"
                  @click="isEdit=true"
                >
                  修改資料
                </fwb-button>
              </div>
            </div>

            <div
              v-for="config in table"
              :key="config.value"
              class="mb-6"
            >
              <div>
                <div class="text-sm font-bold">
                  {{ config.label }}
                </div>
                <div class="py-2">
                  <span v-if="config.value === 'birthday'">{{ user.birthday }}</span>
                  <span v-else-if="config.value ==='gender'">{{ user[config.value] ?'女':'男' }}</span>
                  <span v-else-if="config.value !== 'avatarUrl'"> {{ user[config.value] }}</span>
                </div>
              </div>
              <div class="border-b border-gray-300" />
            </div>

            <section>
              <div class="text-sm font-bold mb-2 text-primary flex items-center space-x-2">
                <Icon
                  name="flowbite:forward-outline"
                  size="20"
                />
                須加入官方帳號才能收到推播
              </div>

              <a
                href="https://lin.ee/e1mTZkJ"
                target="_blank"
                class="flex items-center space-x-2"
              >
                <img
                  src="../assets/img/LINE_logo.png"
                  class="w-[30px] h-[30px]"
                  alt="line"
                >
                <div class="text-sm font-bold">
                  <span
                    :class=" { 'text-primary': user.lineUserId.length == 0 }"
                  >
                    {{ user.lineUserId.length ? '已連結':'尚未連結' }}  Line
                  </span>
                  ，請務必加入官方帳號
                </div>
              </a>
            </section>
          </section>
        </template>
        <template v-else-if="tab.value === 'tickets'">
          <div class="flex flex-col space-y-8">
            <div
              v-for="event in orderEvents"
              :key="event.id"
              class="grid grid-cols-12 gap-4 md:gap-0 shadow-lg"
            >
              <div class="col-span-12 md:col-span-5">
                <img
                  :src="event.url"
                  alt=""
                  class="h-full object-cover"
                >
              </div>
              <div class="col-span-12 md:col-span-5 px-4 md:py-4 space-y-2 text">
                <div
                  v-for="config in tableConfig"
                  :key="config.value"
                >
                  <div class="grid grid-cols-12">
                    <div class="col-span-3 md:col-span-2 font-bold">
                      {{ config.label }}
                    </div>
                    <div class="col-span-9 md:col-span-10 md:min-w-auto">
                      <span
                        v-if="config.value=='price'"
                        class="font-bold"
                      > $ {{ event[config.value] }}</span>
                      <span v-else> {{ event[config.value] }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-span-12 md:col-span-2">
                <div class="h-full flex justify-end md:flex-col items-center md:justify-center space-x-3 md:space-x-0 md:space-y-3 px-4 pb-4 md:pb-0">
                  <fwb-button
                    size="sm"
                    outline
                    class="md:w-full border-primary text-primary hover:bg-primary focus:ring-opacity-0 hover:text-white"
                  >
                    退票
                  </fwb-button>

                  <fwb-button
                    size="sm"
                    outline
                    class="md:w-full border-primary text-primary hover:bg-primary focus:ring-opacity-0 hover:text-white"
                  >
                    轉讓票券
                  </fwb-button>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="tab.value === 'orderManagement'">
          <div>
            orderManagement
          </div>
        </template>
      </fwb-tab>
    </fwb-tabs>
  </div>
</template>

<style lang="scss" scoped>
:deep(.active){
  color: theme('colors.primary');
  border-bottom: solid 2px theme('colors.primary');
}
:deep([type='radio']){
  &:checked{
    background-color: theme('colors.primary');
  }
  &:focus{
  box-shadow: 0 0 0 1px theme('colors.primary');
  }
}
</style>
