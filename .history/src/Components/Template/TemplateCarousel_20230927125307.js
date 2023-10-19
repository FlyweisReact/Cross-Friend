/** @format */

import React , { useEffect} from "react";
import OwlCarousel from "react-owl-carousel";
import { getBanner } from "../../Repository/Api";

const TemplateCarousel = () => {
  const [ banner , setBanner ] = useState([])
  const options = {
    items: 1,
    loop: true,
    nav: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: true,
    autoplayTimeout: 5000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
  };

  const fetchHandler = () => {
    getBanner()
  }

useEffect(() => {
  fetchHandler()
},[])

  return (
    <div className="Template_Carousel">
      <OwlCarousel className="owl-theme" {...options}>
        <div className="Item">
          <img src="/Image/1.png" alt="" />
        </div>
        <div className="Item">
          <img src="/Image/2.png" alt="" />
        </div>
        <div className="Item">
          <img src="/Image/3.png" alt="" />
        </div>
        <div className="Item">
          <img src="/Image/4.png" alt="" />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default TemplateCarousel;
