import React from "react";
import StarRatings from "react-star-ratings";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const SingleProduct = ({ product }) => {
  const { is, image, description, price, title, category, rating } = product;
  return (
    <div className="">
      <img src={image} alt="" />
      <h4>{title}</h4>
      <div className="flex flex-row justify-between">
        <p>Price: ${price}</p>
        <p>
          rating:$
          {
            <StarRatings
              rating={rating.rate}
              starDimension="30px"
              starSpacing="10px"
              starRatedColor="#fc4903"
            ></StarRatings>
          }
          ({rating.count}reviews)
        </p>
      </div>
          <button className="text-center w-full flex flex-row justify-center gap-2 font-medium bg-orange-700 p-2 items-center">
              Add To Cart
        <ShoppingCartIcon className="h-6 w-6 text-black-500"/>
          
      </button>
    </div>
  );
};

export default SingleProduct;
