<script setup lang="ts">
import VueClientRecaptcha from 'vue-client-recaptcha'

const eventData = ref<eventType>({
  id: 1,
  name: 'DAY6 3RD WORLD TOUR ＜FOREVER YOUNG＞ in KAOHSIUNG',
  orderNumber: '141777450',
  seat: 'A區 5排 1號',
  date: '2025-01-19 18:00',
  coverUrl: 'https://static.tixcraft.com/images/activity/25_day6_70552ba96e820fbd83666c05d1b73da8.jpg',
  imgUrl: 'https://static.tixcraft.com/images/field/field_2136_cc5829320466e46d76d8cc12de8728bfda3ef09b06f620cd4fb0b8_o.gif',
  location: '台北小巨蛋',
  price: 5000,
  description: '<p><strong>🎫 LIVE NATION TAIWAN會員預購請由LIVE NATION TAIWAN官網之活動頁面https://bit.ly/DAY6_KH25&nbsp;進入購票</strong><br /> <br /> &nbsp;</p> <p><strong>DAY6 3RD WORLD TOUR &lt;FOREVER YOUNG&gt; in KAOHSIUNG</strong></p> <p><strong>&nbsp;</strong></p> <p>驚喜加場！韓國流行搖滾天團 DAY6<br /> 全新世界巡迴<br /> DAY6 3RD WORLD TOUR &lt;FOREVER YOUNG&gt; in KAOHSIUNG<br /> 1月18日、1月19日 確定連唱兩天</p> <p><strong>&nbsp;</strong></p> <p>&nbsp;</p> <p><strong>DAY6 3RD WORLD TOUR &lt;FOREVER YOUNG&gt; in KAOHSIUNG</strong><br /> <strong>演出日期：2025/01/18 (六) 18:00 (實際開演時間以現場公告為準)<br /> 加場日期：2025/01/19 (日) 18:00 (實際開演時間以現場公告為準)<br /> 演出地點：高雄流行音樂中心海音館（KAOHSIUNG MUSIC CENTER, Hi-Ing Music Hall）<br /> 票價：NT$ 6,800 / 4,800 / 4,300 / 3,800 / 2,800 / 2,300</strong><br /> <strong>* NT$6,800 VIP套票：</strong><br /> <strong>- 優先進入搖滾站區</strong><br /> <strong>- 演前Soundcheck Party</strong><br /> <strong>- 照片小卡套組</strong><br /> <strong>- 掛繩與吊牌x1組</strong><br /> <strong>- 簽名海報（隨機抽100名）</strong></p> <p><strong>*&nbsp;</strong><strong>福利抽獎活動:&nbsp;凡於2025/1/06 (一) 23:59前購買 （NT$ 6,800 VIP Package&nbsp;），並完成付款且無退票之持票者，將可獲得「Signed Poster Lucky draw活動」福利抽獎活動。主辦方將隨機抽出100位幸運兒獲得「簽名海報」。抽獎結果將於&nbsp;2025/1/16 (四)&nbsp;公布於LIVE NATION TAIWAN官方網站、官方社群網頁及拓元節目頁。</strong></p> <p><strong>&nbsp;</strong></p> <p><strong>*&nbsp;</strong><strong>特區搖滾站區NT$6,800與NT$4,800間無實體間隔，請依序號排隊入場，NT$6,800序號從001號起，NT$4,800序號從1,002號起。</strong></p> <p>* 搖滾站區請依票面序號排隊入場、座位區請對號入座</p> <p><strong>&nbsp;</strong></p> <p>* 實際活動開演時間，請以現場公告為準</p> <p>* 本場於演出前5日始開放取票。</p> <p>* 為人身安全考量，孕婦及身高未滿110公分或未滿7歲孩童，請勿購買站區票券，主辦方將有權謝絕入場。</p> <p>* 演出時間不等於&nbsp;VIP&nbsp;福利活動報到時間，請務必於演出日前至&nbsp;LIVE NATION TAIWAN官方網站&nbsp;及社群平台詳讀活動入場時間及相關流程，以免損害權益。</p> <p>* 請務必於演出日前至至&nbsp;LIVE NATION TAIWAN官方網站&nbsp;及社群平台，詳讀確認入場時間流程及相關規範，以免損害自身權益。如未能於公布的整隊時間內報到整隊，將視同放棄您的序號優先權利，需按照現場工作人員指示依現場隊伍順序入場。</p> <p>&nbsp;</p> <p><strong>Official Partner</strong><strong>：&nbsp;DBS Mastercard&nbsp;星展萬事達卡、台灣大哥大、MyVideo</strong></p> <p>&nbsp;</p> <p><strong>售票相關資訊<br /> <strong>🎫</strong>星展萬事達卡卡友預售票</strong><strong>(</strong><strong>僅限星展萬事達卡信用卡與簽帳金融卡</strong><strong>)</strong><br /> <strong>時間：2024/11/12 (二) 11:00 ~ 23:59</strong><br /> <strong>請至：https://tixcraft.com/activity/detail/25_day6_c</strong><br /> * 更多訊息請至&nbsp;priceless.com/DBS-TW&nbsp;瞭解更多。<br /> * 單筆訂單限購4張，可支援行動裝置購票。<br /> * 數量有限，售完為止</p> <p>&nbsp;</p> <p><strong>🎫Live Nation Taiwan</strong><strong>會員預售</strong><br /> <strong>時間：2024/11/13 (三) 11:00 ~ 23:59</strong><br /> 凡在Live Nation Taiwan會員預購截止前完成Live Nation Taiwan官網會員註冊，並成功訂閱電子報者，於預售時間內登入Live Nation Taiwan官網的本場活動頁面，按下預購按鈕即可進入會員預購頁面，並於預購開放時間內進行購票。每位欲購票者皆須同時持有Live Nation Taiwan會員資格與拓元售票系統帳號。<br /> LIVE NATION TAIWAN 會員註冊及預購流程&nbsp;https://bit.ly/LNTPRESALE<br /> * 單筆訂單限購4張，可支援行動裝置購票。</p> <p>&nbsp;</p> <p><strong>🎫</strong><strong>兩場正式開賣</strong><br /> <strong>時間：2024/11/14 (四) 11:00 AM起</strong><br /> 拓元售票系統全面開賣<br /> * 單筆訂單限購4張，可支援行動裝置購票。<br /> * 拓元註冊：https://help.tixcraft.com/hc/zh-tw</p> <p>&nbsp;</p> <p><strong>🎫</strong><strong>台灣大哥大/MyVideo會員獨享購票專區（僅限1/18場次）</strong><br /> <strong>時間：2024/11/14 (四) 11:00 ~ 2024/11/17 (日) 11:00</strong><br /> *&nbsp;台灣大哥大/MyVideo會員專享購票，需輸入由台灣大哥/MyVideo提供之購票序號以進行購票，每組序號限購兩張，數量有限，售完為止。購票序號取得方式請洽台灣大哥大客服APP優惠專區及MyVideo會員中心。</p> <p>*&nbsp;更多節目及售票資訊:&nbsp;www.livenation.com.tw<br /> *&nbsp;各階段售票數量皆有限，售完為止。</p> <p>&nbsp;</p> <p>📍<strong>入場須配合安檢及入場須知</strong><br /> 為安全考量，禁止攜帶後背包、超過&nbsp;37 x 25 x 11.5公分之包包和行李箱；會場內全面禁止攜帶外食和飲料(水除外)、除手機之外任何形式之拍攝及錄音電子設備、自拍棒與危險物品（依主辦單位定義）等入場，主辦單位有權請違反規定者立即離開現場，會場內無置物櫃，建議輕便前往，並請提早到場進行安檢以避免耽誤觀賞演出。相關規定請於演出日前造訪LIVE NATION TAIWAN官方網站、官方臉書粉絲專頁、Instagram、Ｘ&nbsp;獲得最新資訊。</p> <p><strong>📍</strong><strong>以上活動內容，主辦單位保留異動之權力。</strong></p> <p>①本公司為尊重他人音樂著作財產權，秉持事先授權原則，承諾於所舉辦之演唱會演出前向權利人申請合法授權。<br /> ②本場演出所使用音樂將向M&Uuml;ST取得授權。</p>',
})
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
    value: 'finishPurchase',
  },
])

