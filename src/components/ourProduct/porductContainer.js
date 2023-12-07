import { useState, useEffect } from "react";
import { getProductApi } from '../../api/productApi'
import SingleProduct from "./singleProduct";
import SectionTitle from "../sectionTitle/sectionTitle";
const ProductContainer = () => {

    const [prodcuts, setProducts] = useState([]);
    const [loading, setLoadign] = useState(false);
    const[error, setError] = useState('')

    const fetchProductsApi = async () => {
     try {
            setLoadign(true)
            const {data} = await getProductApi();
            if (data) {
              setProducts(data)
            }
            else throw Error('there is no data')
        }catch(err){
            setError(err)
        }
        finally{
            setLoadign(false)
        }

}
useEffect( ()=>{
    fetchProductsApi()
},[])
    return (
        <>
        {loading ? <h3> loading...</h3>:(
           <div className=" position-relative">
           <SectionTitle title='Our Products'/>

           <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
           {prodcuts?.map((product) => (
             <div className="m-2 rounded-2" key={product._id}>

               <SingleProduct
                 productType={product?.product_type}
                 productPrice={product?.product_price}
                 productName={product?.product_name}
                 productImage={product?.product_image}
                 productId={product?.product_id}
               />
             </div>
           ))}
              </div>
              
             
          
         </div>

            
        )
    }
     </>
    );
}

export default ProductContainer;