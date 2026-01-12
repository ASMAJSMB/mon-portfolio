import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"; // Email et téléphone
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Réseaux sociaux

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-4 scroll-mt-40 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
    >
      {/* TITRE */}
      <div className="text-center mb-14 text-white">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-white/90">
         Une opportunité, un projet ou une alternance ? 
          Contactez-moi facilement via les informations ci-dessous.
        </p>
      </div>

      {/* CARTE */}
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <ul className="space-y-6 text-gray-700 text-lg">

          {/* EMAIL */}
          <li className="flex items-center gap-4">
            <AiOutlineMail className="text-indigo-600 text-2xl" />
            <a
              href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSBnqHwhlHSZZWsMVBCdhKMHQWXnfFmcJJgpDDtNncJVjTFGwDpjvnKTZKRdXwWGXqjpKVzj"
              className="hover:underline text-gray-900"
            >
              haddadasa006@gmail.com
            </a>
          </li>

          {/* TÉLÉPHONE */}
          <li className="flex items-center gap-4">
            <AiOutlinePhone className="text-indigo-600 text-2xl" />
            <a
              href="tel:+33759265666"
              className="hover:underline text-gray-900"
            >
              +33 7 59 26 56 66
            </a>
          </li>

          {/* LinkedIn */}
          <li className="flex items-center gap-4">
            <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-500 transition" />
            <a
              href="https://www.linkedin.com/in/asma-haddad-a869b5334/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>

          {/* GitHub */}
          <li className="flex items-center gap-4">
            <FaGithub className="text-gray-900 text-2xl hover:text-gray-700 transition" />
            <a
              href="https://github.com/ASMAJSMB"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </li>

          {/* Instagram */}
          <li className="flex items-center gap-4">
            <FaInstagram className="text-pink-500 text-2xl hover:text-pink-400 transition" />
            <a
              href="https://www.instagram.com/aasma_hd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
             Instagram
            </a>
          </li>

        </ul>
      </div>
    </section>
  );
}

export default Contact;
