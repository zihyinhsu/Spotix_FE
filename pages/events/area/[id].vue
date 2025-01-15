<script setup lang="ts">
import VueClientRecaptcha from 'vue-client-recaptcha'

const { currentEvent, sessionsData, getEventById, getSessionsByEventId, getAreaById } = useEventData()

onMounted(async () => {
  await getEventById(Number(route.params.id))
  // 取得場次
  await getSessionsByEventId(Number(route.params.id))
})
const route = useRoute()

const purchaseStep = ref([
  {
    label: '選擇區域',
    value: 'chooseArea',
  },
  {
    label: '選擇張數',
    value: 'chooseTickets',
  },
  {
    label: '購票確認',
    value: 'purchaseConfirm',
  },
  {
    label: '確認付款',
    value: 'payment',
  },
  {
    label: '完成訂購',
    value: 'orderResult',
  },
])

const activeStep = ref('chooseArea')
watch(activeStep, () => {
  scrollToTop()
})

const { userData } = useUser()
onMounted(() => {
  console.log('userData', userData.value)
  if (route.path === '/events/area/orderResult') {
    activeStep.value = 'orderResult'
  }
  else {
    // 購票會員聯絡資訊
    if (!userData.value) {
      navigateTo('/login')
      notify.value = {
        visible: true,
        status: 'danger',
        message: '請先登入會員',
      }
    }
  }
})

const sessionOptions = computed(() => {
  return sessionsData.value.map(session => ({
    name: session.name,
    value: String(session.id),
    date: session.sessionTime,
  }))
})
const selectedSessionId = ref('')
const selectedSession = computed<sessionType | undefined>(() => sessionsData.value.find(area => String(area.id) === selectedSessionId.value))
const currntSession = computed(() => sessionsData.value.find(session => session.id === Number(selectedSessionId.value)))

watch(() => route.query.session, () => {
  selectedSessionId.value = String(route.query.session)
  scrollToTop()
},
{
  immediate: true,
})

const activeChooseSelection = ref('computer')
const chooseSelection = ref([
  {
    label: '電腦配位',
    value: 'computer',
  },
  {
    label: '自行選位',
    value: 'personal',
  },
])

const soldoutStatus = computed(() => {
  return (ticketsLeftCount) => {
    // 根據參數計算並返回值
    if (ticketsLeftCount === 0) return '已售完'
    else if (ticketsLeftCount < 10) return `剩餘 ${ticketsLeftCount} 張`
    else return '熱賣中'
  }
})

// 選擇區域
const isOpenSeatModel = ref(false)
const tempAreaData = ref<areaType>()
async function handleChooseArea(id: areaType['id']) {
  const result = await getAreaById(id)

  if (result.value.data?.[0]) {
    const areaData = result.value.data?.[0]
    if (areaData.qty === 0) return
    tempAreaData.value = useCloned(areaData).cloned.value
    // 電腦選位
    if (activeChooseSelection.value === 'computer') {
      activeStep.value = 'chooseTickets'
      if (choosedSeatNum.value.length === 0)choosedSeatNum.value = '1'
      return
    }
    isOpenSeatModel.value = true
    choosedTicketsArr.value = []
  }
}

function handleResetAreaModal() {
  isOpenSeatModel.value = false
  tempAreaData.value = undefined
  choosedTicketsArr.value = []
}

// 選擇座位
const notify = useNotify()

function handleChooseSeat(ticket) {
  if (choosedTicketsArr.value.length === maxSeatNum) {
    if (!ticket.isSold && ticket.isChoose) {
      ticket.isChoose = !ticket.isChoose
      choosedTicketsArr.value = tempAreaData.value?.tickets.filter(ticket => ticket.isChoose && !ticket.isSold) || []
    }
    else {
      notify.value = {
        visible: true,
        status: 'danger',
        message: '最多只能選擇四個座位',
      }
    }
  }
  else {
    if (!ticket.isSold) ticket.isChoose = !ticket.isChoose
    choosedTicketsArr.value = tempAreaData.value?.tickets.filter(ticket => ticket.isChoose && !ticket.isSold) || []
  }
  console.log('已選的座位', choosedTicketsArr.value)
}

