import { Routes, Route } from "react-router-dom"

import { AuthProvider } from "./contexts/authContext"

import Header from "./components/header/Header"
import Register from "./components/register/Register"
import Logout from "./components/logout/Logout"
import Create from "./components/create/Create"
import Home from "./components/home/Home"
import Header3Strap from "./components/header/Header"
import Login from "./components/login/Login"

function App() {


  return (
    <>
      <AuthProvider>
        <div className="app-container">


          <Header />
          <div className="app-container">
            <main className="main-content">

              <div className="main-wrapper">
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/home' element={<Home />} />
                  <Route path="/user/login" element={<Login />} />
                  <Route path='/user/register' element={<Register />} />
                  <Route path='/user/logout' element={<Logout />} />

                  <Route path='/create-discusion' element={<Create />} />

                  <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
              </div>
            </main>

          </div>

        </div>
      </AuthProvider>

    </>
  )
}

export default App
