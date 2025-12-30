import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import contactConfig from "../constants/contactConfig";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.warning("Please fill in all fields.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setLoading(true);

    // EmailJS template variables - adjust these to match your EmailJS template
    const templateParams = {
      from_name: form.name,
      from_email: contactConfig.YOUR_EMAIL, // ✅ YOUR Gmail
      to_name: "Jayanth M",
      message: form.message,
      reply_to: form.email, // ✅ User email goes here
    };
    

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (response) => {
          setLoading(false);
          console.log("SUCCESS!", response.status, response.text);
          
          toast.success("Thank you! I will get back to you as soon as possible.", {
            position: "top-right",
            autoClose: 5000,
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("FAILED...", error);
          
          // More detailed error message
          let errorMessage = "Something went wrong. ";
          if (error.text) {
            errorMessage += error.text;
          } else if (error.status === 412) {
            errorMessage = "Template variables don't match. Please check your EmailJS template configuration.";
          } else {
            errorMessage += `Status: ${error.status || "Unknown"}`;
          }
          
          toast.error(
            <div>
              <div className="font-bold mb-1">Error sending message</div>
              <div className="text-sm">{errorMessage}</div>
              <div className="text-xs mt-2 opacity-75">
                Please contact me directly at {contactConfig.YOUR_EMAIL}
              </div>
            </div>,
            {
              position: "top-right",
              autoClose: 7000,
            }
          );
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-6 xs:gap-8 sm:gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-5 xs:p-6 sm:p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className="mt-3 text-secondary text-[13px] xs:text-[14px] sm:text-[15px] leading-relaxed">
          {contactConfig.description}
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 xs:mt-10 sm:mt-12 flex flex-col gap-6 xs:gap-7 sm:gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 xs:mb-4 text-[14px] xs:text-[15px] sm:text-base'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-3 xs:py-4 px-4 xs:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[14px] xs:text-base'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 xs:mb-4 text-[14px] xs:text-[15px] sm:text-base'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-3 xs:py-4 px-4 xs:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[14px] xs:text-base'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3 xs:mb-4 text-[14px] xs:text-[15px] sm:text-base'>Your Message</span>
            <textarea
              rows={6}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-3 xs:py-4 px-4 xs:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[14px] xs:text-base resize-none'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-2.5 xs:py-3 px-6 xs:px-8 rounded-xl outline-none w-full xs:w-fit text-white font-bold shadow-md shadow-primary text-[14px] xs:text-base'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
