import Image from 'next/image'
import Navegadora from '@/components/navbar/Navegadora';
import Carrusel from '@/components/carrusel/carrusel'

export default function Home() {
  return (
    <main>
      <Navegadora />
      <Carrusel />
    </main>
  )
}
