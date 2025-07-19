import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, ShieldCheck, Truck, UserCheck, Award } from 'lucide-react';
import Link from 'next/link';

const services = [
  { icon: <Award className="h-8 w-8 text-primary" />, title: "Venta de Repuestos Originales", description: "Accede a nuestro inventario completo de piezas 100% genuinas, importadas directamente desde el fabricante." },
  { icon: <UserCheck className="h-8 w-8 text-primary" />, title: "Asesoría Técnica", description: "Nuestro equipo de expertos te ayuda a identificar con precisión el repuesto que tu Mercedes necesita." },
  { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: "Garantías Extendidas", description: "Compra con total tranquilidad. Ofrecemos garantías completas para todos nuestros componentes." },
  { icon: <Truck className="h-8 w-8 text-primary" />, title: "Envíos a Nivel Nacional", description: "Recibe tus repuestos en la puerta de tu casa o taller, en cualquier lugar de Colombia, de forma rápida y segura." },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Nuestros Servicios</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Más que una venta, te ofrecemos una solución integral para mantener tu Mercedes-Benz en perfectas condiciones.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="group overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl bg-background text-left p-2">
              <CardHeader className="flex-row items-center gap-4">
                {service.icon}
                <CardTitle className="text-foreground text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" asChild>
            <Link href="#contacto">
              Consultar Catálogo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