// 確認座位
const choosedTicketsArr = ref<ticketType[]>([])
function seatConfirm() {
  isOpenSeatModel.value = false
  activeStep.value = 'chooseTickets'
}

// 產出電腦配位的票數選項
const maxSeatNum = 4
const computerSelectionOptions = computed(() => tempAreaData.value?.qty
  ? Array.from({ length: tempAreaData.value.qty > maxSeatNum ? maxSeatNum : tempAreaData.value.qty }, (_, i) => ({
    name: (i + 1).toString(),
    value: (i + 1).toString(),
  }))
  : [])

// 電腦選隨意座位
const choosedSeatNum = ref('')

// 隨機選出兩個元素的函數
function getRandomTickets(tickets, count) {
  return tickets
    .sort(() => 0.5 - Math.random()) // 隨機打亂陣列
    .slice(0, count) // 選取前 count 個元素
}

watch(choosedSeatNum, () => {
  if (Number(choosedSeatNum.value) && tempAreaData.value) {
    const randomTickets = getRandomTickets(tempAreaData.value.tickets.filter(ticket => !ticket.isSold), Number(choosedSeatNum.value))
    randomTickets.forEach(ticket => ticket.isChoose = true)
    choosedTicketsArr.value = randomTickets
  }
  console.log('已選的座位', choosedTicketsArr.value)
})

// 驗證碼
const CaptchaInputValue = ref()

const captchaCode = ref({
  captchaCode: null,
  isValid: false,
})

function getCaptchaCode(value) {
  captchaCode.value.captchaCode = value
}

function checkValidCaptcha(value) {
  captchaCode.value.isValid = value
}

const isLoading = useLoading()

function handleSendCaptcha() {
  if (!captchaCode.value.isValid) {
    notify.value = {
      visible: true,
      status: 'danger',
      message: '請輸入正確的驗證碼',
    }
    return
  }
  if (!isCheck.value) {
    notify.value = {
      visible: true,
      status: 'danger',
      message: '請勾選同意條款',
    }
    return
  }
  isLoading.value = true
  activeStep.value = 'purchaseConfirm'
}
// 同意條款
const isCheck = ref(false)

// 購票確認
const orderConfig = ref([
  {
    label: '演出場次',
    value: 'session',
  },
  {
    label: '區域',
    value: 'area',
  },
  {
    label: '座位',
    value: 'seat',
  },
  {
    label: '票種/票價(元)',
    value: 'price',
  },
  {
    label: '',
    value: 'function',
  },
])

const selectedData = computed(() => {
  return choosedTicketsArr.value.map((ticket) => {
    return {
      session: selectedSession.value?.name,
      area: tempAreaData.value?.name,
      seat: `第${ticket.rowNumber}排 ${ticket.seatNumber}號`,
      price: tempAreaData.value?.price || 0,
    }
  })
})

const router = useRouter()
function deleteTicket(index) {
  if (selectedData.value.length === 1) router.push('/memberCenter?type=orderManagement')
  else choosedTicketsArr.value.splice(index, 1)
  isLoading.value = true
}

// 送出訂單

const { EncryptOrder } = useOrderData()

async function handleSendOrder() {
  isLoading.value = true
  const encryptOrderParams = {
    total: selectedData.value.reduce((acc, item) => acc + item.price, 0),
    ItemDesc: currentEvent.value?.name,
    createdTime: new Date().toISOString(),
    ticketIds: choosedTicketsArr.value.map(ticket => ticket.id).join(','),
  }

  const result = await EncryptOrder(encryptOrderParams)
  if (result?.value?.data?.[0]) {
    const encryptOrderData = result?.value?.data?.[0]
    await sendOrderTonewebPay(encryptOrderData)
  }
}

