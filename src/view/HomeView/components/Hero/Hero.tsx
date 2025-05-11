import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-[#2d6f9e] text-white py-10 lg:py-20 px-6 lg:px-16">
      <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-6 lg:gap-12 lg:flex-row">
        <div className="max-w-xl text-center flex flex-col gap-4 lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
            Jimny.AI, tu conciencia digital para crecer cada día
          </h1>
          <p className="hidden lg:block text-white/80 mb-6">
            Más que una app: un acompañante inteligente que te guía, motiva y te
            ayuda a lograr tus objetivos.
          </p>
          <Link
            href="/docs"
            className="inline-block lg:max-w-64 rounded-full bg-[#00AEEF] px-6 py-3 text-white font-semibold transition hover:bg-[#0090cc]"
          >
            Ver documentación
          </Link>
        </div>
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
