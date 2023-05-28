import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import { useState } from 'react'
export default function Pruebas() {
    const [show, setShow] = useState([false, false, false, false])
    console.log(show)
    const showAnswer = (index) => {
        const newArray = [...show]
            newArray[index] = !show[index]
        setShow( newArray )
    }
    return (
        <>
        <main className={`flex min-h-screen flex-col  px-2 py-10 ${inter.className}`}>
            <Link href="/" className="hover:text-blue-600 my-4">Inicio</Link>

            <h2 className='text-center font-bold text-4xl pb-6'>Pruebas Pensamiento Ciudadano</h2>
        <div className='text-2xl flex flex-col items-center gap-20'>
            
            <img src="pruebas/pregunta-1.png" alt="pregunta 1" onClick={()=> showAnswer(0)} />
            {show[0] && <img src="pruebas/respuesta-1.png" alt="respuesta 1" onClick={()=> showAnswer(0)}/>}
            <img src="pruebas/pregunta-2.png" alt="pregunta 2" onClick={()=> showAnswer(1)} />
            {show[1] && <img src="pruebas/respuesta-2.png" alt="respuesta 2" onClick={()=> showAnswer(1)}/>}
            <img src="pruebas/pregunta-3.png" alt="pregunta 3" onClick={()=> showAnswer(2)} />
            {show[2] && <img src="pruebas/respuesta-3.png" alt="respuesta 3" onClick={()=> showAnswer(2)}/>}
            <img src="pruebas/pregunta-4.png" alt="pregunta 4" onClick={()=> showAnswer(3)} />
            {show[3] && <img src="pruebas/respuesta-4.png" alt="respuesta 4" onClick={()=> showAnswer(3)}/>}
            <img src="pruebas/pregunta-5.png" alt="pregunta 5" onClick={()=> showAnswer(4)} />
            {show[4] && <img src="pruebas/respuesta-5.png" alt="respuesta 5" onClick={()=> showAnswer(4)}/>}
            <img src="pruebas/pregunta-6.png" alt="pregunta 6" onClick={()=> showAnswer(5)} />
            {show[5] && <img src="pruebas/respuesta-6.png" alt="respuesta 6" onClick={()=> showAnswer(5)}/>}
            <img src="pruebas/pregunta-7.png" alt="pregunta 7" onClick={()=> showAnswer(6)} />
            {show[6] && <img src="pruebas/respuesta-7.png" alt="respuesta 7" onClick={()=> showAnswer(6)}/>}
            <img src="pruebas/pregunta-8.png" alt="pregunta 8" onClick={()=> showAnswer(7)} />
            {show[7] && <img src="pruebas/respuesta-8.png" alt="respuesta 8" onClick={()=> showAnswer(7)}/>}
            <img src="pruebas/pregunta-9.png" alt="pregunta 9" onClick={()=> showAnswer(8)} />
            {show[8] && <img src="pruebas/respuesta-9.png" alt="respuesta 9" onClick={()=> showAnswer(8)}/>}
            <img src="pruebas/pregunta-10.png" alt="pregunta 10" onClick={()=> showAnswer(9)} />
            {show[9] && <img src="pruebas/respuesta-10.png" alt="respuesta 10" onClick={()=> showAnswer(9)}/>}
            
            </div>
            <Link href="/" className="hover:text-blue-600 my-4">Inicio</Link>
        </main>
        </>
    )
}