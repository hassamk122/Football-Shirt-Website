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
import International from "./pages/International.jsx"
import Ligue1 from "./pages/Ligue1.jsx"
import Bundesliga from "./pages/Bundesliga.jsx"
import ReturnAndExchangePolicy from "./pages/returnAndExchangePolicy.jsx"
import WashingGuidelines from "./pages/WashingGuidelines.jsx"
import  ShoppingCart from "./pages/ShoppingCart.jsx"



const routes = [
  { path: "/", element: <Home /> },
  { path: "/allProducts", element: <AllProducts /> },
  { path: "/seriaA", element: <SeriaA /> },
  { path: "/premierLeague", element: <PremierLeague /> },
  { path: "/international", element: <International /> },
  { path: "/bundesliga", element: <Bundesliga /> },
  { path: "/ligue1", element: <Ligue1 /> },
  { path: "/laliga", element: <LaLiga /> },
  { path: "/returnAndExchangePolicy", element: <ReturnAndExchangePolicy /> },
  { path: "/washingGuidelines", element: <WashingGuidelines /> },
   { path: "/shoppingCart", element: <ShoppingCart/> },
  { path: "/*", element: <NotFound /> }
];

function App() {

  return (
    <>
     <Banner/>
     <Header/>
    <Routes>  
      {routes.map(({path,element},index)=>(
        <Route key={index}  path={path} element={element} />
      ))}
    </Routes>
     <Footer/>
    </>
  )
}

export default App
