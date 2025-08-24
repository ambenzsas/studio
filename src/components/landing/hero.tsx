"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const heroImages = [
    {
        src: "/images/hero-1.jpg",
        alt: "Mercedes-Benz clásico de los años 2000",
        hint: "classic mercedes car"
    },
    {
        src: "/images/hero-2.jpg",
        alt: "Mercedes-Benz deportivo amarillo",
        hint: "yellow mercedes sports"
    },
    {
        src: "/images/hero-3.jpg",
        alt: "Mercedes-Benz modelo moderno en una carretera",
        hint: "modern mercedes road"
    },
    {
        src: "/images/hero-4.jpg",
        alt: "Detalle de un repuesto de alta calidad para Mercedes-Benz",
        hint: "car part detail"
    }
]

export default function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full text-foreground flex items-center justify-center">
      <Carousel 
        opts={{ loop: true }}
        plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
            }),
          ]}
        className="w-full h-full absolute inset-0"
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
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
            Conduciendo tu confianza en cada pieza
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200 md:text-xl drop-shadow-md">
            Calidad, garantía y la precisión que tu Mercedes-Benz merece. Somos tu proveedor de confianza para repuestos originales y homologados.
          </p>
        </div>
    </section>
  );
}
