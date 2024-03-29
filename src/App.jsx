import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo/Todo'
import Navbar from './components/Navbar'
import Products from './components/PlaceList/Products'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from './components/Counter/Counter'
import UserList from './components/UserList/Userlist'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Todo/>} />
        <Route path='/list' element={<Products/>} />
        <Route path='/counter' element={<Counter/>} />
        <Route path='/userlist' element={<UserList/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
