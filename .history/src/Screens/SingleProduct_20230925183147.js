/** @format */

import React, { useState } from "react";
import ProductCarousel from "../Components/Template/ProductCarousel";
import RelatedCarousel from "../Components/Template/RelatedCarousel";
import { AiFillStar, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import ReviewCarousel from "../Components/Template/ReviewCarousel";

const SingleProduct = () => {
  const [add, setAdd] = useState(false);
  const [ modalShow , setModalShow ] = useState(false)

  const bakeryProducts = [
    {
      img: "/Image/19.png",
      title: "Bread",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
    {
      img: "/Image/20.png",
      title: "Pastries",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
    {
      img: "/Image/21.png",
      title: "Cookies",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
  ];

  const partyProduct = [
    {
      img: "/Image/22.png",
      title: "Bread",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
    {
      img: "/Image/23.png",
      title: "Pastries",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
    {
      img: "/Image/24.png",
      title: "Cookies",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
  ];
  return (
    <>
    <CustomizeModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="single_product">
        <div className="left-container">
          <img src="/Image/89.png" alt="" className="upper_Image" />

          <div className="multiple-image">
            <img src="/Image/90.png" alt="" />
            <img src="/Image/90.png" alt="" />
            <img src="/Image/90.png" alt="" />
            <img src="/Image/90.png" alt="" />
          </div>
        </div>
        <div className="right-container">
          <p className="title">Chocolate Truffle Cake</p>
          <p className="desc">
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>

          <div className="review-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <p>(1660 Review)</p>
          </div>
          <p className="price">₹1000</p>
          <p className="price" style={{ fontWeight: "600", fontSize: "20px" }}>
            Select Size
          </p>
          <div className="sizes">
            <p>250</p>
            <p>500</p>
            <p>1000</p>
            <p>1500</p>
          </div>

          <p className="price" style={{ fontWeight: "600", fontSize: "20px" }}>
            Select Quantity
          </p>

          <div className="buttons">
            {add ? (
              <div className="quantity_button">
                <span className="minus">
                  {" "}
                  <AiOutlineMinus />{" "}
                </span>
                <span> 1 </span>
                <span className="plus">
                  {" "}
                  <AiOutlinePlus />{" "}
                </span>
              </div>
            ) : (
              <button className="add_btn" onClick={() => setAdd(true)}>
                Add
              </button>
            )}

            <button className="customize_btn"  >Customize</button>
          </div>
        </div>
      </div>

      <div className="Reviews_Container" >
      <p className="title">Reviews</p>
      <ReviewCarousel />

      </div>

      <div className="multi-background-heading">
        <p className="heading">Other Cake’s</p>
        <ProductCarousel />
        <button className="last-button">View More</button>
      </div>

      <div className="shop_product">
        <div className="Heading">
          <p>Bakery Product’s</p>
          <select>
            <option>Select Bakery Option's</option>
            <option></option>
          </select>
        </div>

        <RelatedCarousel data={bakeryProducts} />
      </div>

      <div className="shop_product">
        <div className="Heading">
          <p>Party Product’s</p>
        </div>

        <RelatedCarousel data={partyProduct} />
      </div>
    </>
  );
};

export default SingleProduct;
