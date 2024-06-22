import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
export default function Etica() {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col  px-2 py-10 ${inter.className}`}
      >
        <Link href="/" className="hover:text-blue-600 my-4">
          Inicio
        </Link>

        <h2 className="text-center font-bold text-4xl pb-6">El Cuerpo</h2>
        <div className="text-2xl flex flex-col items-center gap-5">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/deNGkzUlhZU?si=kkxxGTtaKvWBa5Vx&amp;start=66"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen= "true"
          ></iframe>

          <img src="cambios-cuerpo.png" alt="cambios en el cuerpo" />

            <h3> <strong>Cambios psicologicos</strong> </h3>
            <img src="emociones.jpeg" alt="ejemplos de emociones en adolescencia" />

          {/* <p>   <strong>La sangre:</strong> La sangre es un líquido rojo que fluye por los vasos sanguíneos. Está compuesta por diferentes cosas, como glóbulos rojos, glóbulos blancos y plaquetas. </p> */}
          {/* <img src="sangre.jpg" width={700} /> */}
        </div>
        <Link href="/" className="hover:text-blue-600 my-4">
          Inicio
        </Link>
      </main>
    </>
  );
}
