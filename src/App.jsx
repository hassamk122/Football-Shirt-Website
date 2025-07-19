import { Route, Routes } from "react-router-dom"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"

import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import LaLiga from "./pages/LaLiga"
import AllProducts from "./pages/AllProducts"
import PremierLeague from "./pages/PremierLeague"
import SeriaA from "./pages/SeriaA.jsx"



function App() {

  return (
    <>
     <Banner/>
     <Header/>
    <Routes>  
      <Route path="/" element={<Home/>} />
       <Route path="/allProducts" element={<AllProducts/>} />
          <Route path="/seriaA" element={<SeriaA/>} />
        <Route path="/premierLeague" element={<PremierLeague/>} />
       <Route path="/laliga" element={<LaLiga/>} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
     <Footer/>
    </>
  )
}

export default App
