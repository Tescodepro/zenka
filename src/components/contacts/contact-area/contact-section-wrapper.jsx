import React from "react";
// internal
import bg from '@assets/img/contact/contact-bg.png';

const ContactSectionWrapper = ({title,subtitle}) => {
  return (
    <section className="tp-section-area p-relative z-index-1 tp-section-spacing">
      <div
        className="tp-section-bg include-bg"
        style={{backgroundImage:`url(${bg.src})`}}
      ></div>
      <div className="container mt-40">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="tp-section-wrapper-2 text-center">
              <span className="">
                {title}
              </span>
              <h3 className="display-5 fw-bold">
                {subtitle}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionWrapper;
