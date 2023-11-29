import { useEffect, useState } from "react";
import { getProductById } from "../api/productApi";
import heart from '../assests/images/heart.svg'
import basket from '../assests/images/whiteBasket.svg'
import eye from '../assests/images/eye-svgrepo-com.svg'

import "./style.css";

export const ProductId = () => {
  const [currentProduct, setCurrentProduct] = useState({});

  const fetchProductById = async () => {
    const productById = await getProductById("15");
    const data = productById.data;
    setCurrentProduct({ ...data });
  };

  useEffect(() => {
    fetchProductById();
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center my-3">
        <div style={{ width: "60%" }}>
          <img
            src={`http://baby-bucket-product.s3.amazonaws.com/${currentProduct["product_image"]}`}
            alt="productImage"
            width={"100%"}
            height={450}
            style={{
              margin: "0 auto",
              borderRadius: "24px",
              paddingRight: "32px",
            }}
          />
        </div>
        <div
          style={{ width: "40%", minHeight: "100%" }}
          className="productRightSection p-3"
        >
          <h4>{currentProduct.product_description} </h4>
          <div className="d-flex align-items-center py-2 mb-3 mt-1"style={{fontFamily:'alto,sans-serif'}}>
            <p style={{ color: "#E10600" }} className="m-0">
              <span className="mx-1">Dhs.</span>
              <s>213.00</s>{" "}
            </p>
            <p style={{ marginLeft: "8px" }} className="m-0">
              <span className="mx-1">Dhs.</span>
              {currentProduct.product_price}
            </p>
          </div>
          {currentProduct.color && (
            <div>
              <p>Color :</p>
            </div>
          )}

          <div className="d-flex flex-column justify-content-center mb-4">
            <label for="quantity" className="mb-3" style={{fontFamily:'alto,sans-serif'}}>
              Quantity:
            </label>
            <div style={{fontFamily:'oswald,sans-serif'}}>
              <button
                className="spin"
                style={{ background: "#E95144", marginLeft: "0" }}
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                name="quantity"
                class="modern-input"
                value={0}
                style={{width:"60px"}}
              />
              <button className="spin" style={{ background: "#27c8a3" }}>
                +
              </button>
            </div>
          </div>
          <div className="mb-4" style={{fontFamily:'alto,sans-serif'}}>
            <p>Subtotal Dhs:<span style={{fontFamily:'oswald,sans-serif',margin:"3px"}}>350</span></p>
          </div>
          <div className="my-2" style={{fontFamily:'alto,sans-serif'}}>
            <button className="buyNow d-flex justify-content-center align-items-center ">Add To Cart <img src={basket} alt='toma-ecomerce' width={30} height={30} style={{marginLeft:'6px'}}/></button>
          </div>
          <div className="mb-3">
            <button className="buyNow" style={{background:'#27c8a3'}}>Buy it Now <img src={heart} alt='toma-ecomerce' width={30} height={30} style={{marginleft:'6px'}}/></button>
          </div>
          <div>
            <p><img src={eye} alt="toma-store" style={{marginRight:'8px',fontFamily:'alot,sans-serif'}}/>200 customers are viewing this product</p>
          </div>
        </div>
      </div>
    </div>
  );
};
