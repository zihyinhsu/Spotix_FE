export function handleSearch() {
  const router = useRouter()
  const search = useSearch()
  search.value.isSearch = true
  router.push({ path: '/search', query: { category: 'all', filter: search.value.text } })
}

export function scrollToTop() {
  const bodyElement = document?.querySelector('body')
  bodyElement?.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}
