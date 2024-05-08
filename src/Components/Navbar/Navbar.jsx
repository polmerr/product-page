import React, { useContext } from "react";
import "./Navbar.css";
import burger from "../../assets/images/icon-menu.svg";
import cross from "../../assets/images/icon-close.svg";
import trolley from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import logo from "../../assets/images/logo.svg";
import thumbnail1 from "../../assets/images/image-product-1-thumbnail.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../context/Context";
function Navbar() {
  const {
    setShowCart,
    showCart,
    setMobileMenu,
    mobileMenu,
    inCart,
    setInCart,
  } = useContext(Context);

  return (
    <div className="nav">
      <div className="nav-left">
        <img
          className="burger"
          onClick={() => setMobileMenu((prev) => !prev)}
          src={mobileMenu ? cross : burger}
          alt=""
        />
        <img className="logo" src={logo} alt="" />
        <div className="nav-links">
          <h2>Collections</h2>
          <h2>Men</h2>
          <h2>Women</h2>
          <h2>About</h2>
          <h2>Contact</h2>
        </div>
      </div>
      <div className="nav-right">
        <div>
          <FontAwesomeIcon
            icon={faCartShopping}
            className="cart"
            onClick={() => setShowCart((prev) => !prev)}
          />
          <p className={inCart > 0 ? "" : "hidden"}>
            {inCart > 0 ? inCart : ""}
          </p>
        </div>

        <img className="avatar" src={avatar} alt="" />
      </div>
      <hr />
      <div className={`cart-display ${showCart ? "" : "hidden"}`}>
        <h3 className="cart-title">Cart</h3>
        <hr />
        {inCart === 0 ? (
          <h3 className="cart-empty">Your cart is empty.</h3>
        ) : (
          <div className="cart-item">
            <div className="cart-item-info">
              <img src={thumbnail1} alt="" />
              <div className="cart-item-text">
                <p className="cart-price-title">
                  Fall Limited Edition Sneakers
                </p>

                <p className="cart-price">
                  $125.00 x {inCart} <strong>${125 * inCart}.00</strong>
                </p>
              </div>
              <FontAwesomeIcon
                className="trash"
                onClick={() => setInCart(0)}
                icon={faTrash}
              />
            </div>
            <button
              className="check-out"
              onClick={() => alert("Order Succesful!")}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
