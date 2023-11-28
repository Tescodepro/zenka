import { useRouter } from "next/router";
// internal
import { FooterFour, HeaderTwelve, Wrapper } from "@layout/index";
import SEO from "@components/seo";
// import BreadcrumbSix from "@components/common/breadcrumb/breadcrumb-6";
import BlogDetailsArea from "@components/blogs/blog-details/blog-details-area";
import blog_data from "@data/blog-data";

export default function BlogDetails() {
  const router = useRouter();
  const { blogId } = router.query;
  const single_blog = blog_data.find(
    (item) => Number(item.id) === Number(blogId)
  );
  return (
    <Wrapper>
      <SEO pageTitle={"Blog Details"} />
      <HeaderTwelve header_solid={true} commonOffCanvas={true} />
      {/* <BreadcrumbSix {...single_blog} /> */}
      <div style={{ paddingTop: 100 }}></div>

      <BlogDetailsArea blog={single_blog} />
      <FooterFour />
    </Wrapper>
  );
}


export async function getStaticPaths() {
  const paths = blog_data.map((blog) => {
    return {
      params: {
        blogId: `${blog.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}