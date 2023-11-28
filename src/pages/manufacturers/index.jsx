import { HeaderTwelve, Wrapper, FooterFour } from "@layout/index";
import SEO from "@components/seo";
import BreadcrumbOneMan from "@components/common/breadcrumb/breadcrumb-1-man";
import PortfolioGridCol from "@components/portfolios/portfolio-page-com/portfolio-grid-col";
import PortfolioTwoCta from "@components/cta/portfolio-2-cta";


export default function ShopDetails() {
  return (
    <Wrapper>
      <SEO pageTitle={'Manufacturers'} />
      <HeaderTwelve />
      <div style={{ paddingTop: 80 }}></div>

      <BreadcrumbOneMan />
      <PortfolioGridCol />
      <FooterFour />
    </Wrapper>
  )
}

