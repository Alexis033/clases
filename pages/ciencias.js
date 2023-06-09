import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
export default function Ciencias() {
    return (
        <>
        <main className={`flex min-h-screen flex-col  px-2 py-10 ${inter.className}`}>
            <Link href="/" className="hover:text-blue-600 my-4">Inicio</Link>

            <h2 className='text-center font-bold text-4xl pb-6'>Sistema circulatorio</h2>
        <div className='text-2xl flex flex-col items-center gap-5'>

        <iframe  width="560" height="315" src="https://www.youtube.com/embed/kVWzKEs-mdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <p> El sistema circulatorio se compone de tres partes principales: el corazón, los vasos sanguíneos y la sangre.</p>
            
            <img src="infografia-sistema-circulatorio.webp" alt="sistema circulatorio" />

            <p>   <strong>El corazón:</strong> Es un órgano muy importante que bombea la sangre para que pueda circular por todo el cuerpo. Tiene cuatro partes llamadas cámaras: las dos cámaras superiores se llaman aurículas y las dos cámaras inferiores se llaman ventrículos.</p>
            <img src="partes-corazon-square.jpg" alt="git del corazón latiendo" className='w-max' />
            <img src="corazon-interior.jpg" alt="" width={500}/>

            <p>    <strong>Los vasos sanguíneos:</strong> Son como tubos que transportan la sangre por todo el cuerpo. Hay tres tipos principales de vasos sanguíneos: </p>
            <img src="vasos.jpg" alt="vasos sanguineos" />
            <ul className='ml-5'>
                <li>
                <strong>Las arterias:</strong> Son como las autopistas que llevan la sangre desde el corazón hacia todas las partes del cuerpo. La sangre en las arterias es rica en oxígeno.
                </li>
                <li> <strong> Las venas:</strong> Son como las calles secundarias que recogen la sangre y la llevan de vuelta al corazón. La sangre en las venas es pobre en oxígeno.</li>

                <li><strong>Los capilares:</strong> Son los vasos más pequeños y están conectados a las arterias y las venas. Los capilares son como las calles estrechas que llegan a todas las células de nuestro cuerpo. Aquí es donde la sangre entrega oxígeno y nutrientes a las células y recoge el dióxido de carbono y otros desechos.</li>
            </ul>
                
            <p>   <strong>La sangre:</strong> La sangre es un líquido rojo que fluye por los vasos sanguíneos. Está compuesta por diferentes cosas, como glóbulos rojos, glóbulos blancos y plaquetas. </p>
            <img src="sangre.jpg" width={700} />
            
            </div>
            <Link href="/" className="hover:text-blue-600 my-4">Inicio</Link>
        </main>
        </>
    )
}