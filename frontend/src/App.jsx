import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/Login';
import { AppProvider } from './context/AppContext';
import AddStudent from './components/admin/AddStudent';
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

import { SnackbarProvider } from 'notistack';
import UpdateStudent from './components/admin/UpdateStudent';
import Dashboard from './components/admin/Dashboard';
import UpdateBadges from './components/admin/UpdateBadges';
import BadgeAdd from './components/admin/BadgeAdd';
import AdminAuth from './auth/AdminAuth';
import RegistrationForm from './components/main/RegistrationForm';

function App() {

  return (
    <>
      <SnackbarProvider maxSnack={3}>
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
                <Route path='viewbadge/:id' element={<ViewBadge />} />
                <Route path='registrationform/:id' element={<RegistrationForm />} />
              </Route>



              <Route path='user' element={<Main />}>
                <Route path='home' element={<Home />} />
              </Route>


              <Route path='admin' element={<AdminAuth> <Admin /> </AdminAuth>}>
                <Route path='addstudent' element={<AddStudent />} />
                <Route path='badgeadd' element={<BadgeAdd />} />
                <Route path='manageuser' element={<ManageUser />} />
                <Route path='managestudent' element={<ManageStudent />} />
                <Route path='updatestudent/:id' element={<UpdateStudent />} />
                <Route path='managebadges' element={<ManageBadges />} />
                <Route path='updatebadges/:id' element={<UpdateBadges />} />
                <Route path='dashboard' element={<Dashboard />} />
              </Route>


            </Routes>
          </AppProvider >
        </BrowserRouter>
      </SnackbarProvider>
    </>

  )
}


export default App
