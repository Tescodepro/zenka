import { Wrapper, HeaderTwelve, HeaderTwelveX, HeaderEleven, FooterFour } from "@layout/index";
import SEO from "@components/seo";
// import ShopHeroBanner from '@components/hero-banners/shop-hero-banner';
// import ShopCategory from '@components/shop/shop-category';
// import ShopProducts from '@components/shop/shop-products';
// import ProductFeature from '@components/features/product-feature';
// import CreativeBrands from '@components/brands/creative-brands';
// import ShopBanner from "@components/shop/shop-banner";
// import HomeSliderBanner from "@components/hero-banners/home-slider-banner";
import MySlider from "@components/hero-banners/MySlider";
// import HomeBlogs from "@components/blogs/home-blogs";
import StartUpBlogs from "@components/blogs/start-up-blogs";
import Industries from "@components/blogs/industries";
// import CarouselWithControls from "@elements/elements-carousel/carousel-with-controls";
import AgencyBrands from "@components/brands/agency-brands";
import AgencyCta from "@components/cta/agency-cta";
// import CategoryList from "@components/productCategory";


export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle={'Zenka Europe'} />
      {/* <HeaderEleven /> */}
      {/* <HeaderTwelve/> */}
      <HeaderTwelve />

      {/* <HomeSliderBanner/> */}
      <div style={{ paddingTop: 167 }}></div>
      <MySlider />
      {/* <ShopHeroBanner/> */}
      {/* <CategoryList /> */}
      {/* <ShopCategory/> */}
      {/* <ShopProducts/> */}
      {/* <ShopBanner/> */}
      {/* <ProductFeature/> */}
      {/* <ShopCta/> */}
      {/* <PhotographerBrands/> */}
      {/* <CarouselWithControls/>
      <CreativeBrands/> */}
      <AgencyBrands spacing={true} style_2={false} />
      <StartUpBlogs />
      <Industries />

      {/* <AgencyCta /> */}
      <FooterFour />
      {/* 
      <HomeAbout/>
      <HomeCounter/>
      <ServicesHome/>
      <HomeEvents/>
      <HomeTeams/>
      <HomeFaq/>
      <HomePortfolio/>
      <HomeTestimonial/>
      
      <Footer/> */}
    </Wrapper>
  )
}
