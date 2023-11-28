import React from 'react';
import Link from 'next/link';
const CategoryList = ({ subTitles }) => {

  console.log('değerler', subTitles)
  return (
    <>
      {
        subTitles.map((vals, i) =>
          <div className="row m-2" key={i}>
            <div className="col-6">
              <Link href={`/category/${vals.seo_name}`}>
                <span className="mt-10 hover:underline text-dark">
                  {vals.name}
                  {/* <small className="text-muted">({vals.active})</small> */}
                </span>
              </Link>
            </div>

          </div>
        )
      }
    </>
  )


}

CategoryList.defaultProps = {
  subTitles: [],
};
export default CategoryList;
