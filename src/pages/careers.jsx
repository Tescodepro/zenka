import { HeaderTwelve, Wrapper, FooterFour } from "@layout/index";
import SEO from "@components/seo";
import SectionArea from "@components/section-area/section-area";
import CareersArea from "@components/terms-policy/careers-area";

export default function Careers() {
  return (
    <Wrapper>
      <SEO pageTitle={"Careers"} />
      <HeaderTwelve />
      <div style={{ paddingTop: 100 }}></div>

      <SectionArea
        title="Join us"
        subtitle={
          <>
            At Zenka Europe , we are building an international business team of amazing people who is ambitious, curious and eager to learn more..

            We are actively seeking for young talents to improve our dynamic teams.

            If you are ready to grow your career with us, we would love to meet you!

          </>
        }
      />
      <CareersArea />
      <FooterFour />
    </Wrapper>
  );
}

