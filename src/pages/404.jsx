// external
import Link from "next/link";
// internal
import { FooterFour, FooterSix, HeaderTwelve, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import { ArrowRightFive, ErrorSvg } from "@svg/index";
import AramaYoksa from "./search/components/aramayoksa";

export default function ErrorPage() {
  return (
    <Wrapper>
      <SEO pageTitle={"Error Page"} />
      <HeaderTwelve />
      {/* error area start */}
      <AramaYoksa />
      {/* error area end */}
      <FooterFour />
    </Wrapper>
  );
}
