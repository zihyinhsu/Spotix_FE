export function scrollToTop() {
  const bodyElement = document?.querySelector('body')
  bodyElement?.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}
