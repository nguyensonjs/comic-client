import { ProtectedRoute } from 'components'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from 'routes'

function App() {
  const isAuthenticated = false
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          return <Route key={index} path={route.path} element={<Page />} />
        })}

        {privateRoutes.map((route, index) => {
          const Page = route.component
          return (
            <Route
              key={index}
              path={route.path}
              element={<ProtectedRoute element={Page} isAuthenticated={isAuthenticated} />}
            />
          )
        })}
      </Routes>
    </div>
  )
}

export default App
