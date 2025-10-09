import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx';
import PersonList from './pages/PersonList.jsx'
import EditPerson from './pages/EditPerson.jsx'
import AddPerson from './pages/AddPerson.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PersonList />} />
        <Route path="/persons" element={<PersonList />} />
        <Route path="/add" element={<AddPerson />} />
        <Route path="/person/:id" element={<EditPerson />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
