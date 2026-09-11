import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import useMagnetic from "../reactbits/hooks/useMagnetic";
import useSoundCue from "../reactbits/hooks/useSoundCue";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import Toast from "./ui/toast";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    open: false,
    message: "",
    type: "success",
  });
  const { play } = useSoundCue("notification");
  const { ref: submitButtonRef, style: magneticStyle } = useMagnetic({
    radius: 90,
    strength: 0.35,
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      play("notification");
      setToast({
        open: true,
        message: "Please fill in all fields before submitting.",
        type: "error",
      });
      return;
    }
    setLoading(true);

    try {
      // 1. Try backend API route (/api/contact)
      let response = null;
      try {
        response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        });
      } catch (err) {
        response = null;
      }

      // 2. Fallback to direct FormSubmit endpoint if API route is unavailable
      if (!response || !response.ok) {
        response = await fetch(
          "https://formsubmit.co/ajax/shubhameilish@gmail.com",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: form.name,
              email: form.email,
              message: form.message,
              _subject: `New Portfolio Message from ${form.name}`,
              _replyto: form.email,
              _captcha: "false",
              _template: "table",
            }),
          }
        );
      }

      const result = await response.json();

      if (
        result.message &&
        result.message.toLowerCase().includes("activation")
      ) {
        setLoading(false);
        play("notification");
        setToast({
          open: true,
          message:
            "Activation required: FormSubmit sent an 'Activate Form' confirmation email. Please check your inbox or spam folder and click activate.",
          type: "error",
        });
        return;
      }

      if (result.success === "true" || result.success === true || (response.ok && result.success !== "false" && result.success !== false)) {
        setLoading(false);
        play("success");
        setToast({
          open: true,
          message:
            "Thank you! Your message has been sent. I will get back to you as soon as possible.",
          type: "success",
        });
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Failed to send message.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Submission error:", error);
      play("error");
      setToast({
        open: true,
        message: error.message || "Ahh, something went wrong. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <>
      {toast.open && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, open: false })}
        />
      )}
      <div className="w-full min-h-screen">
        <h2 className="text-white text-center font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] px-4">
          Let's Work Together
        </h2>
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-6 lg:gap-10 overflow-hidden text-white px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] w-full xl:w-[40rem] bg-[#111522] p-4 sm:p-6 lg:p-8 rounded-2xl"
          >
            <p className={`text-[#8ec5ff] ${styles.sectionSubText}`}>
              Get in touch
            </p>
            <h3
              className={`${styles.sectionHeadText} text-[28px] sm:text-[32px] lg:text-[36px]`}
            >
              Contact.
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col gap-6 sm:gap-8"
              id="contact"
            >
              <label className="flex flex-col">
                <span className="font-medium text-[#8ec5ff] mb-2 sm:mb-4 text-sm sm:text-base">
                  Full name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-[#07080d] py-3 sm:py-4 px-4 sm:px-6 placeholder:text-[#fafafa8a] rounded-lg outline-none border-none font-medium text-sm sm:text-base w-full"
                />
              </label>
              <label className="flex flex-col">
                <span className="font-medium text-[#8ec5ff] mb-2 sm:mb-4 text-sm sm:text-base">
                  Email Address
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="bg-[#07080d] py-3 sm:py-4 px-4 sm:px-6 placeholder:text-[#fafafa8a] rounded-lg outline-none border-none font-medium text-sm sm:text-base w-full"
                />
              </label>
              <label className="flex flex-col">
                <span className="font-medium text-[#8ec5ff] mb-2 sm:mb-4 text-sm sm:text-base">
                  Your Message
                </span>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project,"
                  className="bg-[#07080d] py-3 sm:py-4 px-4 sm:px-6 placeholder:text-[#fafafa8a] rounded-lg outline-none border-none font-medium text-sm sm:text-base w-full resize-none"
                />
              </label>

              <button
                ref={submitButtonRef}
                type="submit"
                style={magneticStyle}
                className="bg-[#07080d] py-3 px-6 sm:px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-sm sm:text-base hover:bg-[#0a0b12] transition-colors duration-200"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 my-auto h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] w-full"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
