import { FooterFour, HeaderTwelve, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import RfqFormArea from "@components/contacts/contact-classic/rfq-form-area";

export default function ContactTwo() {
  return (
    <Wrapper>
      <SEO pageTitle={"RFQ"} />
      <HeaderTwelve top_bar={false} header_solid={true} header_black={true} />
      <div style={{ paddingTop: 80 }}></div>

      <RfqFormArea />
      <FooterFour />
    </Wrapper>
  );
}
