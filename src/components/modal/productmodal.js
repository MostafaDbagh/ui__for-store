// ModalComponent.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Delete from '../../assests/images/delete.png'

const MyModal = ({ showProductsModal, setShowPorductsModal:handleClose }) => {
    const product = useSelector(state => state.product)
  return (
    <Modal show={showProductsModal} onHide={handleClose}>
        {console.log(product,'prod  ')}
      <Modal.Header closeButton>
        <Modal.Title>Picked Products</Modal.Title>
      </Modal.Header>
      <Modal.Body>
{product.map(product =>(
    <div key={product.productImage} className='d-flex align-items-center justify-content-around' style={{maxHeight:'100px'}}>
             <div  style={{background:'#f6f6f6',position:'relative',margin:'16px 0'}}>
            <img src={`http://baby-bucket-product.s3.amazonaws.com/${product.productImage}`} 
            alt="productImage" 
            width={60} 
            height={60} 
            style={{borderRadius:'50%'}}
            />
            </div>
            <p className='my-0 mx-3'>{product.productName}</p>
            <p className='my-0 mx-3'>{product.productPrice}</p>
            <p className='m-0 ' >
              <img src={Delete} alt='toma-boutique' width={40} height={40}/>
            </p>
    </div>
))}
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
  );
};

export default MyModal;
