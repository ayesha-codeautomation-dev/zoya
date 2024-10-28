// ContactSection.jsx
"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Email must be a valid email")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address.")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const ContactSection = () => {
  const [uploading, setUploading] = useState(false);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema, // Apply the validation schema
    onSubmit: async (values, { resetForm }) => {
      setUploading(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message,
          }),
        });

        if (response.ok) {
          resetForm(); // Reset form after successful submission
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setUploading(false);
      }
    },
  });

  return (
    <div className=" bg-black ">
        <div className="flex overflow-hidden flex-wrap mx-auto max-w-[1400px] gap-10 items-center px-32 py-40 max-md:px-5 max-md:py-24 ">
      <div className="flex flex-col grow shrink self-stretch my-auto  min-w-[240px] w-[503px] max-md:max-w-full ">
        <div className="flex flex-col justify-center p-12 w-full rounded-sm border border-solid backdrop-blur-[15px] bg-white bg-opacity-10 border-white border-opacity-10 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full text-white max-md:max-w-full">
            <div className="text-sm font-bold tracking-widest leading-relaxed uppercase">
              Contact
            </div>
            <div className="mt-2 text-4xl leading-10 max-md:max-w-full">
              Let’s <span className="text-pink-700">Connect</span> Over a{" "}
              <span className="text-yellow-500">Cup of Coffee!</span>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col mt-8 w-full text-sm tracking-widest leading-relaxed text-orange-200 uppercase max-md:max-w-full"
          >
            <div className="px-6 py-4 w-full whitespace-nowrap rounded-sm border border-solid bg-white bg-opacity-10 border-white border-opacity-10 max-md:px-5 max-md:max-w-full">
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-2 mt-1 bg-transparent"
              />
              {errors.name && touched.name && (
                <div className="text-red-500 text-xs normal-case">{errors.name}</div>
              )}
            </div>

            <div className="px-6 py-4 mt-4 w-full whitespace-nowrap rounded-sm border border-solid bg-white bg-opacity-10 border-white border-opacity-10 max-md:px-5 max-md:max-w-full">
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-2 mt-1 bg-transparent"
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-xs normal-case">{errors.email}</div>
              )}
            </div>

            <div className="px-6 pt-4 pb-10 mt-4 w-full whitespace-nowrap rounded-sm border border-solid bg-white bg-opacity-10 border-white border-opacity-10 min-h-[200px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
              <textarea
                id="message"
                placeholder="Message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-2 mt-1 bg-transparent"
                rows={5}
              />
            </div>

            <button
              type="submit"
              disabled={uploading}
              className="gap-2 self-stretch px-4 py-2.5 mt-4 w-full font-semibold text-white bg-pink-700 rounded-sm max-md:max-w-full"
            >
              {uploading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/3686a7410d843d0469ea7b11b3efc9c7fa5609f8597b4041377bca1c8e270acd?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/3686a7410d843d0469ea7b11b3efc9c7fa5609f8597b4041377bca1c8e270acd?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/3686a7410d843d0469ea7b11b3efc9c7fa5609f8597b4041377bca1c8e270acd?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/3686a7410d843d0469ea7b11b3efc9c7fa5609f8597b4041377bca1c8e270acd?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/3686a7410d843d0469ea7b11b3efc9c7fa5609f8597b4041377bca1c8e270acd?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=1200 1200w"
        className="object-contain grow shrink self-stretch my-auto aspect-[0.86] min-w-[240px] w-[387px] max-md:max-w-full"
      />
    </div>
    </div>
  );
};

export default ContactSection;
