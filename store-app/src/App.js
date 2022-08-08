import React from 'react';
import { Route , Routes , Navigate} from 'react-router-dom';
//components
import ProductDetalis from './components/ProductDetalis';
import Store from './components/Store';
import Navbar from './shared/Navbar';
import ShopCart from './components/ShopCart';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './shared/Footer';
//context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider  from './context/CartContextProvider';
import Categori from './components/Categori';
const App = () => {
  return (
    <ProductContextProvider>
    <CartContextProvider>
    <Navbar />
      <Routes>
        <Route path="/products/:id" element={<ProductDetalis/>} />
        <Route path="/products" element={<Store/>} />
        <Route path="/cart" element={<ShopCart/>}/>
        <Route path='/Login' element={<Login/>} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/categori/:cat' element={<Categori/>} />
        <Route path='/*' element={<Navigate to='/products'/>} />
      </Routes>
      <Footer />
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;