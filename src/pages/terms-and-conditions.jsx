import { HeaderTwelve, Wrapper, FooterFour } from "@layout/index";
import SEO from "@components/seo";
import SectionArea from "@components/section-area/section-area";
import TermsArea from "@components/terms-policy/terms-area";

export default function Policy() {
  return (
    <Wrapper>
      <SEO pageTitle={"Terms & Conditions"} />
      <HeaderTwelve />
      <div style={{ paddingTop: 100 }}></div>

      <SectionArea
        title="Terms & Conditions"
        subtitle={
          <>
          </>
        }
      />
      <TermsArea />
      <FooterFour />
    </Wrapper>
  );
}