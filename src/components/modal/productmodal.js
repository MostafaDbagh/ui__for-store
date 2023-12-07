// ModalComponent.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Delete from '../../assests/images/delete.png'
import {removeProduct} from '../../redux/reducer/productReducer'
import { useDispatch } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';
const MyModal = ({ showProductsModal, setShowPorductsModal:handleClose }) => {
    const product = useSelector(state => state.product)
    const dispatch = useDispatch()
    const productNuber =  () =>{
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
  return (
    <>
          <ToastContainer/>

    <Modal show={showProductsModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Picked Products</Modal.Title>
      </Modal.Header>
      <Modal.Body>
{productNuber() !== 0  &&product.map(product =>
  {
    return(
      product.quantity > 0 &&
      <div key={product.productImage} className='d-flex align-items-center justify-content-around' style={{maxHeight:'100px'}}>
      <div  style={{background:'#f6f6f6',position:'relative',margin:'16px 0'}}>
     <img src={`http://baby-bucket-product.s3.amazonaws.com/${product['rest'].productImage}`} 
     alt="productImage" 
     width={60} 
     height={60} 
     style={{borderRadius:'50%'}}
     />
     </div>
     <p className='my-0 mx-3'>{product['rest'].productName}</p>
     <p className='my-0 mx-3'>{product['rest'].productPrice}</p>
     <p className='my-0 mx-3'>{product.quantity}</p>
     <p className='m-0 ' onClick={()=>reduceProductNumber(product)} >
       <img src={Delete} alt='toma-boutique' width={40} height={40}/>
     </p>
</div>
    )}
)}
{productNuber() == 0 && <p>No item to show</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>handleClose(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default MyModal;
