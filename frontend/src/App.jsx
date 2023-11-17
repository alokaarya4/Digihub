import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/login';
import Footer from './components/main/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='main' element={<Main />}>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='footer' element={<Footer />} />
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
