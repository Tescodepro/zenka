import React from 'react';
import ContactSectionWrapper from '../contact-area/contact-section-wrapper';
import RfqMain from './rfq-main';

const ContactClassicArea = () => {
  return (
    <React.Fragment>
      <ContactSectionWrapper title="RFQ" subtitle="Get in touch with us for more information" />
      <RfqMain />
      {/* <ClassicLocationArea/> */}
    </React.Fragment>
  );
};

export default ContactClassicArea;