import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login'
import RegistroPage from './pages/Register.jsx'
import PerfilAdminPage from './pages/ProfileAdmin.jsx'
import PerfilUserPage from './pages/ProfileUser.jsx'
import ProtectedRouteAdmin from './components/RouteProtection/ProtectedRouteAdmin.jsx'
import ProtectedRouteUser from './components/RouteProtection/ProtectedRouteUser.jsx'
import { AuthProvider } from '../context/authcontext'

function App() {


  return (
    <main>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Rutas No Protegidas */}
            <Route path='/registro' Component={RegistroPage} />
            <Route path='/login' Component={LoginPage} />

            {/* Rutas Protegidas */}
            <Route element={<ProtectedRouteAdmin />}>
              <Route path='/admin' Component={PerfilAdminPage} />
            </Route>
            <Route element={<ProtectedRouteUser />}>
              <Route path='/user' Component={PerfilUserPage} />
            </Route>
            <Route path='*' Component={LoginPage} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </main>
  )
}

export default App
