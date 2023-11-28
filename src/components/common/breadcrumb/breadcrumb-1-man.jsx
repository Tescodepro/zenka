import React from "react";
// internal
import bg from '@assets/img/breadcrumb/male-worker-factory.jpg';

const BreadcrumbOneMan = () => {
  return (
    <section className="breadcrumb__area breadcrumb__style-5 p-relative include-bg pt-170 pb-110 blue-bg">
      <div
        className="breadcrumb__bg bg-luminosity include-bg"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-8">
            <div className="breadcrumb__content breadcrumb__content-2 p-relative z-index-1">
              <h3 className="breadcrumb__title">
                Manufacturers
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbOneMan;
