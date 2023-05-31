import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
export default function Catedra() {
    return (
        <>
        <main className={`flex min-h-screen flex-col  px-2 py-10 ${inter.className}`}>
            <Link href="/" className="hover:text-blue-600 my-4">Inicio</Link>

            <h2 className='text-center font-bold text-4xl pb-6'>Grupos étnicos</h2>
        <div className='text-2xl flex flex-col items-center gap-5'>

        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/CM1f9qO35fU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <p> Son poblaciones cuyas condiciones y prácticas sociales, culturales y económicas, los distinguen del resto de la sociedad y que han mantenido su identidad a lo largo de la historia, como sujetos colectivos que aducen un origen, una historia y unas características culturales propias, que están dadas en sus cosmovisiones, costumbres y tradiciones.</p>
            

            <h3 className='text-center font-bold text-4xl py-6 '>Pueblo Indígena</h3>
            <p>   Es un conjunto de familias de ascendencia <strong>amerindia</strong>  que comparten sentimientos de identificación con su p​asado aborigen, manteniendo rasgos y valores propios de su cultura tradicional, así como actividades socioeconómicas basadas en la naturaleza. </p>
            <img src="https://www.nodal.am/wp-content/uploads/2017/12/f3.jpg" className='w-max' />
            
            <h3 className='text-center font-bold text-4xl py-6 '>Población afrocolombiana</h3>
            <p>   Las comunidades negras que son un conjunto de familias de ascendencia <strong>africana</strong> que poseen una cultura propia, y tienen ​sus propias tradiciones y costumbre d​entro de la relación campo-poblado. </p>
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/AI2LJMUTVNDXXBIULEY3ZKAPOY.jpg" className='w-max' />

            <h3 className='text-center font-bold text-4xl py-6 '>Población raizal</h3>
            <p>   Población ubicada en el Archipiélago de San Andrés, Providencia y Santa Catalina, con raíces culturales <strong>afro-anglo-antillanas</strong> , cuyos integrantes tienen rasgos socioculturales y lingüísticos claramente diferenciados del resto de la población afrocolombiana. </p>
            <img src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/18580899/image/medium-6ffa9b20b6f057cc316b3e665e8ca2f6.jpg" className='w-max' />
            
            <h3 className='text-center font-bold text-4xl py-6 '>Población palenquera</h3>
            <p>   Población ubicada en el municipio de <strong>San Basilio de Palenque</strong> ​, departamento de Bolívar, donde se habla el palenquero, lenguaje criollo. </p>
            <img src="https://i.pinimg.com/originals/53/fd/6e/53fd6e5bfa4aee4b1a72b69ca3aaf42c.png"  />
            
            <h3 className='text-center font-bold text-4xl py-6 '>Pueblo rom</h3>
            <p> Son comunidades que tienen una identidad étnica y cultural propia; se caracterizan por una tradición nómada, y tienen su propio idioma que es el romanés. </p>
            <img src="https://www.comisiondelaverdad.co/sites/default/files/2022-07/10.%20DPE_PUEBLO%20RROM%20Y%20ESTRATEGIAS_FONDO.jpg"  />
            
            </div>
            <Link href="/" className="hover:text-blue-600 my-4">Inicio</Link>
        </main>
        </>
    )
}