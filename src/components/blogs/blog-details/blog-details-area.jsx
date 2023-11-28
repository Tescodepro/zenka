'use client'
import React from "react";
import Image from "next/image";
// internal
// import BlogSidebar from "@components/common/sidebar/blog-sidebar";
import blog_data from "@data/blog-data";
// import SingleGridItem from "../single-blog/single-grid-item";
// import CommentArea from "./comment-area";
// import { QuoteThree } from "@svg/index";
import blog_img from "@assets/img/blog/blog-big-1.jpg";
import author from "@assets/img/users/user-12.jpg";
// import postbox_img from "@assets/img/blog/details/blog-details-1.jpg";
// import PostNavigation from "./post-navigation";
// import PostShareWrapper from "./post-share-wrapper";
// import PostAuthor from "./post-author";
import SingleMetaItem from "./single-meta-item";


// blog data
const blog_items = blog_data.filter((blog) => blog.blog_grid).slice(0, 2);

const BlogDetailsArea = ({ blog }) => {
  return (
    <section className="postbox__area grey-bg-4 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="postbox__wrapper">
              <div className="postbox__top">
                <div className="postbox__thumb m-img mb-55">
                  <Image src={blog.img.src} width={0}
                    height={0}
                    style={{ width: '100%', height: '380px', objectFit: "cover" }} alt="blog img" />
                </div>
              </div>
              <div className="postbox__main">
                <div className="row container">
                  <div className="col-lg-12">
                    <div className="postbox__main-wrapper">
                      <div className="postbox__details-content-wrapper">
                        <h2>{blog.title}</h2>
                        <p>
                          {blog.text}
                        </p>
                        {/* <div className="postbox__img m-img mt-50 mb-45">
                          <Image src={postbox_img} alt="img" />
                          <h5 className="postbox__img-caption">
                            Image by <a href="#">@example01</a>
                          </h5>
                        </div> */}


                        {/* 
                        <div className="postbox__quote">
                          <blockquote>
                            <div className="postbox__quote-icon">
                              <span>
                                <QuoteThree />
                              </span>
                            </div>
                            <p>
                              “I try as much as possible to give you a great
                              basic product and what comes out, I feel, is
                              really amazing.”
                            </p>
                          </blockquote>
                        </div> */}

                        {/* <div className="postbox__features">
                          <h4 className="postbox__features-title">
                            Learning from failure
                          </h4>
                          <p>
                            The European languages are members of the same
                            family. Their separate existence is a myth. For
                            science europe uses the same vocabulary.{" "}
                          </p>

                          <ul>
                            <li>Get yourself comfortable.</li>
                            <li>
                              Manage your workspace and organize your desk.
                            </li>
                            <li>Keep In touch with your co-workers.</li>
                          </ul>
                        </div> */}

                      </div>
                      {/* navigation start */}
                      {/* <PostNavigation /> */}
                      {/* navigation end */}

                      {/* share wrapper start */}
                      {/* <PostShareWrapper /> */}
                      {/* share wrapper end */}
                      {/* <div className="postbox__author d-sm-flex align-items-start white-bg mb-95"> */}
                      {/* post author */}
                      {/* <PostAuthor /> */}
                      {/* </div> */}

                      <div className="postbox__related mb-65">


                        {/* <div className="row">
                          {blog_items.map((blog) => (
                            <div
                              key={blog.id}
                              className="col-xl-6 col-lg-12 col-md-6"
                            >
                              <SingleGridItem {...blog} />
                            </div>
                          ))}
                        </div> */}
                      </div>
                      {/* comments */}
                      <div className="postbox__comment-wrapper">
                        {/* comment area  start */}
                        {/* <CommentArea /> */}
                        {/* comment area  end */}
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-4"> */}
                  {/* <BlogSidebar /> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsArea;
