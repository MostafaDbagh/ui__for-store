import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/reducer/productReducer";
import { useNavigate } from "react-router-dom";
const SingleProduct = ({  productPrice, productName,productImage, }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const addProductToBasket = ()=>{
        dispatch(addProduct({productPrice,productImage,productName}))
        navigate('/product/1')

    }
    return (
        <>
        <div className="card m-5  border-0  rounded-0 bg-.bg-secondary shadow" style={{ width: '340px'}} >
            <div className="mt-4">
            <div  style={{width:'280px',height:'140px',background:'#f6f6f6',position:'relative',margin:'16px auto'}}>
            <img src={`http://baby-bucket-product.s3.amazonaws.com/${productImage}`} 
            alt="productImage" 
            width={200} 
            height={180} 
            style={{position:'absolute',top:'-10px',left:'40px',borderRadius:'5px'}}
            />
            </div>
            </div>
            <div  className="mt-3" >
            <h3 className="card-title m-0 py-3 text-center  " style={{fontFamily:'Oxygen, sans-serif',color:'#3F3E42'}}> {productName}</h3>
            <p className="px-3 py-2 m-0 text-center" style={{fontSize:'14px',fontFamily:'Roboto,sans-serif'}}>In publishing and graphic design, Lorem ipsum  form of a document or a typeface without</p>

        <div className=" p-2 ">

            <p className="mb-3  text-center " style={{ fontSize: '22px',color:'#27C8A3',fontFamily:'Oxygen, sans-serif' }}>${productPrice}</p>
        </div>
        <div className="d-flex  ">
            <button className="btn btn-success border-0  rounded-0  w-100 text-white p-3" style={{background:'#27C8A3'}} onClick={()=>addProductToBasket()} >add To Cart</button>
        </div>
            </div>
    
    </div>
    </>
    );
}

export default SingleProduct;