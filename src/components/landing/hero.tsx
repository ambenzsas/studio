"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const heroImages = [
    {
        src: "/images/hero-1.jpg",
        alt: "Auto de lujo en la ciudad",
    },
    {
        src: "/images/hero-2.jpg",
        alt: "Frente de auto deportivo",
    },
    {
        src: "/images/hero-3.jpg",
        alt: "Auto clásico en exhibición",
    },
    {
        src: "/images/hero-4.jpg",
        alt: "Interior de un auto moderno",
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
