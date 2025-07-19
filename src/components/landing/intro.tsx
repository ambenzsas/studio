import { BadgeDollarSign, ShieldCheck, Truck, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Autenticidad",
    description: "Solo piezas 100% originales con garantía de fábrica.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: "Asesoría Técnica",
    description: "Expertos a tu disposición para identificar la pieza exacta.",
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Entrega Rápida",
    description: "Envíos eficientes a todo el país para que no detengas tu marcha.",
  },
  {
    icon: <BadgeDollarSign className="h-10 w-10 text-primary" />,
    title: "Precios Competitivos",
    description: "La mejor relación calidad-precio del mercado en repuestos genuinos.",
  },
];

export default function Intro() {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-6">
        <p className="mx-auto max-w-3xl text-center text-lg text-muted-foreground">
          Somos tu aliado de confianza, dedicados a proveer exclusivamente repuestos originales Mercedes-Benz. Nuestra misión es garantizar que tu vehículo mantenga el rendimiento, la seguridad y la elegancia con la que fue diseñado.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
