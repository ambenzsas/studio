import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full bg-cover bg-center bg-no-repeat bg-[url('https://placehold.co/1920x1080.png')] text-primary-foreground" data-ai-hint="mercedes benz modern">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Distribuidora Oficial de Repuestos Mercedes
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
            Calidad y garantía para tu vehículo. La precisión alemana que tu
            Mercedes-Benz merece.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="#nosotros">
              <Button size="lg" className="px-8 py-3 text-lg">
                Conócenos
              </Button>
            </Link>
            <Link href="#contacto">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground bg-primary-foreground/20 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                Solicita Información
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
