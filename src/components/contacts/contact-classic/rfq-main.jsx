import React from "react";
// internal
import ContactForm from "@components/forms/contact-form";
import RfqForm from "@components/forms/rfq-form";

const RfqMain = ({ element_style = false }) => {
  return (
    <section className={`contact__form-area ${element_style ? 'pt-120 pb-120' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className={`contact__form-2 contact__style-2 ${element_style ? '' : 'contact__translate'}`}>
              <h3 className="contact__form-2-title">Send your request for quotation</h3>
              <RfqForm style_2={true} />
              <p className="ajax-response"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RfqMain;
