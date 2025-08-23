import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, UserCheck, ShieldCheck, Truck, Wrench, ScanSearch } from 'lucide-react';
import Link from 'next/link';

const services = [
  { icon: <Award className="h-8 w-8 text-primary" />, title: "Venta de Repuestos Originales y Homologados", description: "Accede a nuestro inventario completo de piezas originales y homologadas de alta calidad, 100% confiables y garantizadas." },
  { icon: <Wrench className="h-8 w-8 text-primary" />, title: "Electricidad y Mecánica", description: "Soluciones completas en reparaciones eléctricas y mecánicas para mantener tu vehículo en óptimas condiciones." },
  { icon: <ScanSearch className="h-8 w-8 text-primary" />, title: "Servicio de Scanner", description: "Diagnóstico electrónico avanzado para identificar con precisión cualquier falla en tu Mercedes-Benz." },
  { icon: <UserCheck className="h-8 w-8 text-primary" />, title: "Asesoría Técnica", description: "Nuestro equipo de expertos te ayuda a identificar con precisión el repuesto que tu Mercedes necesita." },
  { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: "Garantías Confiables", description: "Compra con total tranquilidad. Ofrecemos garantías completas para todos nuestros componentes." },
  { icon: <Truck className="h-8 w-8 text-primary" />, title: "Envíos a Nivel Nacional", description: "Recibe tus repuestos en la puerta de tu casa o taller, en cualquier lugar de Colombia, de forma rápida y segura." },
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
            <Card key={service.title} className="group overflow-hidden shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg bg-card text-left p-2 border-border/50">
              <CardHeader className="flex-row items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-md">
                  {service.icon}
                </div>
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
