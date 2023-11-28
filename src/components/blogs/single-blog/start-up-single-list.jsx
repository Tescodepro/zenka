import Image from "next/image";
import Link from "next/link";
import React from "react";


const StartUpSingleBlog = ({ blog }) => {
  const {
    id, isim, resim
  } = blog || {};
  return (
    <div className="transition-3 white-bg mb-30">
      <div className="w-img mb-25">
        <Image
          src={resim}
          alt="image"
          height={250}
          width={300}
          loading="eager"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="blog__content-7 cizgiler" >
        <h4 className="text-center" style={{ color: "#4eba65", padding: "5px" }}>
          {isim}
        </h4>
      </div>
    </div>
  );
};

export default StartUpSingleBlog;
