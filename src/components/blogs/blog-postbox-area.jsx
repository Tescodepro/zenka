import React, { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
// internal
// import BlogSidebar from "@components/common/sidebar/blog-sidebar";
import blog_data from "@data/blog-data";
// import { CommentThree, DateTwo, NextArrowTwo, PrevArrowTwo, QuoteTwo, UserTwo } from "@svg/index";
import SingleBlogPostbox from "./single-blog/single-blog-postbox";
import Pagination from "@ui/Pagination";

// blog item
const blog_items = blog_data.filter((blog) => blog);

const BlogPostboxArea = () => {
  const itemsPerPage = 6; // Number of items to display per page
  const totalPages = Math.ceil(blog_items.length / itemsPerPage); // Calculate total number of pages

  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const visibleItems = blog_items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage); // Items to display on the current page

  const handlePageChange = (page) => {
    setCurrentPage(page); // Update the current page
  };

  return (
    <>
      <section className="postbox__area grey-bg-4 pt-120 pb-120">
        <div className="container">
          <div className=" justify-content-center ">
            <div className="postbox__wrapper row">
              {visibleItems.map((blog) => (
                <div key={blog.id} className="col-xxl-4 col-lg-4 col-md-6">
                  <SingleBlogPostbox key={blog.id} blog={blog} />
                </div>
              ))}
              <div className="tp-pagination tp-pagination-style-2 mt-20">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
              </div>
            </div>
            <div className="col-xxl-4 col-lg-4">
              {/* sidebar start */}
              {/* <BlogSidebar /> */}
              {/* sidebar end */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostboxArea;
