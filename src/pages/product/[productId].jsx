import { HeaderTwelve, FooterFour } from '@layout/index';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SEO from "@components/seo";


import { AiFillFileText, AiFillHome, AiFillMail } from "react-icons/ai";
import { BsFillPersonFill, BsCheckCircleFill } from "react-icons/bs";
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Image from 'next/image';
import pdflogo from "@assets/img/logo/pdficon.png";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function cleanData(data) {
  const cleanedMap = new Map();

  data.forEach((item) => {
    if (cleanedMap.has(item.parameter)) {
      const existingItem = cleanedMap.get(item.parameter);

      if (Array.isArray(existingItem.value)) {
        existingItem.value.push(...item.value);
      } else {
      }
    } else {
      cleanedMap.set(item.parameter, item);
    }
  });

  return Array.from(cleanedMap.values());
}

const ProductDetails = () => {
  const formRef = useRef(null);

  const MySwal = withReactContent(Swal)
  const [formErrors, setFormErrors] = useState({});
  const [stockText, setstockText] = useState("");
  const router = useRouter();
  const { productId } = router.query;
  // const [ProId, setProId] = useState();

  useEffect(() => {
    if (productId) {
      getProduct(productId)
      const lastDigit = productId.toString().slice(-1)
      const allowedDigits = ['1', '2', '3', '4', '5', '6', '7'];
      const isInStock = lastDigit && allowedDigits.includes(lastDigit);
      const stockTextx = isInStock ? 'In Stock' : '';
      setstockText(stockTextx);
    }

  }, [productId]);


  // productId kullanarak ürün verilerini al ve ayrıntıları görüntüle
  const [productData, setProductData] = useState();
  const [baskategori, setBaskategori] = useState("");
  const [rfqbutton, setRfqbutton] = useState("Submit RFQ");
  const [basurunid, setBasurunid] = useState("");
  const [catcat, setCatcat] = useState({ link: "", label: "-" });
  const [categoryName, setCategoryName] = useState({ link: "", label: "-" });

  const [basresim, setBasresim] = useState("");
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false)
  const [formData, setFormData] = useState({
    part_number: '',
    quantity: '',
    company_name: '',
    contact_name: '',
    email: '',
    message: '',
    product_name: ""
  });
  const validateForm = () => {
    const errors = {};

    // Perform validation for each field
    // if (formData.quantity.trim() === '') {
    //   errors.quantity = 'Quantity is required.';
    // } else {
    //   delete errors.quantity; // Remove the error for company_name if it's valid
    // }
    // if (formData.company_name.trim() === '') {
    //   errors.company_name = 'Company Name is required.';
    // } else {
    //   delete errors.company_name; // Remove the error for company_name if it's valid
    // }

    // if (formData.contact_name.trim() === '') {
    //   errors.contact_name = 'Contact Name is required.';
    // } else {
    //   delete errors.contact_name; // Remove the error for contact_name if it's valid
    // }

    if (formData.email.trim() === '') {
      errors.email = 'Email is required.';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email format.';
    } else {
      delete errors.email; // Remove the error for email if it's valid
    }

    // if (formData.message.trim() === '') {
    //   errors.message = 'Message is required.';
    // } else {
    //   delete errors.message; // Remove the error for message if it's valid
    // }


    setFormErrors(errors);

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };



  const getProduct = async (productId) => {
    try {
      if (productId) {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}products/get_single_product`, { productId });
        setFormData((prevFormData) => ({
          ...prevFormData,
          part_number: productId // 'productData[0].value' ile part_number'i güncelle
        }));
        // setCatcat({ link: "1", label: "2" })
        let coci = "";
        var myobj = "";
        const newStringx = response.data.product_data.replace(/"/g, '').replace(/'/g, '"');
        try {
          myobj = JSON.parse(newStringx);

        } catch (error) {
          coci = newStringx.replaceAll('" ', "");
          myobj = JSON.parse(coci);

        }
        const almaa = cleanData(myobj.parameters);
        myobj.parameters = almaa;
        setProductData(myobj);
        setCategoryName({ link: response.data.Cat_Link ?? "", label: response.data.Category })
        setCatcat({ link: response.data.SubCat_Link ?? "", label: response.data.SubCategory })
      }

    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Submit the form or perform further actions

      if (formData) {
        setRfqbutton("Waiting...")
        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}mailGonder/urun`, formData);
          if (response.data.islem === 'basarili') {
            setDisabledButton(false);
            setRfqbutton("Submit RFQ");
            setFormData((prevFormData) => ({
              ...prevFormData,
              quantity: "",
              company_name: "",
              contact_name: "",
              email: "",
              message: "",
            }));
            MySwal.fire({ html: 'Thank you! We have received your RFQ.<br>We will get back to you soon!' })
          } else {
            setShowAlert(false);
          }
        } catch (error) {
          console.error('Error:', error);
          setShowAlert(false);
        }

      } else {
        return;
      }
    } else {
      console.log('Form contains errors. Please fix them.');
    }
    // setIsFormSubmitted(true);


  };
  const isValidEmail = (email) => {
    // Burada geçerli bir e-posta adresini kontrol etmek için uygun bir işlev kullanmanız gerekecektir
    // Örneğin, bir regex veya harici bir kütüphane kullanabilirsiniz
    return /\S+@\S+\.\S+/.test(email);
  };
  let manci = "";
  const [yukseklik, setYukseklik] = useState(80);
  useEffect(() => {
    if (productData?.parameters) {
      productData?.parameters.map((albi) => {
        if (albi.parameter == "Part Number") {
          setBasurunid(albi.value)
        } else if (albi.parameter == "Category") {
          setBaskategori(albi.value[0].label.toString());
        } else if (albi.parameter == "Manufacturer") {
          if (Array.isArray(albi.value)) {
            manci = albi.value[0].label.replace(/\//g, '').replace(/[,.()&%?\/ ]/g, ' ').replace(/ {2,3}/g, ' ').replace(/\s+$/, '').replace(/ /g, '-').toString()

          } else {
            manci = "null";
          }
        }
      })
      if (productData.images.length === 0) {

        setYukseklik(80)
        setBasresim("https://api.zenkaeurope.com/app/resimler/linecard/" + manci + ".jpg")
      } else {
        setYukseklik(120)
        setBasresim(productData.images[0].src.replace("https://component-mart.hk/thumb/product", "https://api.zenkaeurope.com/app/resimler"))
      }

    }
  }, [productData]);
  return (
    <div>
      <HeaderTwelve />
      <SEO pageTitle={"Product Details"} />
      <div className='d-block d-sm-none'>
        <span className='pb-50'></span>
      </div>

      <div className="mx-5  mb-3" >
        <div style={{ paddingTop: 180 }}></div>

        <div style={{ height: "35px", backgroundColor: "#F0F0F0", marginTop: "-12px", marginLeft: "-50px", marginRight: "-48px", paddingTop: "1px" }}>
          <div className="mx-5">
            <h6 className='text-start mt-2'><a href={`${process.env.NEXT_PUBLIC_LOCAL}`}>Home</a> {">"} <a href={`${process.env.NEXT_PUBLIC_LOCAL}category/${categoryName.link}`}>{categoryName.label}</a> {">"} <a href={`${process.env.NEXT_PUBLIC_LOCAL}category-detail/${catcat.link}`}>{catcat.label}</a> {">"} {basurunid}</h6>
          </div>
        </div>

        <div className="row topspaceten">
          <div className=" col-sm-12 col-md-3  border-bottom border-top border-start sagbordeone">
            <div className="row text-center mt-2 p-2">
              <h4>{baskategori}</h4>
            </div>
            <div className="row border-top  justify-content-center">
              <Image alt='image'
                className='my-5'
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: `${yukseklik}px` }} src={basresim}></Image>
            </div>
            <div className="row border-top">
              <p className='p-3'>Images are for reference only.
                See Product Specifications for product details.
              </p>
            </div>
          </div>
          <div className="  col-sm-12 col-md-6  border">
            <div className="row border-bottom mt-2 p-2"><h4>DETAILS</h4></div>
            <div className="row p-2">
              <table className='table table-striped w-100 '>
                <tbody>
                  {productData && productData.parameters && productData.parameters?.map((cat, index) => {
                    if (cat.parameter == "Product Photo" || cat.parameter == "Quantity Available" || cat.parameter == "Manufacturer Standard Lead Time" || cat.parameter == "California Prop 65") {

                    } else {
                      if (cat.parameter == "Data sheet") {
                        return <tr key={index}>
                          <th>
                            Datasheet
                          </th>
                          <td style={{ textAlign: "left" }}>

                            <Link style={{ color: "#1e50ff" }} target="_blank" href={`${cat.value[0].href.replace("https://component-mart.hk/datasheets", "https://api.zenkaeurope.com/app/datasheet")}`}> <Image height={25} className='mr-10' src={pdflogo} alt="logo" /><b>{cat.value[0].label.toString()}</b></Link>
                          </td>
                        </tr>
                      } if (cat.parameter == "Category") {
                        return <tr key={index}>
                          <th>
                            {cat.parameter}
                          </th>
                          <td>
                            {cat.value[0].label.toString()}
                          </td>
                        </tr>
                      } else if (cat.parameter == "Manufacturer") {
                        return <tr key={index}>
                          <th>
                            {cat.parameter}
                          </th>
                          <td>
                            {
                              Array.isArray(cat.value) ? cat.value[0].label.toString() : cat.value
                            }
                          </td>
                        </tr>
                      } else {

                        return <tr key={index}>
                          <th>
                            {cat.parameter}
                          </th>
                          <td>
                            {cat.value.toString()}
                          </td>
                        </tr>

                      }
                    }
                  })}
                </tbody>
              </table>
              {/* <span className='pt-5 link-primary'>
                <a href={`${productData?.Datasheet?.[0]?.['Datasheet']}`}>
                  Datasheet
                </a>
              </span> */}
            </div>
          </div>
          <div className='col-sm-12 col-md-3 border mobiltableshort'>
            <div className="row">
              <form className='' onSubmit={handleSubmit} ref={formRef}>
                <div className="row">
                  <h4> <span className='mt-2 badge bg-success'>{stockText}</span></h4>
                  <div className="row  mt-2 p-2"><h4>REQUEST A QUOTE </h4></div>
                  <div className="col-12 col-sm-12 col-md-12">
                    {/* <label htmlFor="product-name" className="form-label">Part Number</label> */}
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text border-0" id="product-name"><AiFillFileText /></span>
                      <input type="text" className="form-control" placeholder="Product Name" disabled
                        value={basurunid} aria-label="product-name" aria-describedby="product-name" />

                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 mt-2">
                    {/* <label htmlFor="email" className="form-label mt-2">Quantity</label> */}
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text border-0" id="company-name"><AiFillHome /></span>
                      <input
                        type="text"
                        className={`form-control ${formErrors.quantity ? 'is-invalid' : ''}`}
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        placeholder="Quantity"
                        aria-label="quantity"
                        aria-describedby="quantity"
                      />
                    </div>
                    {formErrors.quantity && (
                      <div className="text-danger">{formErrors.quantity}</div>
                    )}
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 mt-2">
                    {/* <label htmlFor="email" className="form-label mt-2">Company Name</label> */}
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text border-0" id="company-name"><AiFillHome /></span>
                      <input
                        type="text"
                        className={`form-control ${formErrors.company_name ? 'is-invalid' : ''}`}
                        value={formData.company_name}
                        onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                        placeholder="Company Name"
                        aria-label="company-name"
                        aria-describedby="company-name"
                      />

                    </div>
                    {formErrors.company_name && (
                      <div className="text-danger">{formErrors.company_name}</div>
                    )}
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12 col-sm-12 col-md-12">
                    {/* <label htmlFor="contact-name" className="form-label">Contact Name</label> */}
                    <div className="input-group  flex-nowrap">
                      <span className="input-group-text  border-0" id="contact-name"><BsFillPersonFill /></span>
                      <input
                        type="text"
                        value={formData.contact_name}
                        className={`form-control ${formErrors.contact_name ? 'is-invalid' : ''}`}
                        onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                        placeholder="Contact Name"
                        aria-label="contact-name"
                        aria-describedby="contact-name" />

                    </div>
                    {formErrors.contact_name && (
                      <div className="text-danger">{formErrors.contact_name}</div>
                    )}
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 mt-2">
                    {/* <label htmlFor="email" className="form-label">E-mail</label> */}
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text border-0" id="email">
                        <AiFillMail />
                      </span>
                      <input
                        type="email"
                        className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your e-mail"
                        aria-label="email"
                        aria-describedby="email"
                      />
                    </div>
                    {formErrors.email && (
                      <div className="text-danger">{formErrors.email}</div>
                    )}
                  </div>
                  <div className='col-12 mt-2'>
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text border-0" id="message"><AiFillMail /></span>
                      <textarea type="text"
                        className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                        style={{ maxHeight: "80px" }}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please include part number and quantity or special requests if any." aria-label="message" aria-describedby="message" />

                    </div>
                    {formErrors.message && (
                      <div className="text-danger">{formErrors.message}</div>
                    )}
                  </div>
                  <div className=' d-grid gap-2 mt-3'>
                    <button type="submit" disabled={disabledButton} className='btn btn-success mb-2'>
                      {rfqbutton}
                    </button>
                  </div>
                </div>
                <div className="row">
                  <hr className="dotted-line "></hr>

                </div>
              </form>

            </div>
          </div>

        </div>

        {showAlert && (
          <div
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              transition: 'ease-in-out',
              backgroundColor: 'rgba(0, 0, 0, 0.2)', /* Arka plan rengi ve saydamlık */
              backdropFilter: 'blur(2px)', /* Bulanıklaştırma efekti */
              opacity: '2',
              transform: 'translateY(0)'
            }}
            className='d-flex justify-content-center align-items-center'
          >
            <div className="alert alert-success d-flex align-items-center" role="alert">
              <BsCheckCircleFill />
              <div className='ms-2'>
                Your message has been sent successfully.
              </div>
            </div>
          </div>
        )}
        {/* Diğer ürünlerin devamı */}
      </div>
      {/* <div className="container">
        Datasheet
        {productData && productData.Datasheet && productData.Datasheet?.map((val, index) => {

          <span >
            asd  {val}
          </span>


        })}
      </div> */}
      {/* Diğer ürün ayrıntıları */}
      <FooterFour />

    </div >
  );
};

export default ProductDetails;
