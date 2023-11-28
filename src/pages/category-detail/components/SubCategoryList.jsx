import React from 'react';
import Link from 'next/link';
const SubCategoryList = ({ subTitles }) => {
  const renderSubCategories = () => {
    const subCategories = [];

    for (let i = 0; i < subTitles.length; i += 2) {
      const subCategory1 = subTitles[i];
      const subCategory2 = subTitles[i + 1];

      const subCategoryElement = (
        <div className="row m-2" key={i}>
          <div className="col-6">
            <Link href={`/category_detail/${subCategory1.title.slice(0, -1).toLowerCase().replace(/ /g, '-')}`}>
              <span className="mt-10 hover:underline text-dark">
                {subCategory1.title} <small className="text-muted">({subCategory1.count})</small>
              </span>
            </Link>
          </div>
          {subCategory2 && (
            <div className="col-6">
              <Link href={`/category_detail/${subCategory2.title.slice(0, -1).toLowerCase().replace(/ /g, '-').replace(/,/g, '')}`}>
                <span className="mt-10 hover:underline text-dark">
                  {subCategory2.title} <small className="text-muted">({subCategory2.count})</small>
                </span>
              </Link>
            </div>
          )}
        </div>
      );

      subCategories.push(subCategoryElement);
    }

    return subCategories;
  };

  return <div className="container">{renderSubCategories()}</div>;
};

SubCategoryList.defaultProps = {
  subTitles: []
};
export default SubCategoryList;
