import Events from '../api/events'

export const useEventData = () => {
  const eventsData = useState<eventType[]>('events', () => [])
  const currentEvent = useState<eventType>('currentEvent')
  const sessionsData = useState<sessionType[]>(() => [])
  // const currentSession = useState<sessionType>('currentSession')

  // 取得活動列表
  async function getEventsData(filterQuery: filterQueryType) {
    const { data } = await Events.apiGetEvents(filterQuery)
    if (data?.value?.data) eventsData.value = data?.value?.data
  }
  // 取得單筆活動資訊
  async function getEventById(id: number) {
    await nextTick()
    const { data } = await Events.apiGetEventById(id)
    if (data?.value?.data?.[0]) currentEvent.value = data?.value?.data?.[0]
  }
  // 取得場次列表
  async function getSessionsByEventId(id: number) {
    await nextTick()
    const { data } = await Events.apiGetSessionsByEventId(id)
    if (data.value?.data) sessionsData.value = data.value?.data
    sessionsData.value.forEach((session) => {
      session.status = session.areas.some(item => item.ticketsLeftCount)
    })
  }

  // 取得單一區域
  async function getAreaById(id: number) {
    const { data } = await Events.apiGetAreaById(id)
    return data
  }

  return { eventsData, currentEvent, sessionsData, getEventsData, getEventById, getSessionsByEventId, getAreaById }
}
