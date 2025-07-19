import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full bg-cover bg-center bg-no-repeat bg-fixed" style={{backgroundImage: "url('https://placehold.co/1920x1080.png')"}} data-ai-hint="mercedes car modern">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30" />
      <div className="relative z-10 flex h-full items-center justify-center text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Distribuidora Oficial de Repuestos Mercedes
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200 md:text-xl">
            Calidad y garantía para tu vehículo. La precisión alemana que tu
            Mercedes-Benz merece, a tu alcance.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="text-lg">
              <Link href="#ai-finder">
                Buscar Repuesto
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black">
              <Link href="#nosotros">
                Conócenos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
