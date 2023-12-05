"use client"
import React from 'react'
import Image from "next/image";
import foto6 from "@/assets/img/foto6.webp";
import foto2 from "@/assets/img/foto2.webp";
import foto3 from "@/assets/img/foto3.webp";
import foto7 from "@/assets/img/foto7.webp";
import foto5 from "@/assets/img/foto5.webp";
import './carrusel.css'

export default function Carrusel() {
  return (
    <div>
      <section className="carusel" id='carusel'>
        <Image className='foto' src={foto7} alt="foto7" />
        <Image className='foto' src={foto3} alt="foto3" />
        <Image className='foto' src={foto6} alt="foto6" />
        <Image className='foto' src={foto2} alt="foto2" />
        <Image className='foto' src={foto5} alt="foto5" />
      </section>
    </div>
  );
}
