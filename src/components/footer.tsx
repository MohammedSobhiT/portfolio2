import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FooterProps {
  isDark: boolean;
}

const Footer = ({ isDark }: FooterProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, amount: 0.3 });

  const name = "Mohammed Sobhi.";
  
  // Animation variants for each character - coming from top
  const characterVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  } as const;

  return (
    <div
      id="footer"
      className={`py-20 px-6 ${isDark ? "bg-[#191917]" : "bg-[#f3f3f0]"} text-${
        isDark ? "white" : "[#191917]"
      } transition-colors duration-500`}
    >
      <div className="flex w-full md:flex-row flex-col gap-2 ">
        <div className="md:w-2/3 w-full">
          <h2 className="md:text-2xl text-xl mb-4">
            Let’s build something great together. <br />Reach out anytime.
          </h2>
          <div className="btns text-lg">
            <a
              href="mailto:mosobhi01@gmail.com"
              className={`inline-block py-3 px-8 mr-4 border ${
                isDark
                  ? "border-white bg-white text-[#191917] hover:bg-transparent hover:text-white"
                  : "border-[#191917] bg-[#191917] text-white hover:bg-transparent hover:text-[#191917]"
              } transition-colors duration-400`}
            >
              Email Me
            </a>
            <a
              href="https://wa.me/+201551438487"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block py-3 px-8 border ${
                isDark
                  ? "border-white hover:bg-white hover:text-[#191917]"
                  : "border-[#191917] hover:bg-[#191917] hover:text-white"
              } bg-transparent ${
                isDark ? "text-white" : "text-[#191917]"
              } transition-colors duration-400`}
            >
              WhatsApp
            </a>
          </div>
          <p className="mt-8 md:w-xl mb-16">
            Have a project in mind or need a front-end developer?
            <br />
            I’m open to discussing ideas, solving problems, and creating clean,
            scalable solutions.
          </p>
        </div>
        <div className="flex gap-24 md:w-1/3 w-full">
          <div>
            <h3 className="mb-4">Quick Links:</h3>
            <ul className="flex flex-col gap-4">
              {["Home", "About", "Skills", "Work"].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-300 ease-out"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4">Socials:</h3>
            <ul className="flex flex-col gap-4">
              {[
                { name: "GitHub", url: "https://github.com/MohammedSobhiT" },
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/mohammed-sobhi/",
                },
              ].map((social, i) => (
                <motion.li
                  key={social.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-300 ease-out"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full mt-16">
        <h1
          ref={textRef}
          className={`md:text-[11rem] text-4xl leading-none break-inside-avoid overflow-hidden ${
            isDark ? "text-white" : "text-[#191917]"
          }`}
        >
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={characterVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
        <p className=" text-sm mt-4">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;