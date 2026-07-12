import { useEffect, useState } from 'react'

const LEGAL_PAGES = new Set(['privacy', 'cookies'])

function getLegalPage() {
  const hash = window.location.hash.replace(/^#\/?/, '')
  return LEGAL_PAGES.has(hash) ? hash : null
}

export default function useLegalPage() {
  const [page, setPage] = useState(getLegalPage)

  useEffect(() => {
    const handleHashChange = () => setPage(getLegalPage())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return page
}
