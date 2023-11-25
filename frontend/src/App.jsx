import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/login';
import { AppProvider } from './context/AppContext';
import AddStudent from './components/admin/AddStudent';
import AddBadge from './components/admin/AddBadge';
import ManageUser from './components/admin/ManageUser';

function App() {

  return (
    <>
      <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path='main' element={<Main />}>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
          </Route>
          <Route path='user' element={<Main />}>
            <Route path='home' element={<Home />} />
          </Route>

            <Route path='admin' element={<Main />}>
              <Route path='home' element={<Home />} />
              <Route path='login' element={<Login />} />
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
