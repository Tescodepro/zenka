import React from "react";

const PolicyArea = () => {
  return (
    <section className="policy__area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="policy__wrapper policy__translate p-relative z-index-1">
              <div className="policy__item mb-35">
                <h3 className="">Information Collection</h3>
                <p>
                  You can explore our website without revealing your identity or providing any personal details. However, when you request a quote, you will need to complete our request form, which requires certain information. If you choose to provide personal information, our site collects only the data voluntarily shared by visitors. We gather and store the following types of personal information:
                  <ul className="ms-3 mt-2 mb-2">
                    <li>Email address and contact information for responding to inquiries
                    </li>
                    <li>Financial details and bank account numbers for processing purchase orders
                    </li>
                    <li>Shipping, billing, or other necessary information for delivering ordered items
                    </li>
                    <li>Additional information such as standard web log data and users' IP addresses
                    </li>
                  </ul>
                </p>
                <h3 className="my-3">Website Visits
                </h3>
                <p>
                  Welcome to Zenka Europe UAB. We highly value your privacy and the protection of your personal information.
                  The following statement outlines how we collect and handle the information we gather.
                  Whenever you visit Zenka Europe UAB, our server automatically recognizes and logs your IP address.
                  An IP address represents the location of the computer making the request to the web server.
                  This data exchange does not obtain any personal or detailed information—it is not intended to be provided by a visitor's browser.
                  <br />
                  <br />
                  At Zenka Europe UAB, we periodically review and analyze visitors' IP addresses solely for the purpose of monitoring and enhancing our website.
                  We do not share this information outside Zenka Europe UAB.
                  During your visit to our website, we may request contact information (such as email address, telephone number, fax number,
                  and shipping/billing addresses) on a voluntary basis and with your consent.
                </p>
              </div>

              <div className="policy__item policy__item-2 mb-35">
                <h3 className="">Security</h3>
                <p>
                  Zenka Europe UAB may contain links to third-party websites that offer content, services, advertising, and other materials.
                  We have no control over the personal information collected by these sites and are not responsible for the accuracy and content they provide.
                  This document solely addresses the use and disclosure of information collected by us, and different policies may apply to third parties.
                  Zenka Europe UAB does not govern other websites, and this Privacy Policy does not apply to them.
                  We encourage you to review the privacy policies of those third-party websites, where applicable.

                </p>
                <h3>Cookies</h3>
                <p>
                  Cookies are simple text files stored on your hard drive, and they are as safe as any other data stored on a computer.
                  Websites create cookies to store data for visitors' convenience.
                  A cookie can only be used by the website that created it and cannot access data from your computer beyond what is stored in it.
                  The data stored in our cookies may not include financial information, contact details, or other personal and sensitive data.
                  Our site uses cookies solely to remember our visitors' preferences and provide them with tailored content.
                  <br />
                  General
                  <br />
                  We reserve the right to amend our privacy policy at any time without prior notification.
                </p>
              </div>



            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyArea;
