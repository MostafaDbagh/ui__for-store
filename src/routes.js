import { Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import { ProductId } from "./pages/productId";
import Layout from "./components/layout";
export const PageRoutes = () =>{
return(
<Layout>
    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/product/:id" element={<ProductId/>}/>

    </Routes>
    </Layout>

)
}