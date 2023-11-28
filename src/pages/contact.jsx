import { FooterEleven, FooterFour, HeaderTwelve, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ContactClassicArea from "@components/contacts/contact-classic";

export default function ContactTwo() {
  return (
    <Wrapper>
      <SEO pageTitle={"Contact"} />
      <HeaderTwelve top_bar={false} header_solid={true} header_black={true} />
      <div style={{ paddingTop: 80 }}></div>

      <ContactClassicArea />
      <FooterFour />
    </Wrapper>
  );
}
