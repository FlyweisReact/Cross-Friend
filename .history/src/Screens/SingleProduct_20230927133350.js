/** @format */

import React, { useState, useEffect } from "react";
import ProductCarousel from "../Components/Template/ProductCarousel";
import RelatedCarousel from "../Components/Template/RelatedCarousel";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import ReviewCarousel from "../Components/Template/ReviewCarousel";
import { CustomizeModal } from "../Components/Modal/CustomizeModal";
import { useParams } from "react-router-dom";
import { getProductbyQuery, getProductDetail } from "../Repository/Api";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");
  const [add, setAdd] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [bakeryProducts, setBakeryProducts] = useState([]);
  const [partyProduct, setPartyProducts] = useState([]);

  useEffect(() => {
    getProductbyQuery("Party", setPartyProducts);
  }, []);

  useEffect(() => {
    getProductbyQuery("Bakery", setBakeryProducts);
  }, []);

  useEffect(() => {
    getProductDetail(id, setProduct, setImage, setReviews);
  }, []);

  const RatingComponent = (num) => {
    if (num == 0) {
      return (
        <>
          <AiOutlineStar />
        </>
      );
    } else if (num == 0.5) {
      return (
        <>
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 1) {
      return (
        <>
          <AiFillStar />
        </>
      );
    } else if (num == 1.5) {
      return (
        <>
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 2) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num == 2.5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 3) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num == 3.5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 4) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num == 4.5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num == 5.5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 6) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num == 6.5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 7) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num == 7.5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 8) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num == 8.5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 9) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num == 9.5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 10) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    }
  };

  return (
    <>
      <CustomizeModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="single_product">
        <div className="left-container">
          <img src={image} alt="" className="upper_Image" />

          <div className="multiple-image">
            {product?.imageUrls?.map((i, index) => (
              <img src={i} alt="" key={index} onClick={() => setImage(i)} />
            ))}
          </div>
        </div>
        <div className="right-container">
          <p className="title"> {product?.name} </p>
          <p className="desc">{product?.description}</p>

          <div className="review-container">
            {RatingComponent(product?.ratings)}
            <p>({product?.numOfReviews} Review)</p>
          </div>
          <p className="price">₹{product?.price} </p>
          <p className="price" style={{ fontWeight: "600", fontSize: "20px" }}>
            Select Size
          </p>
          <div className="sizes">
            {product?.sizePrice?.map((i, index) => (
              <p key={index}> {i.price} </p>
            ))}
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

            <button
              className="customize_btn"
              onClick={() => setModalShow(true)}
            >
              Customize
            </button>
          </div>
        </div>
      </div>

      {reviews?.length > 0 ? :""}

      <div className="Reviews_Container">
        <p className="title">Reviews</p>
        <ReviewCarousel data={reviews} />
      </div>

      <div className="multi-background-heading">
        <p className="heading">Other Cake’s</p>
        <ProductCarousel query='cake' />
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
