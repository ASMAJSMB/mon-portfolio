import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative py-8 px-6 max-w-6xl mx-auto bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-100 text-center border-t border-gray-700 dark:border-gray-600 overflow-hidden">
      {/* Étoiles flottantes pour touche créative */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-4 right-4 text-yellow-400 text-2xl"
      >
        ⭐
      </motion.div>
      <div className="max-w-4xl mx-auto">
        <p className="mb-4 text-gray-300 dark:text-gray-400">
          Merci d'avoir visité mon portfolio ! N'hésitez pas à me contacter pour des collaborations.
        </p>
        <div className="flex justify-center gap-6 mb-4">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 360 }}
            href="https://github.com/ASMAJSMB"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 dark:hover:text-yellow-300 transition text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 360 }}
            href="https://www.linkedin.com/in/asma-haddad-a869b5334/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 dark:hover:text-yellow-300 transition text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 360 }}
            href="https://www.instagram.com/aasma_hd/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 dark:hover:text-yellow-300 transition text-2xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </motion.a>
        </div>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          Fait avec <FaHeart className="inline text-red-500 dark:text-red-400 animate-pulse" /> par Asma Haddad © 2024-2026
        </p>
      </div>
    </footer>
  );
}

export default Footer;