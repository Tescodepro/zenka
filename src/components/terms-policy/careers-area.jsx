import React from "react";
import logo from "@assets/img/logo/sgc.jpg";
import Image from "next/image";

const CareersArea = () => {
  return (
    <section className="policy__area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="policy__wrapper policy__translate p-relative z-index-1">
              <div className="policy__item mb-35">
              <h3 className="mb-3">Information Careers</h3>

                <Image src={logo} width={0}
                  height={0}
                  style={{ width: '100%', height: '380px', objectFit: "cover" }} alt="blog img" />
                <p>
                  <br></br>
                  Contact us if you find yourself in the related job positions below ;<br></br>
                  <br></br>
                  International Sales Executive<br></br>
                  International Business Developer Assistant<br></br>
                  International Purchasing Assistant<br></br>
                  Logistics and Supply Chain Assistant<br></br>
                  Digital Marketing Assistant<br></br>
                  Business Analyst<br></br>
                  Accounting - Audit Assistant<br></br>
                  Human Resources Assistant<br></br>
                  IT Support Engineer<br></br>
                  Junior SEO Specialist - Content Writer - Copywriter<br></br>
                  IT Software Developer-Web Developer<br></br>
                  <br></br>
                  Good communication skills in English is a must, secondary language is a plus..<br></br>
                  <br></br>
                  Please send your application and CV  to :   hr@zenkaeurope.com<br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersArea;
