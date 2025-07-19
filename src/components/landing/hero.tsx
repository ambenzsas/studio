"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const heroImages = [
    {
        src: "https://placehold.co/1920x1080.png",
        alt: "Mercedes-Benz modelo moderno en una carretera",
        hint: "modern mercedes road"
    },
    {
        src: "https://placehold.co/1920x1080.png",
        alt: "Mercedes-Benz clásico de los años 2000",
        hint: "classic mercedes car"
    },
    {
        src: "https://placehold.co/1920x1080.png",
        alt: "Detalle de un repuesto original de Mercedes-Benz",
        hint: "car part detail"
    }
]

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full text-white">
      <Carousel 
        opts={{ loop: true }}
        plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="w-full h-full relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  data-ai-hint={image.hint}
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute inset-0 z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl">
            Conduciendo tu confianza en cada pieza
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200 md:text-xl">
            Calidad, garantía y la precisión alemana que tu Mercedes-Benz merece. Somos tu distribuidor de confianza.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="text-lg">
              <Link href="#servicios">
                Ver Catálogo
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-foreground">
              <Link href="#contacto">
                Contáctanos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
