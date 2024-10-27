import React from "react";
// import ImageGallery from "../components/ProductData";
import NavigationMenu from "../components/Navigation";
import ShowProduct from "../components/ProductShow";

const ProductByButton = (): React.ReactNode => {
  return (
    <>
      <NavigationMenu />
      <ShowProduct />
    </>
  );
};

export default ProductByButton;
