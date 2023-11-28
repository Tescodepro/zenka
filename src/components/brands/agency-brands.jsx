// external
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
// internal
import ElBrandSectionWrapper from "@elements/elements-brand/el-brand-section-wrapper";
import brand_1 from "@assets/img/brand/5/attach/3m.png";
import brand_2 from "@assets/img/brand/5/attach/ABB.png";
import brand_3 from "@assets/img/brand/5/attach/ad.png";
import brand_4 from "@assets/img/brand/5/attach/Amphenol.png";
import brand_5 from "@assets/img/brand/5/attach/bosch.png";
import brand_6 from "@assets/img/brand/5/attach/bourns.png";
import brand_7 from "@assets/img/brand/5/attach/connor winfield.png";
import brand_8 from "@assets/img/brand/5/attach/Diodes.png";
import brand_9 from "@assets/img/brand/5/attach/Epson.png";
import brand_10 from "@assets/img/brand/5/attach/honeywell.png";
import brand_11 from "@assets/img/brand/5/attach/intel.png";
import brand_12 from "@assets/img/brand/5/attach/Littlefuse.png";
import brand_13 from "@assets/img/brand/5/attach/Macom.jpg";
import brand_14 from "@assets/img/brand/5/attach/Maxlinear.png";
import brand_15 from "@assets/img/brand/5/attach/Maxwell.png";
import brand_16 from "@assets/img/brand/5/attach/Melexis.png";
import brand_17 from "@assets/img/brand/5/attach/Microchip.png";
import brand_18 from "@assets/img/brand/5/attach/molex.png";
import brand_19 from "@assets/img/brand/5/attach/Murata.png";
import brand_20 from "@assets/img/brand/5/attach/nxp.png";
import brand_21 from "@assets/img/brand/5/attach/Silicon Labs.png";
import brand_22 from "@assets/img/brand/5/attach/stm.png";
import brand_23 from "@assets/img/brand/5/attach/TDK.png";
import brand_24 from "@assets/img/brand/5/attach/TE Connectivity.png";
import brand_25 from "@assets/img/brand/5/attach/Vishay.png";
import brand_26 from "@assets/img/brand/5/attach/xilinx.png";
// import Link from "next/link";

// slider setting 1
const settings_1 = {
  speed: 4000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  pauseOnFocus: false,
  pauseOnHover: true,
};

const settings_2 = {
  speed: 3000,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  arrows: false,
  buttons: false,
};

// data
const brand_1_data = [
  { brand: brand_1 },
  { brand: brand_2 },
  { brand: brand_3 },
  { brand: brand_4 },
  { brand: brand_5 },
  { brand: brand_6 },
  { brand: brand_7 },
  { brand: brand_8 },
  { brand: brand_20 },
  { brand: brand_21 },
  { brand: brand_22 },
  { brand: brand_23 },
  { brand: brand_24 },
  { brand: brand_25 },
  { brand: brand_26 },
];
const brand_2_data = [
  { brand: brand_9 },
  { brand: brand_10 },
  { brand: brand_11 },
  { brand: brand_12 },
  { brand: brand_13 },
  { brand: brand_14 },
  { brand: brand_15 },
  { brand: brand_16 },
  { brand: brand_17 },
  { brand: brand_18 },
  { brand: brand_19 },
];

const AgencyBrands = ({
  style_2 = false,
  spacing = false,
  element_style = false,
  square = "",
}) => {

  const sliderRef = useRef();
  let autoplayOn = true;
  let autoplaySpeed = 0;
  useEffect(() => {
    setInterval(function () {
      if (!autoplayOn) return;
      sliderRef?.current?.slickPrev();
    }, autoplaySpeed);
  }, [autoplayOn, autoplaySpeed]);

  return (
    <>
      <section id="manufactures"
        className={`brand__area ${spacing ? "pb-120" : ""} ${element_style ? "pt-110 pb-120" : ""
          }`}
      >
        <div className="container-fluid g-0">
          {!style_2 && !element_style && (
            <div className="row gx-0">
              <div className="col-xxl-12">
                <div className=" text-center mb-20 my-4 ">
                  <span className="fst-normal text-black  display-6 ">
                  Manufacturers
                  </span>
                </div>
              </div>
            </div>
          )}
          {element_style && (
            <ElBrandSectionWrapper
              cls="gx-0"
              subtitle="Modern &amp; Clean Design"
              title="Brand Rounded Slider"
            />
          )}
          <div className="row gx-0 gy-2">
            <div className="col-xxl-12">
              <div className={`brand__slider-5 ${square ? square : ""}`}>
                <div className="brand__slider-5">
                  <Slider {...settings_1} className="brand__slider-active-5">
                    {brand_1_data.map((brand, i) => (
                        <div key={i} className="brand__item-5">
                          <Image width={200} height={80} src={brand.brand} alt="brand" />
                        </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className={`brand__slider-5-1 ${square ? square : ""}`}>
                <div className="brand__slider-5">
                  <Slider
                    {...settings_2}
                    className="brand__slider-active-5-1"
                    ref={sliderRef}
                  >
                    {brand_2_data.map((brand, i) => (
                      <div key={i} className="brand__item-5">
                        <Image width={200} height={80} src={brand.brand} alt="brand" />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgencyBrands;
