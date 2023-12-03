import { Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import { ProductId } from "./pages/productId";
import Layout from "./components/layout";
import { TermsAndCondition } from "./pages/termsAndcondition";
import { PrivacyAndPolicy } from "./pages/privacyAndPolicy";
import { AboutUS } from "./pages/about";
export const PageRoutes = () =>{
return(
<Layout>
    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/product/:id" element={<ProductId/>}/>
   <Route path="/termsandcondition" element={<TermsAndCondition/>}/>
   <Route path="/privacyandpolicy" element={<PrivacyAndPolicy/>}/>
   <Route path="/aboutus" element={<AboutUS/>}/>




   

    </Routes>
    </Layout>

)
}