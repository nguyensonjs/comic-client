// Import from react
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import third party
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Styles
import './index.css'

// Import Custom
import App from './App.tsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {import.meta.env.DEV && <ReactQueryDevtools position="bottom" initialIsOpen={false} />}
    </QueryClientProvider>
  </StrictMode>,
)
