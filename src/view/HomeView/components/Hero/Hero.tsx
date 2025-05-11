import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-[#2d6f9e] text-white py-20 px-6 lg:px-16">
      <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
        {/* Texto y botón */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Jimny.AI, tu conciencia digital para crecer cada día
          </h1>
          <p className="text-white/80 mb-6">
            Más que una app: un acompañante inteligente que te guía, motiva y te
            ayuda a lograr tus objetivos.
          </p>
          <Link
            href="/docs"
            className="inline-block rounded-full bg-[#00AEEF] px-6 py-3 text-white font-semibold transition hover:bg-[#0090cc]"
          >
            Ver documentación
          </Link>
        </div>

        {/* Imagen de Jimny */}
        <div className="relative h-72 w-72 lg:h-[400px] lg:w-[400px]">
          <Image
            src="/images/jimny-hero.png"
            alt="Jimny volando sobre dispositivo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
