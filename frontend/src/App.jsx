import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/login';
import { AppProvider } from './context/AppContext';
import AddStudent from './components/admin/AddStudent';
import AddBadge from './components/admin/AddBadge';
import ManageUser from './components/admin/ManageUser';
import Signup from './components/main/SignUp';
import ManageStudent from './components/admin/ManageStudent';
import ResetPassword from './components/main/ResetPassword';
import Admin from './components/admin';
import ManageBadges from './components/admin/ManageBadges';
import Student from './components/main/Student';
import VerifyBadge from './components/main/VerifyBadge';
import BrowserBadge from './components/main/BrowserBadge';
import ViewBadge from './components/main/ViewBadge';

function App() {

  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Routes>

            <Route path='/' element={<Navigate to="/main/home" />} />
            <Route path='main' element={<Main />}>
              <Route path='home' element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='Signup' element={<Signup />} />
              <Route path='ResetPassword' element={<ResetPassword />} />
              <Route path='Student' element={<Student />} />
              <Route path='verifybadge' element={<VerifyBadge />} />
              <Route path='browserbadge' element={<BrowserBadge />} />
              <Route path='viewbadge' element={<ViewBadge/>} />
            </Route>


            <Route path='user' element={<Main />}>
              <Route path='home' element={<Home />} />
            </Route>

              <Route path='admin' element={<Admin />}>
              <Route path='addstudent' element={<AddStudent />} />
              <Route path='addbadge' element={<AddBadge />} />
              <Route path='manageuser' element={<ManageUser />} />
              <Route path='managestudent' element={<ManageStudent />} />
              <Route path='managebadges' element={<ManageBadges />} />
            </Route>


          </Routes>
        </AppProvider >
      </BrowserRouter>
    </>

  )
}


export default App
