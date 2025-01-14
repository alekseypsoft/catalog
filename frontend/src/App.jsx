import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register.jsx'
import ProfileAdminPage from './pages/ProfileAdmin.jsx'
import ProfileUserPage from './pages/ProfileUser.jsx'
import ProtectedRouteAdmin from './components/RouteProtection/ProtectedRouteAdmin.jsx'
import ProtectedRouteUser from './components/RouteProtection/ProtectedRouteUser.jsx'
import { AuthProvider } from '../context/authcontext'

function App() {


  return (
    <main>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/register' Component={RegisterPage} />
            <Route path='/login' Component={LoginPage} />
            <Route element={<ProtectedRouteAdmin />}>
              <Route path='/admin' Component={ProfileAdminPage} />
            </Route>
            <Route element={<ProtectedRouteUser />}>
              <Route path='/user' Component={ProfileUserPage} />
            </Route>
            <Route path='*' Component={LoginPage} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </main>
  )
}

export default App
