import { FooterEleven, HeaderTwelve, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ContactArea from "@components/contacts/contact-area";

export default function Contact() {
  return (
    <Wrapper>
      <SEO pageTitle={"Contact"} />
      <HeaderTwelve/>
      <ContactArea/>
      <FooterEleven/>
    </Wrapper>
  );
}
