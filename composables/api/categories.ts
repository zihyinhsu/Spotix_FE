// export interface filterQueryType {
//   category?: string
//   filter?: string
//   rowspage: number
//   page: number
// }
const Categories = {
  apiGetCategories(params: filterQueryType, option?: HttpOption<cateType[]>) {
    return useHttp.get<cateType[]>('/categories', params, {
      ...option,
    })
  },
}

export default Categories
