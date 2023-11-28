import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
// user images
import user_1 from "@assets/img/users/user-1.jpg";
import user_2 from "@assets/img/users/user-2.jpg";
import user_3 from "@assets/img/users/user-3.jpg";
import user_4 from "@assets/img/users/user-14.jpg";
import user_5 from "@assets/img/users/user-15.jpg";
// svg
import Circle from "@svg/circle";
// quate
import quate_img from "@assets/img/testimonial/9/testimonial-quote-1.png";

// setting nav
const setting_nav = {
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  autoplay: true,
  speed: 100,
  autoplaySpeed: 8000,
  cssEase: "linear",
  loop: true,
};
// setting
const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  centerMode: false,
  cssEase: "linear",
};

// thumb nav data
const slider_thumb_nav = [
  { user: user_1 },
  { user: user_2 },
  { user: user_3 },
  { user: user_4 },
  { user: user_5 },
];

// testimonial data
const testimonial_data = [
  {
    heading: "Great Effort From Team",
    desc: (
      <>
        “ There are many variations passages Lorem Ipsum available the <br />{" "}
        majority suffered alteration in some form by injected humour randomised
        look embarrassing in middle text ”
      </>
    ),
    name: "Shahnewaz Sakil",
  },
  {
    heading: "Happy to deal with them",
    desc: (
      <>
        “ There are many variations passages Lorem Ipsum available the <br />{" "}
        majority suffered alteration in some form by injected humour randomised
        look embarrassing in middle text ”
      </>
    ),
    name: "Steven Smith",
  },
  {
    heading: "Awesome product features",
    desc: (
      <>
        “ There are many variations passages Lorem Ipsum available the <br />{" "}
        majority suffered alteration in some form by injected humour randomised
        look embarrassing in middle text ”
      </>
    ),
    name: "Jahanara Bibi",
  },
  {
    heading: "Their support is so cool",
    desc: (
      <>
        “ There are many variations passages Lorem Ipsum available the <br />{" "}
        majority suffered alteration in some form by injected humour randomised
        look embarrassing in middle text ”
      </>
    ),
    name: "Jinny Carter",
  },
  {
    heading: "Happy to deal with them",
    desc: (
      <>
        “ There are many variations passages Lorem Ipsum available the <br />{" "}
        majority suffered alteration in some form by injected humour randomised
        look embarrassing in middle text ”
      </>
    ),
    name: "Shanelle Blake",
  },
];

const PortfolioTestimonial = () => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  // handle slider ref
  const handleRef = (slider) => {
    setSlider1(slider);
  };
  const prevHandler = () => {
    slider1?.slickPrev();
  };
  const nextHandler = () => {
    slider1?.slickNext();
  };
  return (
    <>
      <section className="testimonial__area pt-130 pb-135">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-9 is-center mb-60">
                <span className="section__title-pre-9">TESTIMONIAL</span>
                <h3 className="section__title-9">People talk about us</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <div className="testimonial__slider-9 p-relative">
                <Slider
                  asNavFor={slider1}
                  ref={(slider) => setSlider2(slider)}
                  className="testimonial__slider-active-9"
                  {...settings}
                >
                  {testimonial_data.map((item, i) => (
                    <div key={i} className="testimonial__item-9">
                      <div className="testimonial__content-9 text-center">
                        <div className="testimonial__shape-quote-9">
                          <Image src={quate_img} alt="icon" />
                        </div>
                        <h4 className="testimonial-heading">{item.heading}</h4>
                        <p>{item.desc}</p>
                        <div className="testimonial__avater-info-9">
                          <h3 className="testimonial__avater-title-9">
                            {item.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>

                <div className="row justify-content-center">
                  <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-8">
                    <Slider
                      asNavFor={slider2}
                      ref={(slider) => handleRef(slider)}
                      className="testimonial__slider-nav-9 mt-35 mb-15 ml-25 mr-25"
                      {...setting_nav}
                    >
                      {slider_thumb_nav.map((nav, i) => (
                        <div
                          key={i}
                          className="testimonial__slider-9-thumb-nav"
                        >
                          <div className="tp-border-loader">
                            <Circle stroke="0" />
                          </div>
                          <Image src={nav.user} alt="image" />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
                <div className="testimonial__slider-arrow-9 d-none d-md-block">
                  <button
                    type="button"
                    onClick={prevHandler}
                    className="slick-prev testimonial-9-button-prev slick-arrow"
                  >
                    <i className="fa-regular fa-arrow-left"></i>
                    <span>Preview</span>
                  </button>

                  <button
                    type="button"
                    onClick={nextHandler}
                    className="slick-next testimonial-9-button-next slick-arrow"
                  >
                    <span>Next</span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioTestimonial;