async function sendOrderTonewebPay(encryptOrderData) {
  const form = document.createElement('form')
  form.method = 'POST'
  form.action = 'https://ccore.newebpay.com/MPG/mpg_gateway'

  // 設置表單的 enctype 屬性
  form.enctype = 'application/x-www-form-urlencoded'

  // 將 orderData 轉換為 URLSearchParams 並添加到表單中
  const { merchantID, tradeSha, tradeInfo, timeStamp, version, notifyUrl, returnUrl, merchantOrderNo, amt, itemDesc, email } = encryptOrderData
  const data = {
    MerchantID: merchantID,
    TradeSha: tradeSha,
    TradeInfo: tradeInfo,
    TimeStamp: timeStamp,
    Version: version,
    NotifyUrl: notifyUrl,
    ReturnUrl: returnUrl,
    MerchantOrderNo: merchantOrderNo,
    Amt: amt,
    ItemDesc: itemDesc,
    Email: email,
    OrderNumber: merchantOrderNo,
  }
  const params = new URLSearchParams(data)
  for (const [key, value] of params) {
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = key
    input.value = value
    form.appendChild(input)
  }

  document.body.appendChild(form)
  form.submit()
}
</script>

<template>
  <div>
    <BreadCrumb
      :event-data="currentEvent"
      :current-step="purchaseStep.find(s => s.value === activeStep)?.label"
    />
    <section class="bg-dark sticky top-[9.5rem] md:top-[5.7rem] z-[5] shadow-2xl">
      <div class="container text-white flex justify-between">
        <div
          v-for="step in purchaseStep"
          :key="step.value"
          class="p-4 text-center"
          :class="{
            'bg-primary cursor-pointer': activeStep === step.value,
            'bg-secondary': activeStep !== step.value,
          }"
        >
          {{ step.label }}
        </div>
      </div>
    </section>
    <section class="md:container my-6 ">
      <template v-if="activeStep === 'chooseArea'">
        <div class="md:flex md:items-center">
          <img
            :src="currentEvent?.coverUrl"
            :alt="currentEvent?.name"
            class="md:h-[110px]"
          >
          <div class="container my-4 md:pr-0">
            <div class="font-bold text-lg mb-2">
              {{ currentEvent?.name }}
            </div>
            <div>
              <fwb-select
                v-model="selectedSessionId"
                class="ticket-select"
                :options="sessionOptions"
                placeholder="選擇場次"
                @change="$router.push({ query: { session: selectedSessionId } })"
              />
            </div>
          </div>
        </div>
        <div class="container md:px-0 ">
          <div class="divider" />
          <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 md:col-span-6">
              <img
                :src="currentEvent?.imgUrl"
                :alt="currentEvent?.name"
                class="object-fit sticky top-40"
              >
            </div>
            <div class="col-span-12 md:col-span-6">
              <div class="flex">
                <div
                  v-for="selection in chooseSelection"
                  :key="selection.value"
                  class="p-4 text-center w-full cursor-pointer transition-ease"
                  :class="{
                    'bg-primary text-white': activeChooseSelection === selection.value,
                    'bg-gray-200 hover:bg-gray-100': activeChooseSelection !== selection.value,
                  }"
                  @click="activeChooseSelection = selection.value"
                >
                  {{ selection.label }}
                </div>
              </div>
              <div class="divider" />
              <section>
                <div
                  v-for="area in currntSession?.areas"
                  :key="area.id"
                >
                  <div
                    class="flex items-center space-x-4 p-2"
                    :class="area.qty ? 'cursor-pointer hover:bg-gray-200' : 'cursor-not-allowed'"
                    @click="handleChooseArea(area.id)"
                  >
                    <Icon
                      :name="area.qty ? 'line-md:emoji-grin-twotone' : 'line-md:emoji-neutral-twotone'"
                      :class=" area.qty ? 'text-primary' : 'text-gray-500'"
                      size="30"
                    />
                    <span>{{ area.name }}</span>
                    <span :class="{ 'text-primary font-bold': area.ticketsLeftCount, 'text-gray-500 font-bold': !area.ticketsLeftCount }">{{ soldoutStatus(area.ticketsLeftCount) }}</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="activeStep === 'chooseTickets'">
        <EventSection
          :event-data="currentEvent"
          :selected-session="selectedSession"
        />

        <div class="container md:px-0">
          <div class="divider" />
          <div class="shadow-xl p-6 space-y-6">
            <div class="text-center p-2 space-x-2 bg-gray-300">
              <span>{{ tempAreaData?.name }}</span>
              <div class="text-xs text-primary mt-2">
                * 最多僅可選四張票 *
              </div>
            </div>

            <fwb-table>
              <fwb-table-head>
                <fwb-table-head-cell class="text-center">
                  <span class="text-md md:text-lg font-bold">
                    票種 / 票價(元)
                  </span>
                </fwb-table-head-cell>
                <fwb-table-head-cell class="text-center">
                  <span class="text-md md:text-lg font-bold">
                    數量選擇
                  </span>
                </fwb-table-head-cell>
              </fwb-table-head>
              <fwb-table-body class="tBody">
                <fwb-table-row>
                  <fwb-table-cell class="text-center">
                    全票 {{ tempAreaData?.price }}
                  </fwb-table-cell>
                  <fwb-table-cell class="last:text-center text-bold">
                    <template
                      v-if="activeChooseSelection==='personal'"
                    >
                      {{ choosedTicketsArr.length }}
                    </template>
                    <template v-else>
                      <fwb-select
                        v-model="choosedSeatNum"
                        class="ticket-select"
                        :options="computerSelectionOptions"
                        placeholder="選擇數量"
                      />
                    </template>
                  </fwb-table-cell>
                </fwb-table-row>
              </fwb-table-body>
            </fwb-table>
            <!-- 驗證碼 -->
            <div class="flex justify-center items-center space-x-4">
              <VueClientRecaptcha
                :value="CaptchaInputValue"
                class="h-[50px] md:h-[60px] w-[150px] md:w-[200px]"
                @get-code="getCaptchaCode"
                @is-valid="checkValidCaptcha"
              />
              <fwb-input
                v-model="CaptchaInputValue"
                placeholder="請輸入驗證碼"
                class="focus:ring-opacity-0 focus:border-dark"
              />
            </div>
            <div class="flex justify-center">
              <fwb-checkbox
                v-model="isCheck"
                class="cursor-pointer"
                label="我已詳細閱讀且同意會員服務條款及節目資訊公告，並同意放棄契約審閱期，且授權貴公司於條款目的範圍內，進行本人之個人資料蒐集、處理及利用。"
              />
            </div>

            <section class="flex justify-center space-x-4">
              <fwb-button
                color="alternative"
                class="border-primary text-primary hover:bg-primary hover:text-white focus:ring-opacity-0"
                @click="activeStep = 'chooseArea'"
              >
                重新選擇
              </fwb-button>
              <fwb-button
                class="bg-primary text-white hover:bg-primary focus:ring-opacity-0"
                @click="handleSendCaptcha"
              >
                確認張數
              </fwb-button>
            </section>

            <section class="flex justify-center">
              <img
                :src="currentEvent?.imgUrl"
                :alt="currentEvent?.name"
                class="object-fit w-full md:w-[700px]"
              >
            </section>
          </div>
        </div>
      </template>

      <template v-else-if="activeStep === 'purchaseConfirm' ">
        <section class="space-y-6">
          <EventSection
            :event-data="currentEvent"
            :selected-session="selectedSession"
          />
          <div class="divider" />

          <section class="bg-gray-300">
            <div class="p-4 font-bold flex items-center border-b-4">
              <Icon
                name="line-md:account"
                size="24"
                class="mr-2"
              />
              購票會員聯絡資訊
            </div>

            <div class="p-4">
              <span class="mr-4">會員姓名</span>
              <span>{{ userData?.userName }}</span>
            </div>
            <div class="p-4">
              <span class="mr-4">電子郵件</span>
              <span>{{ userData?.email }}</span>
            </div>
            <div class="p-4">
              <span class="mr-4">聯絡電話</span>
              <span>{{ userData?.phoneNumber }}</span>
            </div>
          </section>

          <div class="divider" />

          <section>
            <fwb-table class="hidden md:block">
              <fwb-table-head>
                <fwb-table-head-cell
                  v-for="config in orderConfig"
                  :key="config.value"
                  class="text-center"
                >
                  <span class="text-md md:text-lg font-bold">
                    {{ config.label }}
                  </span>
                </fwb-table-head-cell>
              </fwb-table-head>
              <fwb-table-body class="tBody">
                <fwb-table-row
                  v-for="(item, idx) in selectedData"
                  :key="idx"
                >
                  <fwb-table-cell
                    v-for="config in orderConfig"
                    :key="config.value"
                    class="text-center"
                  >
                    <template v-if="config.value !== 'function'">
                      {{ item[config.value] }}
                    </template>
                    <template v-else>
                      <fwb-button
                        outline
                        class="border-primary hover:bg-transperant text-primary hover:text-primary focus:ring-opacity-0 transition-ease"
                        @click="deleteTicket(idx)"
                      >
                        <span class="flex items-center">
                          <Icon
                            name="material-symbols:delete-rounded"
                            size="24"
                            class="mr-2"
                          />
                          <span>刪除</span>
                        </span>
                      </fwb-button>
                    </template>
                  </fwb-table-cell>
                </fwb-table-row>
              </fwb-table-body>
            </fwb-table>
            <div class="container md:hidden">
              <div
                v-for="(item, idx) in selectedData"
                :key="idx"
                class="p-4 shadow-xl mb-8"
              >
                <div
                  v-for="(config, configIdx) in orderConfig"
                  :key="configIdx"
                  class="flex justify-between"
                >
                  <div class="w-[100px] p-2 font-bold">
                    {{ config.label }}
                  </div>
                  <div class="text-right w-[200px] p-2">
                    <span
                      v-if="config.value !== 'function'"
                      class="block"
                    > {{ item[config.value] }} </span>

                    <fwb-button
                      v-else
                      outline
                      size="sm"
                      class="border-primary hover:bg-transperant text-primary hover:text-primary focus:ring-opacity-0 transition-ease"
                      @click="deleteTicket(idx)"
                    >
                      <span class="flex items-center">
                        <Icon
                          name="material-symbols:delete-rounded"
                          size="24"
                          class="mr-2"
                        />
                        <span>刪除</span>
                      </span>
                    </fwb-button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            v-if="selectedData.length > 0"
            class="container md:px-0 flex flex-col md:items-end w-full space-y-4"
          >
            <div class="flex p-2 border-b border-gray-300">
              <div class="mr-2 md:w-[120px] font-bold">
                訂購張數 :
              </div>
              <div class="md:w-[120px]">
                {{ selectedData.length }}
              </div>
            </div>
            <div class="flex p-2 border-b border-gray-300">
              <div class="mr-2 md:w-[120px] font-bold">
                總計 :
              </div>
              <div class="md:w-[120px]">
                {{ selectedData.reduce((acc, item) => acc + item.price, 0) }}
              </div>
            </div>
          </section>
          <section class="flex justify-center space-x-4">
            <fwb-button
              color="alternative"
              class="border-primary text-primary hover:bg-primary hover:text-white focus:ring-opacity-0"
              @click="router.push('/memberCenter?type=orderManagement')"
            >
              取消訂單
            </fwb-button>
            <fwb-button
              class="bg-primary text-white hover:bg-primary focus:ring-opacity-0"
              @click="handleSendOrder"
            >
              下一步
            </fwb-button>
          </section>
        </section>
      </template>
      <template v-else-if="activeStep === 'orderResult'">
        <section class="min-h-[calc(100vh-450px)] md:min-h-[calc(100vh-314px)]">
          <div class="flex items-center justify-center min-h-[calc(100vh-450px)] md:min-h-[calc(100vh-314px)] bg-gray-100">
            <div class="text-center">
              <div class="text-[40px] md:text-2xl font-bold text-primary mb-6">
                結帳成功，請回到訂單頁面確認訂單!
              </div>
              <fwb-button
                class="text-lg bg-primary text-white hover:bg-primary focus:ring-opacity-0"
                @click="router.push('/memberCenter?type=orderManagement')"
              >
                前往訂單
              </fwb-button>
            </div>
          </div>
        </section>
      </template>
    </section>

    <!-- 選位 Modal -->
    <fwb-modal
      v-if="isOpenSeatModel && tempAreaData"
      size="5xl"
      @close="handleResetAreaModal"
    >
      <template #header>
        <div class="flex flex-col justify-center items-center space-y-2 w-full text-sm">
          <span class="text-lg">{{ `${tempAreaData.name}` }}</span>

          <div class="flex space-x-4">
            <span class="flex items-center">
              <Icon
                name="solar:armchair-bold"
                size="24"
                class="mr-2"
              />
              <span>已售出</span>
            </span>
            <span class="flex items-center">
              <Icon
                name="solar:armchair-line-duotone"
                size="24"
                class="mr-2"
              />
              <span>空位</span>
            </span>
            <span class="flex items-center">
              <Icon
                name="solar:armchair-bold-duotone"
                size="24"
                class="mr-2 text-primary"
              />
              <span>目前選位</span>
            </span>
          </div>
        </div>
      </template>
      <template #body>
        <div class="grid grid-cols-12 gap-6">
          <span
            v-for="ticket in tempAreaData.tickets"
            :key="ticket.id"
            class="col-span-2 md:col-span-1"
          >
            <div
              class="flex flex-col justify-center items-center"
              :class="{ 'hover:text-primary cursor-pointer': !ticket.isSold }"
              @click="handleChooseSeat(ticket)"
            >

              <Icon
                v-if="ticket.isSold"
                name="solar:armchair-bold"
                size="24"
                class="mb-2 cursor-not-allowed"
              />
              <Icon
                v-else
                :name="ticket.isChoose ? 'solar:armchair-bold-duotone' : 'solar:armchair-line-duotone'"
                :class="{ 'text-primary': ticket.isChoose }"
                size="24"
                class="mb-2"
              />
              <div
                class="text-[10px] text-center flex justify-center"
              >{{ `第${ticket.rowNumber}排 ${ticket.seatNumber}號` }}</div>
            </div>
          </span>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-between space-x-4">
          <fwb-button
            outline
            class="w-[50%] border-primary hover:bg-transperant text-primary hover:text-primary focus:ring-opacity-0 transition duration-500 ease-in-out"
            @click="handleResetAreaModal"
          >
            取消
          </fwb-button>
          <fwb-button
            class="w-[50%] bg-primary hover:bg-primary focus:ring-opacity-0"
            @click="seatConfirm"
          >
            確認座位
          </fwb-button>
        </div>
      </template>
    </fwb-modal>
  </div>
</template>

<style lang="scss" scoped>
:deep(.ticket-select select){
  text-align: center;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0 theme('colors.secondary');
    border-color:theme('colors.secondary');
  }
}
:deep(.tBody > tr > td){
  text-align: center !important;
  max-width: 260px;
  white-space: wrap;
}

:deep([type='checkbox']){
  &:checked{
    background-color: theme('colors.primary');
  }
  &:focus{
  box-shadow: 0 0 0 1px theme('colors.primary');
  }
}
</style>
