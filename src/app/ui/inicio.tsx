"use client";

import Image from "next/image";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import imagenFran from "../../../public/fgd-removebg-preview.png";
import { motion } from "framer-motion"

export default function Inicio() {
  return (
    <div className="text-center p-10 min-h-screen" id="inicio-id">
      {/* Nombre */}
      <h2 className="text-5xl py-2 font-medium text-blue-900">Fran Gallego</h2>
      {/* Ocupacion */}
      <motion.div
        animate={{ x: [0, 300, 0, -300, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <h3 className="text-2xl py-2">Desarrollador Web</h3>
      </motion.div>
      {/* Un poco de informacion */}
      <p className="text-md py-5 leading-8 text-gray-800">
        Desarrollador web apasionado por la creación de experiencias digitales
        innovadoras y accesibles para todos los usuarios.
      </p>
      {/* Iconos sociales */}
      <div className="flex justify-center gap-16 text-3xl py-3 text-gray-600">
        <a href="https://github.com/fragalado" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/francisco-jos%C3%A9-gallego-dorado-364a3820b/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://gitlab.com/fragalado" target="_blank">
          <FaGitlab />
        </a>
      </div>
      {/* Imagen */}
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-16 overflow-hidden">
        <Image
          src={imagenFran}
          alt="Imagen de Fran Gallego"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
