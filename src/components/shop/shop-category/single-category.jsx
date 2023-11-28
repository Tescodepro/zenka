import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router';
import cate_7 from "@assets/img/product/category/circuits.png";
const SingleCategory = ({ item }) => {
  // console.log('asdasdasdasd',cate_7)
  // const router = useRouter();
  return (
    <div className="product__category-item mb-10 text-center">
      <div className="product__category-content">
        <h3 className="product__category-title">
        {/* href={`/category/${item.seo_name}`} */}
          <Link href={`/category/${item.seo_name}`}>{item.name}</Link>
        </h3>
      </div>
      <div className="product__category-thumb w-img">
        <Link
          href={`/category/${item.seo_name}`}
        >

          <Image
            src={cate_7}
            alt="image"
            style={{ width: "50%", height: "50%" }}
          />
        </Link>
      </div>

    </div>
  );
};

export default SingleCategory;
