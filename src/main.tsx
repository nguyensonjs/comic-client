// Import from react
import { FC, lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import third party
import { BrowserRouter as Router } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Styles
import './index.css'

// Import Custom
const LazyApp = lazy(() => import('./App'))

const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false
    }
  }
})

const wrapContainer = document.getElementById('root')
const root = createRoot(wrapContainer!)

const Main: FC = () => {
  return (
    <StrictMode>
      <Router>
        <QueryClientProvider client={queryClient}>
          <LazyApp />
          {import.meta.env.DEV && (
            <ReactQueryDevtools
              buttonPosition="bottom-right"
              position="bottom"
              initialIsOpen={false}
            />
          )}
        </QueryClientProvider>
      </Router>
    </StrictMode>
  )
}

root.render(<Main />)
