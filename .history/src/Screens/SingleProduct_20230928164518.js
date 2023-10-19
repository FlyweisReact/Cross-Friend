/** @format */

import React, { useState, useEffect } from "react";
import ProductCarousel from "../Components/Template/ProductCarousel";
import RelatedCarousel from "../Components/Template/RelatedCarousel";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import ReviewCarousel from "../Components/Template/ReviewCarousel";
import { CustomizeModal } from "../Components/Modal/CustomizeModal";
import { useParams } from "react-router-dom";
import {
  addToCart,
  getProductbyQuery,
  getProductDetail,
} from "../Repository/Api";
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
  const [sizeId, setSizeId] = useState("");
  const [quantity, setQuantity] = useState(0);

  const payload = { product: id, sizeId, quantity : 1 };

  useEffect(() => {
    getProductbyQuery("Party", setPartyProducts);
  }, []);

  useEffect(() => {
    getProductbyQuery("Bakery", setBakeryProducts);
  }, []);

  const fetchProduct = () => {
    getProductDetail(id, setProduct, setImage, setReviews ,setQuantity );
  }

  useEffect(() => {
  
    window.scrollTo(0, 0);
  }, [id]);

  const RatingComponent = (num) => {
    if (num === 0) {
      return (
        <>
          <AiOutlineStar />
        </>
      );
    } else if (num === 0.5) {
      return (
        <>
          <FaStarHalfAlt />
        </>
      );
    } else if (num === 1) {
      return (
        <>
          <AiFillStar />
        </>
      );
    } else if (num === 1.5) {
      return (
        <>
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num === 2) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num === 2.5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num === 3) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num === 3.5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num === 4) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num === 4.5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num === 5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num === 5.5) {
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
    } else if (num === 6) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num === 6.5) {
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
    } else if (num === 7) {
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
    } else if (num === 7.5) {
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
    } else if (num === 8) {
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
    } else if (num === 8.5) {
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
    } else if (num === 9) {
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
    } else if (num === 9.5) {
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
    } else if (num === 10) {
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

  const cartHandler = () => {
    addToCart(payload);
    setAdd(true);
  };

  console.log(quantity)

  return (
    <>
      <CustomizeModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="single_product">
        <div className="left-container">
          <img src={image} alt="" className="upper_Image" />

          <div className="multiple-image">
            {product?.product?.imageUrls?.map((i, index) => (
              <img src={i} alt="" key={index} onClick={() => setImage(i)} />
            ))}
          </div>
        </div>
        <div className="right-container">
          <p className="title"> {product?.product?.name} </p>
          <p className="desc">{product?.product?.description}</p>

          <div className="review-container">
            {RatingComponent(product?.product?.ratings)}
            <p>({product?.product?.numOfReviews} Review)</p>
          </div>
          <p className="price">₹{product?.product?.price} </p>
          <p className="price" style={{ fontWeight: "600", fontSize: "20px" }}>
            Select Size
          </p>
          <div className="sizes">
            {product?.product?.sizePrice?.map((i, index) => (
              <p
                key={index}
                className={sizeId === i._id ? "active" : ""}
                onClick={() => setSizeId(i._id)}
              >
                {" "}
                {i.weight}{" "}
              </p>
            ))}
          </div>

          <p className="price" style={{ fontWeight: "600", fontSize: "20px" }}>
            Select Quantity
          </p>

          <div className="buttons">
            {quantity > 0  ? (
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
              <button className="add_btn" onClick={() => cartHandler()}>
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

      {reviews?.length > 0 ? (
        <div className="Reviews_Container">
          <p className="title">Reviews</p>
          <ReviewCarousel data={reviews} />
        </div>
      ) : (
        ""
      )}

      <div className="multi-background-heading">
        <p className="heading">Other Cake’s</p>
        <ProductCarousel query="cake" />
        <button className="last-button">View More</button>
      </div>

      {bakeryProducts?.length > 0 ? (
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
      ) : (
        ""
      )}

      {partyProduct?.length > 0 ? (
        <div className="shop_product">
          <div className="Heading">
            <p>Party Product’s</p>
          </div>

          <RelatedCarousel data={partyProduct} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SingleProduct;
