import {HeaderTwelve, Wrapper,FooterFour } from "@layout/index";
import SEO from "@components/seo";
import SectionArea from "@components/section-area/section-area";
import PolicyArea from "@components/terms-policy/policy-area";

export default function Policy() {
  return (
    <Wrapper>
      <SEO pageTitle={"Privacy Policy"} />
      <HeaderTwelve/>
      <div style={{ paddingTop: 100 }}></div>

      <SectionArea
        title="Privacy Policy"
        subtitle={
          <>
            Zenka Europe UAB safeguards your personal information and ensures its confidentiality. <br/>We do not disclose, rent, or sell your information to third parties.
          </>
        }
      />
      <PolicyArea/>
      <FooterFour />
    </Wrapper>
  );
}

