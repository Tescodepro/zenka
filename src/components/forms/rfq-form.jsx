import React, { useState } from "react";
import { useFormik } from "formik";
// internal
import { BsFillPersonFill, BsCheckCircleFill } from "react-icons/bs";
import * as Yup from 'yup';
import { contact_schema } from "@utils/validation-schema";
import ErrorMsg from "./error-msg";
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const RfqForm = ({ style_2 = false }) => {
  const MySwal = withReactContent(Swal)

  const [showAlert, setShowAlert] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false)
  const [rfqbutton, setRfqbutton] = useState("Submit RFQ");

  // use formik

  const validationSchema = Yup.object().shape({
    // contact_name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    part_number: Yup.string().required("Part Number is required"),
    // manufacturer: Yup.string().required("Manufacturer is required"),
    // description: Yup.string().required("Description is required"),
    // quantity: Yup.number().required("Quantity is required"),
    // message: Yup.string().required("Message is required"),
  });
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        contact_name: "",
        email: "",
        part_number: '',
        manufacturer: '',
        description: '',
        quantity: '',
        // phone: "",
        // company: "",
        message: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values, { resetForm }) => {
        if (values) {
          if (values) {
            setRfqbutton("Waiting...")
            try {
              const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}mailGonder/urun`, values);
              console.log("11111", response.data);
              if (response.data.islem === 'basarili') {
                setRfqbutton("Submit RFQ");
                setDisabledButton(false);

                MySwal.fire({ html: 'Thank you! We have received your RFQ.<br>We will get back to you soon!' })
                resetForm();

                // setShowAlert(true);
                // setTimeout(() => { setShowAlert(false); }, [2000])

                // 5 saniye sonra alert'ı kapat

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
        //CONTACT İÇİN ENDPOINT ALANI
        resetForm();
      },
    });

  return (
    <div className="container">
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="row">

          <div className="col-md-6">
            <div className="contact__input-2">
              <input
                name="part_number"
                value={values.part_number}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Part Number"
                id="part_number"
              />
              {touched.part_number && <ErrorMsg error={errors.part_number} />}
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact__input-2">
              <input
                name="manufacturer"
                value={values.manufacturer}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Manufacturer"
                id="manufacturer"
              />
              {touched.manufacturer && <ErrorMsg error={errors.manufacturer} />}
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact__input-2">
              <input
                name="quantity"
                value={values.quantity}
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                placeholder="Quantity"
                id="quantity"
              />
              {touched.quantity && <ErrorMsg error={errors.quantity} />}
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact__input-2">
              <input
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Description"
                id="description"
              />
              {touched.description && <ErrorMsg error={errors.description} />}
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact__input-2">
              <input
                name="contact_name"
                value={values.contact_name}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Enter your name"
                id="contact_name"
              />
              {touched.contact_name && <ErrorMsg error={errors.contact_name} />}
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact__input-2">
              <input
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeholder="Enter your email"
                id="email"
              />
              {touched.email && <ErrorMsg error={errors.email} />}
            </div>
          </div>

          <div className="col-md-12">
            <div className="contact__input-2">
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                id="message"
                placeholder="Your message"
              ></textarea>
              {touched.message && <ErrorMsg error={errors.message} />}
            </div>
          </div>
          <div className="col-md-12">


          </div>
          <div className="col-md-5">
            <div className="contact__btn-2">
              <button type="submit" className="btn btn-success rounded p-3">
                {rfqbutton}
              </button>
            </div>
          </div>
          {style_2 && (
            <div className="col-md-7">
              <div className="fw-normal float-md-end">
                <span>Email Us</span>
                <p>
                  <a className="fw-bolder text-success" href="mailto:info@zenkaeurope.com">
                    info@zenkaeurope.com
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </form>
      {showAlert && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            transition: 'ease-in-out',
            backgroundColor: 'rgba(0, 0, 0, 0.3)', /* Arka plan rengi ve saydamlık */
            backdropFilter: 'blur(3px)', /* Bulanıklaştırma efekti */
            opacity: '3',
            transform: 'translateY(0)'
          }}
          className='d-flex justify-content-center align-items-center'
        >
          <div className="alert d alert-success " role="alert">
            <BsCheckCircleFill size={25} />
            <div className='ms-2 fw-bold h4 mt-2  p-2'>
              Your message has been sent successfully.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RfqForm;
