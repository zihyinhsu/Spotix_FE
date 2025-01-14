<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'
import EventWarning from '~/components/EventWarning.vue'

const route = useRoute()

const { currentEvent, sessionsData, getEventById, getSessionsByEventId } = useEventData()

onMounted(async () => {
  // 取得單筆活動資訊
  await getEventById(Number(route.params.id))
  // 取得場次
  await getSessionsByEventId(Number(route.params.id))
})

const tableConfig = ref([
  {
    label: '演出時間',
    value: 'sessionTime',
  },
  {
    label: '場次名稱',
    value: 'name',
  },
  {
    label: '場地',
    value: 'place',
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
    <BreadCrumb :event-data="currentEvent" />
    <div class="bg-secondary bg-opacity-60">
      <div class="flex justify-center">
        <img
          :src="currentEvent?.coverUrl"
          class="object-fit h-[187px] md:h-[370px]"
          :alt="currentEvent?.name"
        >
      </div>
    </div>
    <div class="container my-6 md:my-12 space-y-8">
      <h1 class="text-xl md:text-2xl text-center font-bold">
        {{ currentEvent?.name }}
      </h1>
      <section
        v-if="sessionsData.length"
      >
        <div
          v-for="(session, sessionIdx) in sessionsData"
          :key="sessionIdx"
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
                :class="session.status ? 'bg-primary hover:bg-primary focus:ring-opacity-0 transition duration-500 ease-in-out' : 'text-primary bg-transparent p-0'"
                :disabled="!session.status"
                @click="() => $router.push(`/events/area/${currentEvent?.id}?session=${session.id}`)"
              >
                {{ session.status ? '立即訂購' : '已售完' }}
              </fwb-button>
              <template
                v-else
              >
                <span v-if="item.value === 'place'">{{ currentEvent?.place.name }}</span>
                <span
                  v-else
                  class="block"
                >{{ session[item.value] }}</span>
              </template>
            </div>
          </div>
        </div>
      </section>
      <section
        v-if="sessionsData.length"
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
          <fwb-table-body class="tBody">
            <fwb-table-row
              v-for="session in sessionsData"
              :key="session.id"
            >
              <fwb-table-cell
                v-for="(config, idx) in tableConfig"
                :key="idx"
                class="last:text-start text-dark"
              >
                <template v-if="config.value !== 'status'">
                  <span v-if="config.value === 'place'">{{ currentEvent?.place.name }}</span>
                  <span v-if="config.value === 'sessionTime'"> {{ useDateFormat(session.sessionTime, 'YYYY-MM-DD HH:mm') }} </span>
                  <span
                    v-else
                    class="block"
                  >{{ session[config.value] }}</span>
                </template>
                <template v-else>
                  <fwb-button
                    primary
                    :class="session.status ? 'bg-primary hover:bg-primary focus:ring-opacity-0 transition duration-500 ease-in-out' : 'text-primary bg-transparent p-0'"
                    :disabled="!session.status"
                    @click="$router.push(`/events/area/${currentEvent?.id}?session=${session.id}`)"
                  >
                    {{ session.status ? '立即訂購' : '已售完' }}
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
          <div v-html="currentEvent?.info" />

          <div class="mt-8 md:max-w-[50%] mx-auto">
            <img
              :src="currentEvent?.imgUrl"
              :alt="currentEvent?.name"
              class="object-fit sticky top-40"
            >
          </div>
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

:deep(.tBody > tr > td){
  max-width: 300px;
  white-space: wrap;
}
</style>
