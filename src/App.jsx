import { useContext } from "react";
import { Context } from "./context/Context";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";
import ProductInfo from "./Components/ProductInfo/ProductInfo";

function App() {
  const { mobileMenu, setMobileMenu } = useContext(Context);

  return (
    <div className="page">
      <Navbar />
      <div className="product-main-display">
        <ProductDisplay className="app-product" />
        <ProductInfo className="app-info" />
      </div>
      <div
        className={`mobile-panel ${mobileMenu === true ? "" : "hidden"}`}
      ></div>
      <div className={`menu-bar ${mobileMenu === true ? "" : "hidden"}`}>
        <div className="menu-bar-items">
          <h2>Collections</h2>
          <h2>Men</h2>
          <h2>Women</h2>
          <h2>Women</h2>
          <h2>About</h2>
          <h2>Contact</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
