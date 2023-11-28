import React, { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import Link from "next/link";
import axios from 'axios';
import portfolio_grid_data from "./portfolio-grid-data";
import { useEffect } from "react";

const PortfolioGridCol = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const harfler = ["0-9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  useEffect(() => {
    getProduct(1)
  }, [])
  const getProduct = async (productId) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}manufacturers_info`, { "deger": productId });
    setPortfolioItems(response.data)
  }
  const goTo = (id) => {
    window.scrollTo({
      top: document.getElementById(id).offsetTop - 140,
      behavior: "smooth"
    });
  };
  return (
    <section className="portfolio__area pt-60 pb-110">
      <div className="container">
        <div class="wordsx_theme" >
          {harfler.map((itemx, ii) => (
            <a rel="nofollow" onClick={() => goTo(itemx)}>{itemx}</a>
          ))}
        </div>
        {portfolioItems.map((itemx, ii) => (
          <>
            <div id={`${itemx.ust_baslik}`} style={{ height: "50px", backgroundColor: "#F5F6F5", fontSize: "30px", padding: "10px 10px", marginTop: "30px" }}>{itemx.ust_baslik}</div>
            <motion.div layout className="row gx-2 grid">
              {itemx.icerikler.map((item) => (
                <Link href={`manufacturers/${item.href}`} key={item.id} className="col-xxl-2 col-xl-2 col-lg-4 col-md-3 col-4">
                  <LayoutGroup>
                    <div
                      className="portfolio__item mb-8 fix transition-3 wow fadeInUp"
                      data-wow-delay=".3s"
                      data-wow-duration="1s"
                      style={{ minHeight: "80px" }}
                    >
                      <div
                        className="portfolio__thumb include-bg"
                        style={{ backgroundImage: `url(https://api.zenkaeurope.com/app/resimler/linecard2/${item.resim})`, backgroundSize: "contain" }}
                      ></div>
                      <div className="portfolio__text">
                        <p>
                          {item.isim}
                        </p>
                      </div>
                    </div>
                  </LayoutGroup>
                </Link>
              ))}

            </motion.div>
          </>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGridCol;
