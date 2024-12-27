export function handleSearch() {
  const router = useRouter()
  const search = useSearch()
  search.value.isSearch = true
  router.push({ path: '/search', query: { category: 'all', filter: search.value.text } })
}
