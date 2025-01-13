export interface eventType {
  id?: number
  name: string
  info: string
  coverUrl: string
  imgUrl: string
  host: string
  published: boolean
  place: placeType
  sessions: sessionType[]
}
export interface sessionType {
  id?: number
  name: string
  sessionTime: Date // 近期演出
  availableTime: Date // 最新開賣
  publishTime: Date // 最新上架
  eventId: number
  location: string
  areas: areaType[]

  status?: boolean // 購買狀態 前端定義
}

export interface areaType {
  id: number
  name: string
  price: number
  sessionId: number
  qty: number
  displayOrder: number
  tickets: ticketType[]
  ticketsLeftCount: number
}

export interface ticketType {
  id: number
  areaId: number
  rowNumber: number
  seatNumber: number
  ticketNumber: string
  isSold: boolean
  isTransfered: boolean
  recieverId: string
  orderId: number
  sessionName?: string
  isChoose: boolean // 選擇狀態 前端定義
  qrcode: string // 前端定義

  price?: number // 前端定義
}

export interface placeType {
  id?: number
  name: string
}

const Events = {
  // event : 取得活動列表
  apiGetEvents(params: filterQueryType, option?: HttpOption<eventType[]>) {
    return useHttp.get<eventType[]>('/events', params, {
      watch: false,
      lazy: true,
      ...option,
    })
  },

  // event : 取得單一活動
  apiGetEventById(id: number, option?: HttpOption<eventType>) {
    return useHttp.get<eventType>(`/events/${id}`, {}, {
      watch: false,
      lazy: true,
      ...option,
    })
  },
  // sessions : 取得場次資訊
  apiGetSessionsByEventId(id: number, option?: HttpOption<sessionType[]>) {
    return useHttp.get<sessionType[]>(`/sessions/byEvent/${id}`, {}, {
      watch: false,
      lazy: true,
      ...option,
    })
  },

  // session : 取得單一場次
  apiGetSessionsById(id: number, option?: HttpOption<sessionType>) {
    return useHttp.get<sessionType>(`/sessions/${id}`, {}, {
      watch: false,
      lazy: true,
      ...option,
    })
  },

  // session : 取得單一區域
  apiGetAreaById(id: number, option?: HttpOption<areaType>) {
    return useHttp.get<areaType>(`/areas/${id}`, {}, {
      watch: false,
      lazy: true,
      ...option,
    })
  },
}

export default Events
