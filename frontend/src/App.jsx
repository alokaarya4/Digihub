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
          </Route>


          <Route path='user' element={<Main />}>
            <Route path='home' element={<Home />} />
          </Route>

            <Route path='admin' element={<Main />}>
              <Route path='home' element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='Signup' element={<Signup />} />
              <Route path='addstudent' element={<AddStudent />} />
              <Route path='addbadge' element={<AddBadge />} />
              <Route path='manageuser' element={<ManageUser />} />
              </Route>


          </Routes>
    </AppProvider >
      </BrowserRouter>
    </>

  )
}


export default App
