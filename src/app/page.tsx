import Image from 'next/image'
import Navegadora from '@/components/navbar/Navegadora';
import Carrusel from '@/components/carrusel/Carrusel';
import foto1 from "@/assets/img/foto1.webp"
import foto4 from "@/assets/img/foto4.webp"
import foto8 from "@/assets/img/foto8.webp"
import instagram from '@/assets/img/instagram.png'
import instagram2 from '@/assets/img/instagram (2).png'
import facebook from '@/assets/img/facebook.png'
import wpp from '@/assets/img/whatsapp (1).png'
import wpp2 from '@/assets/img/whatsapp.png'
import Link from 'next/link';




export default function Home() {  
  return (
    <main>
      {/*HOME*/}
      <Navegadora />
      <div id='Home'>
      <Carrusel />
      </div>
      {/*QUIENES SOMOS */}
      <section id="quienes_somos">
      
        <h2>¿Quiénes somos?</h2>
        
        <div className='qs2'>
        <Image src={ foto1 } alt='foto' className='quien_imagen'/>

        <div className='contenedorSpan'>
        <span className='span1'>
              Somos Amodonas, nuestra pasión se encuentra en cada dona que hacemos.
              Somos artesanos dedicados a crear delicias irresistibles, fusionando creatividad y sabores frescos.
              Cada mordisco es una experiencia, una celebración de los pequeños placeres de la vida.
              Únete a nosotros en este viaje de dulzura.
        </span>
        </div>
        </div>
          
      </section>

      {/*ORDENAR DONAS*/}
      {/*HACER UNA RUTA DONDE SE MUESTREN LOS PRODUCTOS*/}
      <section id='compras'>
        <h2 className='ordenar_title'>Ordenar Donas</h2>

        <section className='ordenar_div'>
          <p className='texto'>Podes ordenar tus donas haciendo click en...</p>
          <article className='ordenar_article'>
            <Image src={instagram} alt='foto no disponible' />
            <Link className='button' href={'https://www.instagram.com/amodonas.mdp/'}>
              <button>Amodonas.mdp</button>
            </Link>
          </article>
          <article className='ordenar_article'>
            <Image src={facebook} className='face' alt='foto no disponible' />
            <Link className='button' href={'https://www.facebook.com/amodonas.mdp/'}>
              <button>Amodonas.mdp</button>
            </Link>
          </article>
          <article className='ordenar_article'>
            <Image src={wpp} alt='foto no disponible' />
            <Link className='button' href={'https://wa.me/2235787936 '}>
              <button>Amodonas.mdp</button>
            </Link>
          </article>

        </section>
        
        <span className='ordenar_span'>
          Tienes la opción de seleccionar entre nuestros diseños disponibles,
          o crear un diseño personalizado.
        </span>
      </section>

      {/*CONTACTO*/}
      <section id='contacto'>
        <h2 className='contacto_title'>Contacto</h2>

        <section className='contacto_section2'>

          <section className='contacto_section'>
          
            <article className='articulo_1'>
              <p><Link href={'https://www.rp.gob.pa/Condiciones_Legales.pdf'} target='_blank'>Terminos y condiciones</Link></p>
            <p><Link href={'https://policies.google.com/privacy?hl=es-419'} target='_blank'>Politica de privacidad</Link></p>
          </article>
          <article className='articulo_2'>
          <p><Link href={'404'} target='_blank'>Reclamos</Link></p>
          <p><Link href={'404'} target='_blank'>Informar un error</Link></p>
            </article>

          </section>
          <div className='contenedorH3'>
            <h3 className='contacto_h3'>Nuestras Redes Sociales</h3>
          </div>

          <div className='contenedorRedes'>
            <Link href={'https://www.instagram.com/amodonas.mdp/'} target='_blank'>
            <Image className='redess' src={instagram2} alt='foto no disponible'/>
            </Link>  
            <Link href={'https://wa.me/2235787936'} target='_blank'>
              <Image className='redess' src={wpp2} alt='foto no disponible' />
            </Link>
            <Link href={'https://www.facebook.com/amodonas.mdp/'} target='_blank'>
              <Image className='redess' src={facebook} alt='foto no disponible' />
            </Link>
          </div>
        </section>

      </section>
    </main>
  )
}
