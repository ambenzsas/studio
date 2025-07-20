import { PackageCheck, Users, Car, Wrench } from "lucide-react";

const features = [
  {
    icon: <PackageCheck className="h-10 w-10 text-primary" />,
    title: "Repuestos Genuinos",
    description: "Importadores de repuestos y accesorios para Mercedes-Benz.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Asesoría Técnica",
    description: "Nuestro equipo estará disponible para identificar lo que su vehículo necesita.",
  },
  {
    icon: <Car className="h-10 w-10 text-primary" />,
    title: "Para todos los Modelos",
    description: "Contamos con un amplio stock para sedanes, SUVs, deportivos y clásicos.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: "Calidad Insuperable",
    description: "Cada componente está diseñado para ofrecer el máximo rendimiento y durabilidad.",
  },
];

export default function Intro() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">La Precisión que tu Mercedes-Benz Merece</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            En AM BENZ, somos tu aliado de confianza. Nos dedicamos a proveer exclusivamente repuestos originales Mercedes-Benz para que tu vehículo mantenga el rendimiento, la seguridad y la elegancia con la que fue diseñado.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center p-6 rounded-lg transition-all">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
