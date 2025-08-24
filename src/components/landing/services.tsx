import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const services = [
  {
    image: "/images/Venta-de-Repuestos-Originales-y-Homologados.jpg",
    title: "Venta de Repuestos Originales y Homologados",
    description: "Accede a nuestro inventario completo de piezas originales y homologadas de alta calidad, 100% confiables y garantizadas.",
    hint: "car parts",
  },
  {
    image: "/images/Electricidad-y-Mecanica.jpg",
    title: "Electricidad y Mecánica",
    description: "Soluciones completas en reparaciones eléctricas y mecánicas para mantener tu vehículo en óptimas condiciones.",
    hint: "car engine",
  },
  {
    image: "/images/Servicio-de-Scanner.jpg",
    title: "Servicio de Scanner",
    description: "Diagnóstico electrónico avanzado para identificar con precisión cualquier falla en tu Mercedes-Benz.",
    hint: "car diagnostic",
  },
  {
    image: "/images/Asesoria-Tecnica.jpg",
    title: "Asesoría Técnica",
    description: "Nuestro equipo de expertos te ayuda a identificar con precisión el repuesto que tu Mercedes necesita.",
    hint: "mechanic explaining",
  },
  {
    image: "/images/Garantias-Confiables.jpg",
    title: "Garantías Confiables",
    description: "Compra con total tranquilidad. Ofrecemos garantías completas para todos nuestros componentes.",
    hint: "warranty stamp",
  },
  {
    image: "/images/Envios-a-Nivel-Nacional.jpg",
    title: "Envíos a Nivel Nacional",
    description: "Recibe tus repuestos en la puerta de tu casa o taller, en cualquier lugar de Colombia, de forma rápida y segura.",
    hint: "delivery truck",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Nuestros Servicios</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Más que una venta, te ofrecemos una solución integral para mantener tu Mercedes-Benz en perfectas condiciones.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="group overflow-hidden shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg bg-card text-left border-border/50 flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={`Imagen representativa de ${service.title}`}
                  fill
                  className="object-cover"
                  data-ai-hint={service.hint}
                />
              </div>
              <CardHeader className="flex-grow">
                <CardTitle className="text-foreground text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" disabled>
            Consultar Catálogo (Próximamente)
          </Button>
        </div>
      </div>
    </section>
  );
}
