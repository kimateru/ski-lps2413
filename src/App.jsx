import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import RentPage from './pages/RentPage'
import ProductDetails from './pages/ProductDetails'
import NotFound from './pages/NotFound'
import { CartProvider } from './context/CartContext'

function Layout() {
  return (
    <div>
      <Navbar />
      <CartDrawer />
      <Outlet />
    </div>
  )
}

const App = () => {

  return (
    <CartProvider>
      <Router>
        <div className='container-custom mx-auto'>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/rent" element={<RentPage />} />
              <Route path="/rent/:id" element={<ProductDetails />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App



// Realizati pagina Accomodation care propune utlizatorului sa faca chirie de trai in baza la filtre,cautari si categorizari.
// Fiecare apartament poate fi vizualizat intr-o pagina separata in cadrul careia sa fiu toate datele ale acestuia cu un slider de imagini pentru apartament,fiecare apartament sa poseda minim 3 imagini.