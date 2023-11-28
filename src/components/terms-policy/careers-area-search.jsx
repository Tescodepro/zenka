import React from "react";
import logo from "@assets/img/logo/sgc.jpg";
import resim from "@assets/img/features/resimci.png";
import Image from "next/image";
import Link from "next/link";

const CareersAreasearch = () => {
  return (
    <section className="policy__area pb-120">
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-xl-12">
            <div className="policy__wrapper policy__translate p-relative z-index-1">
              <div className="policy__item mb-35">

                <div className="row">
                  <div className="col-xl-6"><Image src={resim} width={0}
                    height={0}
                    style={{ width: '100%', height: '380px', objectFit: "cover" }} alt="blog img" /></div>
                  <div className="col-xl-6">

                    <h3 className="mb-3">Sorry, we couldn't locate your search</h3>

                    <p>
                      <br></br>
                      However, we may still have the stock of the product you require. Please Contact us or Submit an RFQ to receive the finest support from us.<br></br>
                      <br></br>

                    </p>
                    <div className="contact__btn-2 text-center">
                      <Link href="/contact" style={{width:"200px"}} className="btn btn-success rounded p-3">
                        Contact
                      </Link>
                    </div>
                    <div className="contact__btn-2 text-center mt-10">
                      <Link href="/rfq" style={{width:"200px"}} className="btn btn-success rounded p-3">
                        RFQ
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersAreasearch;
