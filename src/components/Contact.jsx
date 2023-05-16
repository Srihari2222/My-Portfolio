import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github } from "../assets";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./computer.css";

const Contact = () => {
  const [alertbox,setAlert]=useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });


  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleRedirect = () => {
    alert("If you phase any problem in redirecting of the url, please install MailTo extension in the chrome Extensions from https://chrome.google.com › detail › mailto-for-gmail")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.email==="" || form.message==="" || form.name==="null")
    {
      alert("Ahh you missed something.");
      return ;
    }
    setLoading(true);
    
    
    emailjs
      .send('service_2tswy2a',
        'template_mplgi1a',
        {
          from_name: form.name,
          to_name: "Sri Hari",
          from_email: form.email,
          to_email: "kataresrihari@gmail.com",
          message: form.message,
        },
        'iewGNwR0k6wwGBqxd'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`${window.innerWidth>768?"":"mt-20"} xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl p-3'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          method="POST" data-netlify="true"
          target="_blank"
          name="contact"
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <div className="flex justify-center" style={{gap:"10px"}}>
          <motion.a whileHover={{scale:"1.25"}} href="https://www.linkedin.com/in/sri-hari-katare-324633222/" target="_blank" title="linkedin">
          <FontAwesomeIcon className="contact-logo" icon={faLinkedin} size="2x"/>
          </motion.a>
          <motion.a whileHover={{scale:"1.25"}} href="https://github.com/Srihari2222" target="_blank" title="github">
          <FontAwesomeIcon className="contact-logo" icon={faGithub} size="2x"/>
          </motion.a>
          <motion.a whileHover={{scale:"1.25"}} onClick={handleRedirect} href="mailto:kataresrihari@gmail.com" title="kataresrihari@gmail.com" >
            <FontAwesomeIcon className="contact-logo" icon={faEnvelope} size="2x"/>
          </motion.a>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
