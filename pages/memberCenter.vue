<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'

const route = useRoute()
const notify = useNotify()
const { userData, getUserData, updateUserProfile, userUploadAvatar } = useUser()

// 更新會員資料
async function handleUpdateProfile() {
  const userDataCloned = useCloned(userFormData.value).cloned.value
  userDataCloned.birthday = new Date(userDataCloned.birthday).toISOString()
  const result = await updateUserProfile(userDataCloned)
  isEdit.value = false
  if (result.value.isSuccess) {
    notify.value = {
      visible: true,
      status: 'success',
      message: result.value?.message,
    }
  }
  else {
    notify.value = {
      visible: true,
      status: 'danger',
      message: result.value?.message,
    }
  }
}

if (!userData.value) await navigateTo('/login')

const isEdit = ref(false)

// 取消更改會員資料
async function handleCancel() {
  await getUserProfile()
  isEdit.value = false
}

const table = ref(
  [
    {
      label: 'Email',
      value: 'email',
    },
    {
      label: '姓名',
      value: 'userName',
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
      value: 'phoneNumber',
    },
    {
      label: '地址',
      value: 'address',
    }])

const isShowMask = ref(false)
const userFormData = ref()

// 性別
const genderRadio = ref()
watch(genderRadio, (value) => {
  userFormData.value.gender = value === 'true'
},
)

// 取得會員資料
async function getUserProfile() {
  await nextTick()
  await getUserData()

  if (userData.value) {
    const { email, userName, avatarUrl, gender, birthday, phoneNumber, address, lineId } = userData.value
    userFormData.value = {
      email,
      userName,
      avatarUrl,
      gender,
      phoneNumber,
      lineId,
      address,
      birthday: useDateFormat(birthday, 'YYYY-MM-DD').value,
    }
    genderRadio.value = String(userFormData.value.gender)
  }
}

await nextTick()
await getUserProfile()

async function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length > 0) {
    const formData = new FormData()
    formData.append('file', input.files[0])
    const result = await userUploadAvatar(formData)
    if (result.value?.isSuccess) {
      notify.value = {
        visible: true,
        status: 'success',
        message: result.value?.message,
      }
      if (userData.value) {
        userData.value.avatarUrl = result.value.data?.[0].imageUrl
      }
    }
    else {
      notify.value = {
        visible: true,
        status: 'danger',
        message: result.value?.message,
      }
    }
  }
}

const { getAreaById } = useEventData()

const userOrdersData = ref<orderType[]>([])
const ticketsData = ref<ticketType[]>([])
onMounted(async () => {
  if (userData.value?.orders) {
    userOrdersData.value = userData.value.orders

    ticketsData.value = userOrdersData.value.map(order => order.tickets).flat()
    console.log('userOrdersData.value', userOrdersData.value, ticketsData.value)
    nextTick(async () => {
      const result = await getAreaById(ticketsData.value[0].areaId)
      ticketsData.value.forEach((ticket) => {
        ticket.price = result.value.data?.[0].price
      })
      console.log('result', result.value.data?.[0].price)
    })
  }
})

const ordersTableConfig = ref([
  {
    label: '訂單編號',
    value: 'orderNumber',
  },
  {
    label: '活動場次',
    value: 'sessionName',
  },
  {
    label: '建立時間',
    value: 'createdTime',
  },
  {
    label: '總金額',
    value: 'total',
  },
  {
    label: '票券張數',
    value: 'tickets',
  },
])
const ticketsTableConfig = ref([

  {
    label: '活動名稱',
    value: 'sessionName',
  },
  {
    label: '票券編號',
    value: 'ticketNumber',
  },
  {
    label: '座位',
    value: 'seat',
  },
  {
    label: '票價',
    value: 'price',
  },
])
const router = useRouter()

//  tab
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
  scrollToTop()
},
{
  immediate: true,
})
function handlePaneClick(activeTab: string) {
  router.push({ query: { ...route.query, type: activeTab } })
}

// Model
const isShowModal = ref(false)
function handleTranfer() {
  console.log('handleTranfer')
  isShowModal.value = false
}

