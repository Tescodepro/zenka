import {  FooterFour, HeaderTwelve, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import BreadcrumbFour from "@components/common/breadcrumb/breadcrumb-4";
import BlogPostboxArea from "@components/blogs/blog-postbox-area";


export default function Blogs() {
  return (
    <Wrapper>
      <SEO pageTitle={'Blogs'} />
      <HeaderTwelve header_solid={true} commonOffCanvas={true} />
      {/* <BreadcrumbFour title='Our Blog' subtitle='Blog' /> */}
      <div style={{ paddingTop: 80 }}></div>

      <BlogPostboxArea/>
      <FooterFour/>
    </Wrapper>
  )
}

