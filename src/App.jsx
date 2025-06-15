import { BrowserRouter, Route, Routes } from 'react-router'
import './components/pokedex.module.css'
import './global.css'
import { Error404 } from './pages/Error404'
import { ROUTES } from './config/routes'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { AppLayout } from './layout/AppLayout'

export function App() {

  return (
    <div style={{ height: '100%' }}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<AppLayout /> }>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.DETAIL} element={<Detail />} />
          </Route>
          <Route path={ROUTES.ERROR} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