const activeStep = ref('chooseArea')
watch(activeStep, () => {
  scrollToTop()
})
const sessionOptions = [
  { name: '2025/01/18 (六)  18:00 < 高雄流行音樂中心 > DAY6 3RD WORLD TOUR ＜FOREVER YOUNG＞ in KAOHSIUNG', value: '1', date: '2025/01/18 18:00' },
  { name: '2025/01/19 (日)  18:00 < 高雄流行音樂中心 > DAY6 3RD WORLD TOUR ＜FOREVER YOUNG＞ in KAOHSIUNG', value: '2', date: '2025/01/19 18:00' },
]
const selectedSessionId = ref(sessionOptions[0].value)
const selectedSession = computed(() => sessionOptions.find(area => area.value === selectedSessionId.value))

const route = useRoute()
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

const areasData = ref([
  {
    id: 1,
    name: '一樓搖滾區',
    price: 6800,
    sessionId: 1,
    qty: 1,
    tickets: [
      {
        id: 1,
        seat: 'A區 1排 1號',
        isSold: false,
        isChoose: false,
      },
    ],
  },
  {
    id: 2,
    name: '二樓座位區',
    price: 4800,
    sessionId: 1,
    qty: 8,
    tickets: [
      {
        id: 1,
        seat: 'A區 1排 1號',
        isSold: false,
        isChoose: false,
      },
      {
        id: 2,
        seat: 'A區 1排 2號',
        isSold: true,
        isChoose: true,
      },
      {
        id: 3,
        seat: 'A區 1排 3號',
        isSold: false,
        isChoose: false,
      },
      {
        id: 4,
        seat: 'A區 1排 4號',
        isSold: false,
        isChoose: false,
      },
      {
        id: 5,
        seat: 'A區 1排 5號',
        isSold: true,
        isChoose: true,
      },
      {
        id: 6,
        seat: 'A區 1排 6號',
        isSold: false,
        isChoose: false,
      },
      {
        id: 7,
        seat: 'A區 1排 7號',
        isSold: true,
        isChoose: true,
      },
      {
        id: 8,
        seat: 'A區 1排 8號',
        isSold: true,
        isChoose: true,
      },
      {
        id: 9,
        seat: 'A區 1排 9號',
        isSold: true,
        isChoose: true,
      },
      {
        id: 10,
        seat: 'A區 1排 10號',
        isSold: true,
        isChoose: true,
      },
      {
        id: 11,
        seat: 'A區 1排 11號',
        isSold: false,
        isChoose: false,
      },
      {
        id: 12,
        seat: 'A區 1排 12號',
        isSold: false,
        isChoose: false,
      },
      {
        id: 13,
        seat: 'A區 2排 1號',
        isSold: false,
        isChoose: false,
      },
      {
        id: 14,
        seat: 'A區 2排 2號',
        isSold: false,
        isChoose: false,
      },
      {
        id: 15,
        seat: 'A區 2排 3號',
        isSold: true,
        isChoose: true,
      },
      {
        id: 16,
        seat: 'A區 2排 4號',
        isSold: true,
        isChoose: true,
      },
    ],
  },
])

