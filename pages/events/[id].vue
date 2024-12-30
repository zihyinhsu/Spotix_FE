<script setup lang="ts">
import EventWarning from '~/components/EventWarning.vue'

// const route = useRoute()

const eventData = ref<eventType>({
  id: 1,
  name: 'DAY6 3RD WORLD TOUR ＜FOREVER YOUNG＞ in KAOHSIUNG',
  orderNumber: '141777450',
  seat: 'A區 5排 1號',
  date: '2025-01-19 18:00',
  url: 'https://static.tixcraft.com/images/activity/25_day6_70552ba96e820fbd83666c05d1b73da8.jpg',
  location: '台北小巨蛋',
  price: 5000,
  description: '<p><strong>🎫 LIVE NATION TAIWAN會員預購請由LIVE NATION TAIWAN官網之活動頁面https://bit.ly/DAY6_KH25&nbsp;進入購票</strong><br /> <br /> &nbsp;</p> <p><strong>DAY6 3RD WORLD TOUR &lt;FOREVER YOUNG&gt; in KAOHSIUNG</strong></p> <p><strong>&nbsp;</strong></p> <p>驚喜加場！韓國流行搖滾天團 DAY6<br /> 全新世界巡迴<br /> DAY6 3RD WORLD TOUR &lt;FOREVER YOUNG&gt; in KAOHSIUNG<br /> 1月18日、1月19日 確定連唱兩天</p> <p><strong>&nbsp;</strong></p> <p>&nbsp;</p> <p><strong>DAY6 3RD WORLD TOUR &lt;FOREVER YOUNG&gt; in KAOHSIUNG</strong><br /> <strong>演出日期：2025/01/18 (六) 18:00 (實際開演時間以現場公告為準)<br /> 加場日期：2025/01/19 (日) 18:00 (實際開演時間以現場公告為準)<br /> 演出地點：高雄流行音樂中心海音館（KAOHSIUNG MUSIC CENTER, Hi-Ing Music Hall）<br /> 票價：NT$ 6,800 / 4,800 / 4,300 / 3,800 / 2,800 / 2,300</strong><br /> <strong>* NT$6,800 VIP套票：</strong><br /> <strong>- 優先進入搖滾站區</strong><br /> <strong>- 演前Soundcheck Party</strong><br /> <strong>- 照片小卡套組</strong><br /> <strong>- 掛繩與吊牌x1組</strong><br /> <strong>- 簽名海報（隨機抽100名）</strong></p> <p><strong>*&nbsp;</strong><strong>福利抽獎活動:&nbsp;凡於2025/1/06 (一) 23:59前購買 （NT$ 6,800 VIP Package&nbsp;），並完成付款且無退票之持票者，將可獲得「Signed Poster Lucky draw活動」福利抽獎活動。主辦方將隨機抽出100位幸運兒獲得「簽名海報」。抽獎結果將於&nbsp;2025/1/16 (四)&nbsp;公布於LIVE NATION TAIWAN官方網站、官方社群網頁及拓元節目頁。</strong></p> <p><strong>&nbsp;</strong></p> <p><strong>*&nbsp;</strong><strong>特區搖滾站區NT$6,800與NT$4,800間無實體間隔，請依序號排隊入場，NT$6,800序號從001號起，NT$4,800序號從1,002號起。</strong></p> <p>* 搖滾站區請依票面序號排隊入場、座位區請對號入座</p> <p><strong>&nbsp;</strong></p> <p>* 實際活動開演時間，請以現場公告為準</p> <p>* 本場於演出前5日始開放取票。</p> <p>* 為人身安全考量，孕婦及身高未滿110公分或未滿7歲孩童，請勿購買站區票券，主辦方將有權謝絕入場。</p> <p>* 演出時間不等於&nbsp;VIP&nbsp;福利活動報到時間，請務必於演出日前至&nbsp;LIVE NATION TAIWAN官方網站&nbsp;及社群平台詳讀活動入場時間及相關流程，以免損害權益。</p> <p>* 請務必於演出日前至至&nbsp;LIVE NATION TAIWAN官方網站&nbsp;及社群平台，詳讀確認入場時間流程及相關規範，以免損害自身權益。如未能於公布的整隊時間內報到整隊，將視同放棄您的序號優先權利，需按照現場工作人員指示依現場隊伍順序入場。</p> <p>&nbsp;</p> <p><strong>Official Partner</strong><strong>：&nbsp;DBS Mastercard&nbsp;星展萬事達卡、台灣大哥大、MyVideo</strong></p> <p>&nbsp;</p> <p><strong>售票相關資訊<br /> <strong>🎫</strong>星展萬事達卡卡友預售票</strong><strong>(</strong><strong>僅限星展萬事達卡信用卡與簽帳金融卡</strong><strong>)</strong><br /> <strong>時間：2024/11/12 (二) 11:00 ~ 23:59</strong><br /> <strong>請至：https://tixcraft.com/activity/detail/25_day6_c</strong><br /> * 更多訊息請至&nbsp;priceless.com/DBS-TW&nbsp;瞭解更多。<br /> * 單筆訂單限購4張，可支援行動裝置購票。<br /> * 數量有限，售完為止</p> <p>&nbsp;</p> <p><strong>🎫Live Nation Taiwan</strong><strong>會員預售</strong><br /> <strong>時間：2024/11/13 (三) 11:00 ~ 23:59</strong><br /> 凡在Live Nation Taiwan會員預購截止前完成Live Nation Taiwan官網會員註冊，並成功訂閱電子報者，於預售時間內登入Live Nation Taiwan官網的本場活動頁面，按下預購按鈕即可進入會員預購頁面，並於預購開放時間內進行購票。每位欲購票者皆須同時持有Live Nation Taiwan會員資格與拓元售票系統帳號。<br /> LIVE NATION TAIWAN 會員註冊及預購流程&nbsp;https://bit.ly/LNTPRESALE<br /> * 單筆訂單限購4張，可支援行動裝置購票。</p> <p>&nbsp;</p> <p><strong>🎫</strong><strong>兩場正式開賣</strong><br /> <strong>時間：2024/11/14 (四) 11:00 AM起</strong><br /> 拓元售票系統全面開賣<br /> * 單筆訂單限購4張，可支援行動裝置購票。<br /> * 拓元註冊：https://help.tixcraft.com/hc/zh-tw</p> <p>&nbsp;</p> <p><strong>🎫</strong><strong>台灣大哥大/MyVideo會員獨享購票專區（僅限1/18場次）</strong><br /> <strong>時間：2024/11/14 (四) 11:00 ~ 2024/11/17 (日) 11:00</strong><br /> *&nbsp;台灣大哥大/MyVideo會員專享購票，需輸入由台灣大哥/MyVideo提供之購票序號以進行購票，每組序號限購兩張，數量有限，售完為止。購票序號取得方式請洽台灣大哥大客服APP優惠專區及MyVideo會員中心。</p> <p>*&nbsp;更多節目及售票資訊:&nbsp;www.livenation.com.tw<br /> *&nbsp;各階段售票數量皆有限，售完為止。</p> <p>&nbsp;</p> <p>📍<strong>入場須配合安檢及入場須知</strong><br /> 為安全考量，禁止攜帶後背包、超過&nbsp;37 x 25 x 11.5公分之包包和行李箱；會場內全面禁止攜帶外食和飲料(水除外)、除手機之外任何形式之拍攝及錄音電子設備、自拍棒與危險物品（依主辦單位定義）等入場，主辦單位有權請違反規定者立即離開現場，會場內無置物櫃，建議輕便前往，並請提早到場進行安檢以避免耽誤觀賞演出。相關規定請於演出日前造訪LIVE NATION TAIWAN官方網站、官方臉書粉絲專頁、Instagram、Ｘ&nbsp;獲得最新資訊。</p> <p><strong>📍</strong><strong>以上活動內容，主辦單位保留異動之權力。</strong></p> <p>①本公司為尊重他人音樂著作財產權，秉持事先授權原則，承諾於所舉辦之演唱會演出前向權利人申請合法授權。<br /> ②本場演出所使用音樂將向M&Uuml;ST取得授權。</p>',
})
const showsData = ref<showType[]>([
  {
    id: 1,
    name: 'DAY6 3RD WORLD TOUR ＜FOREVER YOUNG＞ in KAOHSIUNG',
    date: '2025-01-18 18:00',
    location: '高雄海音館',
    status: false,
  },
  {
    id: 1,
    name: 'DAY6 3RD WORLD TOUR ＜FOREVER YOUNG＞ in KAOHSIUNG',
    date: '2025-01-19 18:00',
    location: '高雄海音館',
    status: true,
  },
])

