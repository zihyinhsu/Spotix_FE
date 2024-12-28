export interface eventType {
  id: number
  name: string
  orderNumber: string
  seat: string
  date: string
  url: string
  location: string
  price: number
}

const Events = {
  apiGetEvents(option?: HttpOption<eventType>) {
    return useHttp.get<eventType>('/events', {}, {
      ...option,
    })
  },
}

export default Events
