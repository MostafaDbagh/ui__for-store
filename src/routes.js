import { Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import { ProductId } from "./pages/productId";
import Layout from "./components/layout";
import { TermsAndCondition } from "./pages/termsAndcondition";
import { PrivacyAndPolicy } from "./pages/privacyAndPolicy";
import { AboutUS } from "./pages/about";
import { ProductForm } from "./pages/admin/addProduct";
import ProductsAdmin from "./pages/admin/products";
import Orders from './pages/admin/orders'
import { useState } from "react";
import Cart  from "./pages/cart";
export const PageRoutes = () =>{
    const [search,setSearch] = useState('')
return(
<Layout setSearch={setSearch}>
    <Routes>
   <Route path="/" element={<Home search={search} setSearch={setSearch}/>}/>
   <Route path="/product/:id" element={<ProductId/>}/>
   <Route path="/termsandcondition" element={<TermsAndCondition/>}/>
   <Route path="/privacyandpolicy" element={<PrivacyAndPolicy/>}/>
   <Route path="/aboutus" element={<AboutUS/>}/>
   <Route path="/admin/products" element={<ProductsAdmin search={search}/>}/>
   <Route path="/admin/addProduct" element={<ProductForm/>}/>
   <Route path="/admin/orders" element={<Orders/>}/>
   <Route path="/cart" element={<Cart/>}/>



    </Routes>
    </Layout>

)
}