const soldoutStatus = computed(() => {
  return (qty) => {
    // 根據參數計算並返回值
    if (qty === 0) return '已售完'
    else if (qty < 10) return `剩餘 ${qty} 張`
    else return '熱賣中'
  }
})

// 選擇區域
const isOpenSeatModel = ref(false)
const tempAreaData = ref()
function handleChooseArea(area) {
  if (area.qty === 0) return
  tempAreaData.value = useCloned(area).cloned.value
  // 電腦選位
  if (activeChooseSelection.value === 'computer') {
    activeStep.value = 'chooseTickets'
    if (choosedSeatNum.value.length === 0)choosedSeatNum.value = '1'
    return
  }
  isOpenSeatModel.value = true
}

function handleCloseAreaModal() {
  isOpenSeatModel.value = false
  tempAreaData.value = null
}

// 選擇座位
const notify = useNotify()

function handleChooseSeat(ticket) {
  if (choosedSeatArr.value.length === maxSeatNum) {
    if (!ticket.isSold && ticket.isChoose) {
      ticket.isChoose = !ticket.isChoose
      choosedSeatArr.value = tempAreaData.value.tickets.filter(ticket => ticket.isChoose && !ticket.isSold)
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
    choosedSeatArr.value = tempAreaData.value.tickets.filter(ticket => ticket.isChoose && !ticket.isSold)
  }
  console.log('已選的座位', choosedSeatArr.value)
}

// 確認座位
const choosedSeatArr = ref([])
function seatConfirm() {
  isOpenSeatModel.value = false
  activeStep.value = 'chooseTickets'
}

// 產出電腦配位的票數選項
const maxSeatNum = 4
const computerSelectionOptions = computed(() => tempAreaData.value.qty
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
    choosedSeatArr.value = randomTickets
  }
  console.log('已選的座位', choosedSeatArr.value)
})

