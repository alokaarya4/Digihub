import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/login';

function App() {

  return (
    <>
      <BrowserRouter>
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

          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}


export default App
