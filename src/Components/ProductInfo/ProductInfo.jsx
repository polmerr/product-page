import React, { useContext, useState } from "react";
import "./ProductInfo.css";
import trolley from "../../assets/images/icon-cart.svg";
import plus from "../../assets/images/icon-plus.svg";
import minus from "../../assets/images/icon-minus.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../context/Context";

function ProductInfo() {
  const { cartQuantity, setCartQuantity, setInCart } = useContext(Context);

  return (
    <div className="info-wrapper">
      <div className="info-text">
        <h4>SNEAKER COMPANY</h4>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="order-box">
        <div className="pricing">
          <h2>$125.00</h2>
          <h4 className="savings">50%</h4>
          <h4 className="old-price">$250.00</h4>
        </div>
        <div className="cart-quantity">
          <div className="order-quantity">
            <FontAwesomeIcon
              className="minus-quant noSelect"
              onClick={() =>
                setCartQuantity((prev) => (prev > 0 ? prev - 1 : 0))
              }
              icon={faMinus}
            />
            <p>{cartQuantity}</p>
            <FontAwesomeIcon
              className="add-quant noSelect"
              onClick={() =>
                setCartQuantity((prev) => (prev < 100 ? prev + 1 : prev))
              }
              icon={faPlus}
            />
          </div>
          <div
            className="cart-button noSelect"
            onClick={() => {
              setInCart(cartQuantity);
              setCartQuantity(0);
            }}
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <h4>Add to cart</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
