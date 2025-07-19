import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AmgLogo } from "@/components/icons/amg-logo";
import { MaybachLogo } from "@/components/icons/maybach-logo";
import { EqLogo } from "@/components/icons/eq-logo";

const models = [
  {
    name: "Clase C, E, S",
    image: "https://placehold.co/800x600.png",
    hint: "mercedes sedan",
  },
  {
    name: "GLA, GLC, GLE, GLS",
    image: "https://placehold.co/800x600.png",
    hint: "mercedes suv",
  },
  {
    name: "Clase G y AMG GT",
    image: "https://placehold.co/800x600.png",
    hint: "mercedes g-class",
  },
];

export default function Models() {
  return (
    <section id="logos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Especialistas en toda la gama Mercedes-Benz
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Desde sedanes de lujo y SUVs, hasta los modelos de alto rendimiento de AMG, la exclusividad de Maybach y la innovación de la serie eléctrica EQ.
          </p>
        </div>
        <div className="mb-20 grid grid-cols-2 items-center gap-y-10 gap-x-8 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="flex justify-center grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100">
                <AmgLogo />
            </div>
            <div className="flex justify-center grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100">
                <MaybachLogo />
            </div>
            <div className="flex justify-center grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 col-span-2 md:col-span-1">
                <EqLogo />
            </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model, index) => (
            <Card key={index} className="group overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl bg-card">
              <div className="overflow-hidden">
                <Image
                  src={model.image}
                  alt={`Foto de un ${model.name}`}
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={model.hint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">{model.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
