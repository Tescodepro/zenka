import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import dynamic from "next/dynamic";
// internal
import { DateTwo, QuoteTwo, UserTwo } from "@svg/index";
// import VideoModal from "@components/common/modals/modal-video";
import useModal from "@hooks/use-modal";
import Link from "next/link";

// image style
const image_style = {
  width: "100%",
  height: "100%",
};

const SingleBlogPostbox = ({ blog }) => {
  const {
    id,
    video,
    blog_quote,
    blog_audio,
    blog_slider,
    img,
    title,
    desc,
    text,
    // comments,
    date,
    author_name,
    audio_url,
    slider_images,
    // video_id,
  } = blog || {};
  // const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <React.Fragment>
      <article
        className={`blog__item-1 transition-3 mb-30`}
      >
        {!video && !blog_quote && !blog_audio && !blog_slider && (
          <div className="blog__thumb-7 w-img mb-25">
            <Link href={`blog-details/${id}`}>
              <Image src={img} alt="blog img" height={250}
                width={300}
                loading="eager" />
            </Link>
          </div>
        )}
        {video && (
          <div className="postbox__thumb postbox__video w-img p-relative">
            <Link href={`blog-details/${id}`}>
              <Image src={img} alt="blog img" style={image_style} />
            </Link>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => setIsVideoOpen(true)}
              className="play-btn pulse-btn popup-video"
            >
              <i className="fas fa-play"></i>
            </a>
          </div>
        )}
        {blog_quote && (
          <div className="postbox__quote postbox__quote-style-3 ">
            <div className="blog__grid-quote mb-30">
              <div className="blog__grid-quote-icon">
                <span>
                  <QuoteTwo />
                </span>
              </div>
              <div className="blog__grid-quote-content">
                <span>Social distancing</span>
                <p>{desc}...</p>
                <cite>Shahnewaz Sakil</cite>
              </div>
            </div>
          </div>
        )}
        {blog_audio && (
          <div className="postbox__thumb postbox__audio w-img p-relative">
            <iframe allow="autoplay" src={audio_url}></iframe>
          </div>
        )}
        {!blog_quote && (
          <div className="blog__content-7">
            {/* <div className="postbox__meta">
              <span>
                <a href="#">
                  <UserTwo />
                  {author_name}
                </a>
              </span>
              <span>
                <DateTwo />
                {date}
              </span>
              <span>
                <CommentThree />
                {comments}
              </span> 
            </div> */}
            <h3 className="">
              <Link href={`blog-details/${id}`}>{title}</Link>
            </h3>
            <div className="postbox__text">
              <p>{text.substring(0, 150) + "..."}</p>
            </div>
            <div className="blog__btn-5 d-flex  ">
              <Link href={`blog-details/${id}`} className="tp-link-btn-circle">
                Read More
                <span>
                  <i className="fa-regular fa-arrow-right"></i>
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>

          </div>
        )}
      </article>

      {/* video modal start */}
      {/* <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={video_id}
      /> */}
      {/* video modal end */}
    </React.Fragment>
  );
};

export default dynamic(() => Promise.resolve(SingleBlogPostbox), {
  ssr: false,
});
