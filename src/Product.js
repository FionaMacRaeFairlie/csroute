import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ data }) => {
  const { productId } = useParams();
  const product = data.find(p => p.id === Number(productId));
  let productData;

  if (product) {
    if( product.available==="yes"){
    productData = (
      <div>
        <h3> {product.name} </h3>
        <p> {product.description} </p>
        <p> {product.price} </p>
      
      </div>
    );}
    else productData=<h3> Sorry this item is not currently available</h3>;
  } else {
    productData = <h3> Sorry this item is not stocked </h3>;
  }

  return (
    <div>
      <div>{productData}</div>
    </div>
  );
};

export default Product;