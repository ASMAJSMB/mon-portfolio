import React, { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { useInView } from "react-intersection-observer";

function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true });

  // Détection mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const blurClass = isMobile ? "" : "backdrop-blur-xl";
  const shadowClass = isMobile ? "shadow-md" : "shadow-2xl";

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 px-6 max-w-6xl mx-auto bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 overflow-hidden"
      aria-labelledby="contact-title"
    >
      <div className="text-center mb-14 text-white dark:text-gray-100">
        <h2
          id="contact-title"
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-indigo-200 dark:from-gray-100 dark:to-indigo-300 bg-clip-text text-transparent font-poppins"
        >
          Contact
        </h2>
        <p className="text-white/90 dark:text-gray-300">
          Une opportunité, un projet ou une alternance ? Contactez-moi facilement via les informations ci-dessous.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className={`max-w-xl mx-auto ${blurClass} rounded-3xl ${shadowClass} p-10 border border-white/20 dark:border-gray-700 bg-white/10 dark:bg-gray-800/50`}
      >
        <ul className="space-y-6 text-gray-700 dark:text-gray-300 text-lg">
          <li className="flex items-center gap-4">
            <AiOutlineMail className="text-indigo-600 dark:text-indigo-400 text-2xl" />
            <a
              href="mailto:haddadasa006@gmail.com"
              className="hover:underline text-gray-900 dark:text-gray-100 transition"
              data-tooltip-id="email-tooltip"
              data-tooltip-content="Cliquez pour envoyer un email"
              aria-label="Envoyer un email à Asma Haddad"
            >
              haddadasa006@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-4">
            <AiOutlinePhone className="text-indigo-600 dark:text-indigo-400 text-2xl" />
            <a
              href="tel:+33759265666"
              className="hover:underline text-gray-900 dark:text-gray-100 transition"
              data-tooltip-id="phone-tooltip"
              data-tooltip-content="Cliquez pour appeler"
              aria-label="Appeler Asma Haddad"
            >
              +33 7 59 26 56 66
            </a>
          </li>
          <li className="flex items-center gap-4">
            <FaLinkedin className="text-blue-700 dark:text-blue-500 text-2xl hover:text-blue-500 dark:hover:text-blue-400 transition" />
            <a
              href="https://www.linkedin.com/in/asma-haddad-a869b5334/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-900 dark:text-gray-100 transition"
              data-tooltip-id="linkedin-tooltip"
              data-tooltip-content="Voir mon profil LinkedIn"
              aria-label="Profil LinkedIn d'Asma Haddad"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-4">
            <FaGithub className="text-gray-900 dark:text-gray-100 text-2xl hover:text-gray-700 dark:hover:text-gray-300 transition" />
            <a
              href="https://github.com/ASMAJSMB"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-900 dark:text-gray-100 transition"
              data-tooltip-id="github-tooltip"
              data-tooltip-content="Voir mes projets GitHub"
              aria-label="Profil GitHub d'Asma Haddad"
            >
              GitHub
            </a>
          </li>
          <li className="flex items-center gap-4">
            <FaInstagram className="text-pink-500 dark:text-pink-400 text-2xl hover:text-pink-400 dark:hover:text-pink-300 transition" />
            <a
              href="https://www.instagram.com/aasma_hd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-900 dark:text-gray-100 transition"
              data-tooltip-id="instagram-tooltip"
              data-tooltip-content="Suivez-moi sur Instagram"
              aria-label="Profil Instagram d'Asma Haddad"
            >
              Instagram
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Tooltips */}
      <Tooltip id="email-tooltip" place="top" effect="solid" />
      <Tooltip id="phone-tooltip" place="top" effect="solid" />
      <Tooltip id="linkedin-tooltip" place="top" effect="solid" />
      <Tooltip id="github-tooltip" place="top" effect="solid" />
      <Tooltip id="instagram-tooltip" place="top" effect="solid" />
    </section>
  );
}

export default Contact;