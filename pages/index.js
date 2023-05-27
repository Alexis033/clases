import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  p-24 ${inter.className}`}
    >
      <h1 className='text-5xl font-bold text-blue-600 self-center mb-10'>Temas por materia</h1>

      <a href="/ciencias" className="hover:text-blue-600 ">Ciencias Primero</a>
      
    </main>
  )
}
