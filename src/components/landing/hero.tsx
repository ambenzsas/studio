import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1617808934350-1c5750ee3a85?q=80&w=2070&auto=format&fit=crop')] text-white" data-ai-hint="mercedes benz modern">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Distribuidora Oficial de Repuestos Mercedes
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-100/90 md:text-xl">
            Calidad y garantía para tu vehículo. La precisión alemana que tu
            Mercedes-Benz merece.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="#nosotros">
              <Button size="lg" className="bg-white text-black hover:bg-slate-200 px-8 py-3 text-lg">
                Conócenos
              </Button>
            </Link>
            <Link href="#contacto">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
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