const tableConfig = ref([
  {
    label: '演出時間',
    value: 'date',
  },
  {
    label: '場次名稱',
    value: 'name',
  },
  {
    label: '場地',
    value: 'location',
  },
  {
    label: '購買狀態',
    value: 'status',
  },
])

const activeTab = ref('info')
</script>

<template>
  <div>
    <div class="container py-2">
      <fwb-breadcrumb>
        <fwb-breadcrumb-item
          home
          href="/"
          class="w-[70px] md:w-auto"
        >
          <span class="text-xs md:text-sm">
            首頁
          </span>
        </fwb-breadcrumb-item>
        <fwb-breadcrumb-item class="text-primary">
          <span class="text-xs md:text-sm">
            {{ eventData.name }}
          </span>
        </fwb-breadcrumb-item>
      </fwb-breadcrumb>
    </div>
    <div class="bg-secondary bg-opacity-60">
      <div class="flex justify-center">
        <img
          :src="eventData.url"
          class="object-fit h-[187px] md:h-[370px]"
          :alt="eventData.name"
        >
      </div>
    </div>
    <div class="container my-6 md:my-12 space-y-8">
      <h1 class="text-xl md:text-2xl text-center font-bold">
        {{ eventData.name }}
      </h1>
      <section
        v-if="showsData.length"
      >
        <div
          v-for="(show, showIdx) in showsData"
          :key="showIdx"
          class="p-4 shadow-xl md:hidden mb-8"
        >
          <div
            v-for="(item, idx) in tableConfig"
            :key="idx"
            class="flex justify-between"
          >
            <div class="w-[100px] p-2 font-bold">
              {{ item.label }}
            </div>
            <div class="text-right w-[200px] p-2">
              <fwb-button
                v-if="item.value === 'status'"
                size="sm"
                primary
                :class="show.status ? 'bg-primary hover:bg-primary focus:ring-opacity-0 transition duration-500 ease-in-out' : 'text-primary bg-transparent p-0'"
                :disabled="!show.status"
              >
                {{ show.status ? '立即訂購' : '已售完' }}
              </fwb-button>
              <span
                v-else
                class="block"
              > {{ show[item.value] }} </span>
            </div>
          </div>
        </div>
      </section>
      <section
        v-if="showsData.length"
        class="hidden md:block"
      >
        <fwb-table
          hoverable
          class="sessionTable"
        >
          <fwb-table-head>
            <fwb-table-head-cell
              v-for="(config, idx) in tableConfig"
              :key="idx"
              class="md:text-lg"
            >
              {{ config.label }}
            </fwb-table-head-cell>
          </fwb-table-head>
          <fwb-table-body>
            <fwb-table-row
              v-for="show in showsData"
              :key="show.id"
            >
              <fwb-table-cell
                v-for="(config, idx) in tableConfig"
                :key="idx"
                class="last:text-start text-dark"
              >
                <template v-if="config.value !== 'status'">
                  {{ show[config.value] }}
                </template>
                <template v-else>
                  <fwb-button
                    primary
                    :class="show.status ? 'bg-primary hover:bg-primary focus:ring-opacity-0 transition duration-500 ease-in-out' : 'text-primary bg-transparent p-0'"
                    :disabled="!show.status"
                  >
                    {{ show.status ? '立即訂購' : '已售完' }}
                  </fwb-button>
                </template>
              </fwb-table-cell>
            </fwb-table-row>
          </fwb-table-body>
        </fwb-table>
      </section>

      <fwb-tabs
        v-model="activeTab"
        variant="underline"
      >
        <fwb-tab
          name="info"
          title="節目資訊"
        >
          <div v-html="eventData.description" />
        </fwb-tab>
        <fwb-tab
          name="warning"
          title="注意事項"
        >
          <EventWarning />
        </fwb-tab>
        <fwb-tab
          name="notice"
          title="購票提醒"
        >
          <EventNotice />
        </fwb-tab>
      </fwb-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.active){
  color: theme('colors.primary');
  border-bottom: solid 2px theme('colors.primary');
}
:deep(table > tbody > tr){
  background-color: #fff;
}
:deep(.sessionTable > table > tbody > tr){
  &:hover{
    background-color: rgb(220, 220, 220);
  }
}
</style>
