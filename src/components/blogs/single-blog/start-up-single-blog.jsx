import Image from "next/image";
import Link from "next/link";
import React from "react";

const StartUpSingleBlog = ({ blog }) => {
  const {
    // id,
    img,
    date,
    // comment,
    title,
    text,
    // author_img,
    // author_name,
    tag,
    // see,
  } = blog || {};
  return (
    <div className="blog__item-7 transition-3 white-bg mb-30">
      <div className="blog__thumb-7 w-img mb-25">
        <Link href={`blog-details/${blog.id}`}>
          <Image
            src={img}
            alt="image"
            height={250}
            width={300}
            loading="eager"
          // style={{ width: "100%", }}
          />
        </Link>
      </div>
      <div className="blog__content-7">
        {/* <div className="blog__content-top-7 d-flex align-items-center">
          <div className="blog__tag-7">
            <a href="#">{tag}</a>
          </div>
          <div className="blog__meta-7">
            <span>
              <i className="fa-regular fa-clock"></i> {date}{" "}
            </span>
          </div>
        </div> */}
        <h4 className="">
          <Link href={`blog-details/${blog.id}`}>{title}</Link>
        </h4>
        <p>
          {text.substring(0, 150) + "..."}
        </p>
        <div className="blog__content-bottom-7 d-flex align-items-center justify-content-between">
          <div className="blog__meta-author d-flex align-items-center">
            {/* <div className="blog__meta-author-thumb">
              <a href="#">
                <Image src={author_img} alt="user" />
              </a>
            </div> */}

          </div>
          <div className="blog__btn-5">
            <Link href={`blog-details/${blog.id}`} className="tp-link-btn-circle">
              Read More
              <span>
                <i className="fa-regular fa-arrow-right"></i>
                <i className="fa-regular fa-arrow-right"></i>
              </span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StartUpSingleBlog;