const transforEmail = ref('')
const modelType = ref('')

const tempTicketsData = ref<ticketType[]>([])
function openModel(type: string, tickets: ticketType[]) {
  isShowModal.value = true
  tempTicketsData.value = tickets
  if (type === 'detail') {
    console.log('detail')
    modelType.value = 'detail'
  }
  else {
    console.log('transfer')
    modelType.value = 'transfer'
  }
}
</script>

<template>
  <div
    class="bg-gray-100"
  >
    <div
      class="container py-6 md:py-12 min-h-[calc(100vh-211px)] md:min-h-[calc(100vh-169px)]"
      :class="{ 'max-w-[780px]': activeTab === 'profile' }"
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
            <div class="flex items-end justify-between mb-6">
              <div
                class="relative rounded-full w-[150px] h-[150px] overflow-hidden"
                @mouseenter="isShowMask = true"
                @mouseleave="isShowMask = false"
              >
                <img
                  v-if="userData?.avatarUrl"
                  :src="userData?.avatarUrl"
                  alt="cover"
                  class="w-full h-full object-cover"
                >
                <img
                  else
                  src="/images/avatar.png"
                  alt="cover"
                  class="w-full h-full object-cover"
                >

                <div
                  v-if="isShowMask"
                  class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white"
                >
                  <Icon
                    name="line-md:upload-loop"
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
              <fwb-button
                v-if="!isEdit"
                class="bg-primary hover:bg-primary focus:ring-opacity-0 transition duration-500 ease-in-out"
                @click="isEdit=true"
              >
                修改資料
              </fwb-button>
            </div>

            <form
              v-if="isEdit"
              class="flex flex-col space-y-4 mb-4"
              @submit.prevent="handleUpdateProfile"
            >
              <fwb-input
                v-model="userFormData.email"
                placeholder="請輸入電子郵件"
                label="Email"
                type="email"
                class="focus:border-secondary focus:ring-secondary"
                :validation-status="userData.email && !validateEmailPattern.test(userFormData.email) ? 'error' : undefined"
                disabled
              >
                <template
                  v-if="userData.email && !validateEmailPattern.test(userFormData.email)"
                  #validationMessage
                >
                  請輸入有效的電子郵件地址
                </template>
              </fwb-input>
              <fwb-input
                v-model="userFormData.userName"
                placeholder="請輸入姓名"
                label="姓名"
                type="text"
                class="focus:border-secondary focus:ring-secondary"
                :validation-status="userFormData.userName && userFormData.userName?.length < 2 ? 'error' : undefined"
                required
              >
                <template
                  v-if="userFormData.userName && userFormData.userName?.length < 2"
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
                  v-model="userFormData.birthday"
                  class="focus:border-secondary focus:ring-secondary"
                  type="date"
                  label="生日"
                  placeholder="enter your name"
                  size="md"
                />
              </div>

              <fwb-input
                v-model="userFormData.phoneNumber"
                placeholder="請輸入手機"
                label="手機"
                type="tel"
                class="focus:border-secondary focus:ring-secondary"
                :validation-status="userFormData.phoneNumber && !validateCellphonePattern.test(userFormData.phoneNumber) ? 'error' : undefined"
                required
              >
                <template
                  v-if="userFormData.phoneNumber && !validateCellphonePattern.test(userFormData.phoneNumber)"
                  #validationMessage
                >
                  請輸入正確的手機號碼
                </template>
              </fwb-input>
              <fwb-input
                v-model="userFormData.address"
                placeholder="請輸入地址"
                label="地址"
                type="text"
                class="focus:border-secondary focus:ring-secondary"
                :validation-status="!userFormData.address ? 'error' : undefined"
                required
              >
                <template
                  v-if="!userFormData.address"
                  #validationMessage
                >
                  請輸入正確的地址
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
                  @click="handleCancel"
                >
                  取消
                </fwb-button>
              </div>
            </form>

            <section v-else>
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
                    <span v-if="config.value === 'birthday'">{{ userFormData.birthday }}</span>
                    <span v-else-if="config.value ==='gender'">{{ userFormData[config.value] ?'女':'男' }}</span>
                    <span v-else-if="config.value !== 'avatarUrl'"> {{ userFormData[config.value] }}</span>
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
                    src="/images/line.png"
                    class="w-[30px] h-[30px]"
                    alt="line"
                  >
                  <div class="text-sm font-bold">
                    <span
                      :class=" { 'text-primary': !userFormData.lineUserId }"
                    >
                      {{ userFormData.lineId ? '已連結':'尚未連結' }}  Line
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
                v-for="ticket in ticketsData"
                :key="ticket.id"
                class="grid grid-cols-12 gap-4 md:gap-0 shadow-lg bg-white rounded-lg p-4"
              >
                <div class="col-span-12 md:col-span-10 px-4 md:py-4 space-y-2 text">
                  <div
                    v-for="config in ticketsTableConfig"
                    :key="config.value"
                  >
                    <div class="grid grid-cols-12">
                      <div class="col-span-3 md:col-span-2 font-bold">
                        {{ config.label }}
                      </div>
                      <div class="col-span-9 md:col-span-10 md:min-w-auto">
                        <span v-if="config.value == 'sessionName'">{{ ticket.sessionName }}</span>
                        <span v-else-if="config.value == 'ticketNumber'">{{ ticket.ticketNumber }}</span>
                        <span v-else-if="config.value == 'price'">$ {{ ticket.price }}</span>
                        <span v-else-if="config.value == 'seat'">{{ `第 ${ticket.rowNumber} 排 ${ticket.seatNumber} 號` }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-2">
                  <div
                    class="divider mobile-only"
                  />
                  <div class="flex justify-center items-center md:w-full md:h-full">
                    <QRCode :qr-code-text="ticket.ticketNumber" />
                  </div>
                </div>
              </div>
              <template v-if="ticketsData.length === 0">
                <div class="text-center text-lg font-bold text-primary py-6">
                  無資料
                </div>
              </template>
            </div>
          </template>
          <template v-else-if="tab.value === 'orderManagement'">
            <!-- <template v-if="tab.value === 'tickets'">
            <fwb-alert
              type="success"
              class="mb-4"
            >
              <template #icon>
                <Icon
                  name="line-md:bell-twotone-loop"
                  size="24"
                />
              </template>
              <template #title>
                <h3 class="text-lg font-medium ml-2">
                  接收票券
                </h3>
              </template>
              <template #default="{ onCloseClick }">
                <div class="mt-2 mb-4 text-sm">
                  <div class="mb-2">
                    您是否要接收好友 『徐姿茵』（jenny010328@gmail.com） 所轉讓的票券呢？
                  </div>
                  <div class="divider" />
                  <div>活動名稱：DAY6 3RD WORLD TOUR ＜FOREVER YOUNG＞ in KAOHSIUNG</div>
                  <div>日期 : 2025-01-19 18:00</div>
                  <div>座位 : A區 5排 1號</div>
                  <div>票價 : 5000</div>
                </div>
                <div class="flex space-x-4">
                  <fwb-button
                    class="bg-primary hover:bg-primary focus:ring-opacity-0 transition duration-500 ease-in-out"
                    @click="onCloseClick"
                  >
                    接收票券
                  </fwb-button>
                  <fwb-button
                    size="sm"
                    outline
                    class="border-primary text-primary hover:bg-transperant focus:ring-opacity-0 hover:text-primary"
                  >
                    拒絕
                  </fwb-button>
                </div>
              </template>
            </fwb-alert>
          </template> -->
            <div class="flex flex-col space-y-8">
              <div
                v-for="order in userOrdersData"
                :key="order.id"
                class="grid grid-cols-12 gap-4 md:gap-0 shadow-lg bg-white rounded-lg p-4"
              >
                <!-- <div class="col-span-12 md:col-span-5">
                <img
                  :src="event.coverUrl"
                  alt=""
                  class="h-full object-cover"
                >
              </div> -->
                <div class="col-span-12 md:col-span-10 px-4 md:py-4 space-y-2 text">
                  <div
                    v-for="config in ordersTableConfig"
                    :key="config.value"
                  >
                    <div class="grid grid-cols-12">
                      <div class="col-span-3 md:col-span-2 font-bold">
                        {{ config.label }}
                      </div>
                      <div class="col-span-9 md:col-span-10 md:min-w-auto">
                        <span v-if="config.value === 'tickets'">{{ order.tickets.length }} 張</span>
                        <span v-else-if="config.value === 'sessionName'">{{ order.tickets[0].sessionName }}</span>
                        <span v-else-if="config.value === 'createdTime'">{{ formatToLocaleString(order.createdTime) }}</span>
                        <span v-else-if="config.value === 'total'"> $ {{ order.total }}</span>
                        <span v-else> {{ order[config.value] }}</span>
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
                      @click="openModel('detail', order.tickets)"
                    >
                      查看詳情
                    </fwb-button>

                  <!-- <fwb-button
                    v-if="event.date >= new Date().toISOString().split('T')[0]"
                    size="sm"
                    outline
                    class="md:w-full border-primary text-primary hover:bg-primary focus:ring-opacity-0 hover:text-white"
                    @click="openModel('transfer', event)"
                  >
                    轉讓票券
                  </fwb-button> -->
                  </div>
                </div>
              </div>
              <template v-if="userOrdersData.length === 0">
                <div class="text-center text-lg font-bold text-primary py-6">
                  無資料
                </div>
              </template>
            </div>
          </template>
        </fwb-tab>
      </fwb-tabs>
      <fwb-modal
        v-if="isShowModal"
        class="modal"
        @close="isShowModal = false"
      >
        <template #header>
          <div class="flex items-center text-lg font-bold">
            {{ modelType ==='transfer' ? '轉讓票券' : '查看詳情' }}
          </div>
        </template>
        <template #body>
          <template v-if="modelType ==='transfer'">
            <fwb-input
              v-model="transforEmail"
              class="focus:border-secondary focus:ring-opacity-0"
              placeholder="請輸入接收方的 帳號(Email)"
              label="Email"
            />
            <span class="font-bold text-primary text-sm">* 票券一經送出，除非未被接收否則無法自行取消轉讓*</span>
          </template>
          <template v-else>
            <section
              v-for="(ticket, index) in tempTicketsData"
              :key="ticket.id"
            >
              <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="space-y-2">
                  <div
                    v-for="config in ticketsTableConfig"
                    :key="config.value"
                  >
                    <div class="grid grid-cols-12">
                      <div class="col-span-4 md:col-span-3 font-bold">
                        {{ config.label }}
                      </div>
                      <div class="col-span-8 md:col-span-9 md:min-w-auto">
                        <span v-if="config.value == 'sessionName'">{{ ticket.sessionName }}</span>
                        <span v-else-if="config.value == 'ticketNumber'">{{ ticket.ticketNumber }}</span>
                        <span v-else-if="config.value == 'price'"> $ {{ ticket.price }}</span>
                        <span v-else-if="config.value == 'seat'">{{ `第 ${ticket.rowNumber} 排 ${ticket.seatNumber} 號` }}</span>

                        <!-- <span
                       v-if="config.value=='price'"
                       class="font-bold"
                     > $ {{ tempData[config.value] }}</span> -->
                        <!-- <span v-else> {{ tempData[config.value] }}</span> -->
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="divider mobile-only"
                />
                <QRCode :qr-code-text="ticket.ticketNumber" />
              </div>
              <div
                v-if="index !== tempTicketsData.length - 1"
                class="divider"
              />
            </section>
          </template>
        </template>
        <template
          v-if="modelType ==='transfer'"
          #footer
        >
          <div class="flex justify-between">
            <fwb-button
              color="alternative"
              class="border-primary text-primary hover:bg-primary hover:text-white focus:ring-opacity-0"
              @click="isShowModal = false"
            >
              取消
            </fwb-button>
            <fwb-button
              class="bg-primary text-white hover:bg-primary focus:ring-opacity-0"
              @click="handleTranfer"
            >
              確認送出
            </fwb-button>
          </div>
        </template>
      </fwb-modal>
    </div>
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
:deep(.modal > div > .h-full) {
  height: auto !important;
}
</style>
