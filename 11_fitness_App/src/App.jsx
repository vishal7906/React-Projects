import React from 'react'
import './App.css';
import { Route , Routes} from 'react-router-dom'
import { Box } from '@mui/material'

import Navbar from "./components/Navbar"
import ExerciseDetails from "./pages/ExerciseDetails"
import Home from "./pages/Home"
import Footer from './components/footer'

function App() {
  return (
   
    
     <Box width="400px" sx={{width:{xl:"1448px"}}}m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercies/:id' element={<ExerciseDetails/>}/>
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