// 驗證碼
const CaptchaInputValue = ref()

const data = ref({
  captchaCode: null,
  isValid: false,
})

function getCaptchaCode(value) {
  data.value.captchaCode = value
}

function checkValidCaptcha(value) {
  data.value.isValid = value
}

const isLoading = useLoading()

function handleSendCaptcha() {
  if (!data.value.isValid) {
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
  return choosedSeatArr.value.map((seat) => {
    return {
      session: selectedSession.value?.name,
      area: tempAreaData.value.name,
      seat: seat.seat,
      price: tempAreaData.value.price,
    }
  })
})

const router = useRouter()
function deleteTicket(index) {
  if (selectedData.value.length === 1) router.push('/memberCenter?type=orderManagement')
  else choosedSeatArr.value.splice(index, 1)
  isLoading.value = true
}

// 送出訂單
function handleSendOrder() {
  isLoading.value = true
  // activeStep.value = 'payment'
  router.push('/memberCenter?type=orderManagement')
}

// user
const user = ref({
  name: 'test1',
  email: 'test123@gmail.com',
  phone: '0912345678',
})
</script>

<template>
  <div>
    <BreadCrumb
      :event-data="eventData"
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
            :src="eventData.coverUrl"
            :alt="eventData.name"
            class="md:h-[110px]"
          >
          <div class="container my-4 md:pr-0">
            <div class="font-bold text-lg mb-2">
              {{ eventData.name }}
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
                :src="eventData.imgUrl"
                :alt="eventData.name"
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
                  v-for="area in areasData"
                  :key="area.id"
                >
                  <div
                    class="flex items-center space-x-4 p-2"
                    :class="area.qty ? 'cursor-pointer hover:bg-gray-200' : 'cursor-not-allowed'"
                    @click="handleChooseArea(area)"
                  >
                    <Icon
                      :name="area.qty ? 'line-md:emoji-grin-twotone' : 'line-md:emoji-neutral-twotone'"
                      :class=" area.qty ? 'text-primary' : 'text-gray-500'"
                      size="30"
                    />
                    <span>{{ area.name }}</span>
                    <span>{{ area.price }}</span>
                    <span :class="{ 'text-primary font-bold': area.qty, 'text-gray-500 font-bold': !area.qty }">{{ soldoutStatus(area.qty) }}</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="activeStep === 'chooseTickets'">
        <EventSection
          :event-data="eventData"
          :selected-area="selectedSession"
        />

        <div class="container md:px-0">
          <div class="divider" />
          <div class="shadow-xl p-6 space-y-6">
            <div class="text-center p-2 space-x-2 bg-gray-300">
              <span>{{ tempAreaData.name }}</span>
              <span>{{ tempAreaData.price }}</span>
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
                    全票 {{ tempAreaData.price }}
                  </fwb-table-cell>
                  <fwb-table-cell class="last:text-center text-bold">
                    <template
                      v-if="activeChooseSelection==='personal'"
                    >
                      {{ choosedSeatArr.length }}
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
                :src="eventData.imgUrl"
                :alt="eventData.name"
                class="object-fit w-full md:w-[700px]"
              >
            </section>
          </div>
        </div>
      </template>

      <template v-else-if="activeStep === 'purchaseConfirm' ">
        <section class="space-y-6">
          <EventSection
            :event-data="eventData"
            :selected-area="selectedSession"
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
              <span>{{ user.name }}</span>
            </div>
            <div class="p-4">
              <span class="mr-4">電子郵件</span>
              <span>{{ user.email }}</span>
            </div>
            <div class="p-4">
              <span class="mr-4">聯絡電話</span>
              <span>{{ user.phone }}</span>
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
          <section class="container md:px-0 flex flex-col md:items-end w-full space-y-4">
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
    </section>

    <!-- 選位 Modal -->
    <fwb-modal
      v-if="isOpenSeatModel && tempAreaData"
      size="5xl"
      @close="handleCloseAreaModal"
    >
      <template #header>
        <div class="flex flex-col justify-center items-center space-y-2 w-full text-sm">
          <span class="text-lg">{{ `${tempAreaData.name} ${tempAreaData.price}` }}</span>

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
              >{{ ticket.seat }}</div>
            </div>
          </span>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-between space-x-4">
          <fwb-button
            outline
            class="w-[50%] border-primary hover:bg-transperant text-primary hover:text-primary focus:ring-opacity-0 transition duration-500 ease-in-out"
            @click="isOpenSeatModel = false"
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
