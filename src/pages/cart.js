import React,{useState,useEffect} from "react";
import LocationForm from "../components/forms/addLocationForm";
import { useSelector } from 'react-redux';
import Delete from '../assests/images/delete.png'
import {removeProduct} from '../redux/reducer/productReducer'
import { useDispatch } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';
import { getNextOrederId,makeOrder } from "../api/productApi";
const Cart = () => {
    const [orderIdState,setOrderIdState] = useState('')
    const product = useSelector(state => state.product)
    const dispatch = useDispatch()
    const productNumber =() => {
        return product.reduce((acc,curr) => acc + curr.quantity,0)
      }
      const reduceProductNumber = (product) =>{
        dispatch(removeProduct(product))
        toast.error('🦄 Wow so easy!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        
      }

      const getNextOrderIdFunc =  async() =>{
        const res = await getNextOrederId();
        setOrderIdState(res.data)
      }
      useEffect(()=>{
        getNextOrderIdFunc()
      },[])

      const handleMakeOrder = async () =>{
        console.log(product,'product')
        let currentDate = new Date();

        let day = currentDate.getDate(); 
        let month = currentDate.getMonth() + 1; 
        let year = currentDate.getFullYear(); 
        
     
        let formattedDate = `${month}/${day}/${year}`;

       const order_status ='pending'
       const order_isCompleted =false
       const order_paidAmount ="300"
       const order_totalAmount = '1000'

       const data = {
        order_id:3,
        order_details:[],
        order_date:formattedDate,
        order_status,
        order_isCompleted,
        order_paidAmount,
        order_totalAmount
       }

       const res =  await makeOrder(data);
       console.log(res,'res')

      }
    return ( 

        <div>
<p className="text-center"style={{fontFamily:'oswald',fontSize:'38px',}}>Checkout </p>
     
        <div className="d-flex ">

                  <div className=" " style={{width:'56%'}}>
        <LocationForm/>

        </div>
        <div className="w-50 p-3 " >
            <p className="text-center my-4" style={{fontFamily:'oswald',fontSize:'34px'}}>Order Summary</p>
          {productNumber() !== 0  && product.map(product =>
  {
    return(
      product.quantity > 0 &&
      <div key={product.productImage} className='d-flex align-items-center justify-content-around my-2' style={{maxHeight:'100px',fontFamily:'lato'}}>
      <div  style={{background:'#f6f6f6',position:'relative',margin:'16px 0'}}>
     <img src={`http://baby-bucket-product.s3.amazonaws.com/${product['rest'].productImage}`} 
     alt="productImage" 
     width={70} 
     height={70} 
     style={{borderRadius:'50%'}}
     />
     </div>
     <p className='my-0 mx-3 w-25 text-center'>{product['rest'].productName}</p>
     <p className='my-0 mx-3 '>{product['rest'].productPrice}</p>
     <p className='my-0 mx-3'>{product.quantity}</p>
     <p className='m-0 ' onClick={()=>reduceProductNumber(product)} >
    <img src={Delete} alt='toma-boutique' width={40} height={40}/>
     </p>
</div>

    )}
)}
     <button onClick={()=>handleMakeOrder()}>Make it order</button>

        </div>
  
        </div>
        </div>
     );
}
 
export default Cart;