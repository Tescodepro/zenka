import { HeaderTwelve, Wrapper, FooterFour } from "@layout/index";
import SEO from "@components/seo";
import SectionArea from "@components/section-area/section-area";
import CareersAreasearch from "@components/terms-policy/careers-area-search";

export default function AramaYoksa() {
  return (
    <Wrapper>
      <HeaderTwelve />
      <div style={{ paddingTop: 10 }}></div>
      <SectionArea subtitle={<></>} />
      <CareersAreasearch />
    </Wrapper>
  );
}
