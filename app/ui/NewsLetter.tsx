"use client";
import { useState } from "react";
import { useFormik } from "formik";
import useToast from "@/app/ui/useToast";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
interface Errors {
  email?: string;
}

interface FormValues {
  email: string;
}

const validate = (value: FormValues) => {
  const errors: Errors = {};
  if (!value.email) {
    errors.email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.email)
  ) {
    errors.email = "invalid email address";
  }

  return errors;
};

export default function NewsLetter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { notifySuccess, notifyError } = useToast();
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_CONTACTUS_TEMPLATE_ID as string;
  const publicKey = process.env.NEXT_PUBLIC_KEY as string;

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      setIsSubmitting(true);

      emailjs.send(serviceId, templateId, values, publicKey).then(
        (result) => {
          notifySuccess(result.text);
          setIsSubmitting(false);
          formik.resetForm();
        },
        (error) => {
          notifyError(error.text);
          setIsSubmitting(false);
        }
      );
    },
  });

  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl font-semibold mb-2 text-center">
        Subscribe to Our Newsletter
      </h3>
      <p className="text-gray-300 mb-6 text-center">
        Stay updated with the latest in solar technology and energy solutions
      </p>

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col sm:flex-row gap-3 justify-between w-full "
      >
        {/* Email Field */}
        <div className="w-full sm:w-2/3">
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="block p-text font-medium text-background"
            >
              Email
            </label>
            {formik.touched.email && formik.errors.email ? (
              <p className="p-text text-error font-medium">
                {formik.errors.email}
              </p>
            ) : null}
          </div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className=" w-full flex-1 px-4 py-3 rounded-md bg-textColor text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-tertiary-white"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="w-full sm:w-1/3 sm:flex sm:items-end">
          <button
            type="submit"
            disabled={isSubmitting}
            value="Subscribe"
            className={`w-full cursor-pointer rounded-md bg-primary px-6 py-[13px]  font-medium text-background transition-all delay-300 ${
              isSubmitting ? "bg-foreground" : "bg-primary"
            } hover:bg-tertiary`}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}
