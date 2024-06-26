import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col px-2 py-10 ${inter.className}`}
    >
      <h1 className='text-5xl font-bold text-blue-600 self-center mb-10'>Temas por materia</h1>
      <Link href="/pruebas" className="hover:text-blue-600 ">Prueba saber 4</Link>
      <Link href="/catedra" className="hover:text-blue-600 ">Catedra 4</Link>
      <Link href="/etica" className="hover:text-blue-600 ">Ética 7</Link>
      
      
    </main>
  )
}
