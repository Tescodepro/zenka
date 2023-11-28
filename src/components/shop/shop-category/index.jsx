import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
// internal
import cate_1 from "@assets/img/product/category/robo.png";
import cate_2 from "@assets/img/product/category/box.png";
import cate_3 from "@assets/img/product/category/cable.png";
import cate_4 from "@assets/img/product/category/Connectors.png";
import cate_5 from "@assets/img/product/category/electro.png";
import cate_6 from "@assets/img/product/category/fasteners.png";
import cate_7 from "@assets/img/product/category/circuits.png";
import SectionWrapper from "@elements/section-wrapper";
import SingleCategory from "./single-category";
import Link from "next/link";
import axios from "axios";

// products category data
export const products_category = [
  {
    img: cate_1,
    title: "Switches",
    link:'switches',
    status: {
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    img: cate_2,
    link:'sensors',
    title: "Sensors, Transducers",
    status: {
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    img: cate_3,
    title: "RF/IF and RFID",
    link:'rfifandrfid',
    status: {
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    img: cate_4,
    link:'connectors',
    title: "Connectors, Interconnects",
    status: {
      enum: ["active", "inactive"],
      default: "active",
    }
  },
  {
    img: cate_5,
    title: "Relays",
    link:'relays',
    status: {
      enum: ["active", "inactive"],
      default: "active",
    }
  },
  {
    img: cate_6,
    title: "Power Supplies - External/Internal (Off-Board)",
    link:'power-supplies',
    status: {
      enum: ["active", "inactive"],
      default: "active",
    }
  },
  {
    img: cate_7,
    link:'board-mount',
    title: "Power Supplies - Board Mount",
    status: {
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    img: cate_7,
    link:'Optoelectronics',
    title: "Optoelectronics",
    status: {
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    img: cate_7,
    title: "Isolators",
    link:'Isolators',
    status: {
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    img: cate_7,
    link:'Integrated-circuits',
    title: "Integrated Circuits (ICs)",
    status: {
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    img: cate_7,
    link:'Discrete-Semiconductor-Products',
    title: "Discrete Semiconductor Products",
    status: {
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    img: cate_7,
    link:'Connectors-Interconnects',
    title: "Connectors, Interconnects",
    status: {
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    img: cate_7,
    link:'Circuit-Protection',
    title: "Circuit Protection",
    status: {
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    img: cate_7,
    link:'Capacitors',
    title: "Capacitors",
    status: {
      enum: ["active", "inactive"],
      default: "active",
    },
  },
];

const ShopCategoryArea = ({ element_style = false }) => {
  const [loop, setLoop] = useState(false);
  useEffect(() => setLoop(true), [])

  const [productCategory, setProductCategory] = useState();
  useEffect(() => {
    getBackCategory()
  }, [])
  const getBackCategory=async ()=>{
    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}products/get_categories`).then(val => setProductCategory(val['data']))
  }
  console.log('productCategory',productCategory)
  return (
    <section className="product__category mt-2">
      <div className="container">
        {element_style && (
          <SectionWrapper
            title="Minimal & Clean Design"
            subtitle="Shop Category Slider"
          />
        )}
        <div className="row">
          {/* <Link href={'/products'} to={'/products'}>
          <div className="text-end">View All</div>
          </Link> */}
          
          <div className="col-xxl-12">
          <div className="section__title-wrapper-13 mb-35">
                  <h3 className="section__title-13">Categories</h3>
                </div>
            <div className="product__category-slider">
              <Swiper
                className="product__category-slider-active swiper-container"
                slidesPerView={3}
                spaceBetween={30}
                loop={loop}
                modules={[Scrollbar]}
                scrollbar={{
                  el: ".tp-scrollbar",
                  clickable: true,
                }}
                breakpoints={{
                  1601: {
                    slidesPerView: 5,
                  },
                  1400: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  0: {
                    slidesPerView: 0,
                    spaceBetween: 0,
                  },
                }}
              >
                {productCategory?.map((item, i) => (
                  <SwiperSlide
                    key={i}
                  >
                    <SingleCategory item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="tp-scrollbar"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCategoryArea;
