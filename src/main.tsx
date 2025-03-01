import { lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './i18n'
import { GlobalStyles } from 'components'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false
    }
  }
})
const LazyApp = lazy(() => import('./App'))

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <Router>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles>
          <LazyApp />
        </GlobalStyles>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Router>
  </HelmetProvider>
)
