"use client";
import { useState } from "react";
import { useFormik } from "formik";
import useToast from "@/app/ui/useToast";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";

interface Errors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const validate = (value: FormValues) => {
  const errors: Errors = {};

  if (!value.name) {
    errors.name = "Name is required";
  } else if (!/^[a-zA-Z\s]+$/.test(value.name)) {
    errors.name = "Name should only contain letters and spaces";
  }

  if (!value.email) {
    errors.email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.email)
  ) {
    errors.email = "invalid email address";
  }
  if (!value.service) {
    errors.service = "Service is required";
  }

  if (!value.message) {
    errors.message = "Message is required";
  }
  return errors;
};
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { notifySuccess, notifyError } = useToast();
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_CONTACTUS_TEMPLATE_ID as string;
  const publicKey = process.env.NEXT_PUBLIC_KEY as string;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const formik = useFormik({
    initialValues: formData,
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
    <>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <div className="flex justify-between">
            <label
              htmlFor="name"
              className="block p-text font-medium text-textColor"
            >
              Name
            </label>
            {formik.touched.name && formik.errors.name ? (
              <p className="p-text text-error fron-medium">
                {formik.errors.name}
              </p>
            ) : null}
          </div>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.values.handleBlur}
            className="w-full p-3 border rounded-md focus:ring focus:ring-banner"
          />
        </div>
        {/* Email Field */}
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="block p-text font-medium text-textColor"
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
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-3 border rounded-md focus:ring focus:ring-banner"
          />
        </div>
        {/* Phone Field */}
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="phone"
              className="block p-text font-medium text-textColor"
            >
              Phone
            </label>
          </div>

          <input
            id="phone"
            name="phone"
            type="phone"
            placeholder="+254 716 783432  (Optional)"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="w-full p-3 border rounded-md focus:ring focus:ring-banner"
          />
        </div>
        {/* Services Field */}
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="service"
              className="block p-text font-medium text-textColor"
            >
              Services Categories
            </label>
            {formik.touched.service && formik.errors.service ? (
              <p className="p-text text-error font-medium">
                {formik.errors.service}
              </p>
            ) : null}
          </div>
          <select
            name="service"
            value={formik.values.service}
            onChange={formik.handleChange}
            className="w-full p-3 border rounded-md bg-white"
          >
            <option value="">Select a service</option>
            <option value="power-metering">Power Metering</option>
            <option value="electrical-design">Electrical Design</option>
            <option value="solar-water-heating">Solar Water Heating</option>
            <option value="solar-installation">Solar Installation</option>
            <option value="solar-water-pump">Solar Water Pump</option>
            <option value="electrical-installation">
              Electrical Installation
            </option>
            <option value="cctv-installation">CCTV Installation</option>
            <option value="electric-fence">Electric Fence</option>
            <option value="alarm-installation">Alarm Installation</option>
          </select>
        </div>

        {/* Message Field */}

        <div>
          <div className="flex justify-between">
            <label
              htmlFor="message"
              className="block p-text font-medium text-textColor"
            >
              Message
            </label>
            {formik.touched.message && formik.errors.message ? (
              <p className="p-text text-error font-medium">
                {formik.errors.message}
              </p>
            ) : null}
          </div>

          <textarea
            id="message"
            name="message"
            placeholder="Tell Us about any services you need"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="w-full px-3 py-4 border rounded-md focus:ring focus:ring-banner"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          value="Send"
          className={`w-full cursor-pointer rounded-md bg-primary p-3  font-medium text-background transition-all delay-300 ${
            isSubmitting ? "bg-foreground" : "bg-primary"
          } hover:bg-tertiary`}
        >
          {isSubmitting ? "Sending..." : "Send A Message"}
        </button>
        <ToastContainer />
      </form>
    </>
  );
}
