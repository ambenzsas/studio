import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cog, Shield, ToyBrick, Car, Droplets, Grid3x3 } from 'lucide-react';

const categories = [
  { icon: <Cog className="h-8 w-8 text-primary" />, title: "Motor", description: "Componentes esenciales para mantener el corazón de tu vehículo en su máximo rendimiento." },
  { icon: <Shield className="h-8 w-8 text-primary" />, title: "Frenos", description: "Sistemas de frenado que garantizan la máxima seguridad y respuesta en cualquier condición." },
  { icon: <ToyBrick className="h-8 w-8 text-primary" />, title: "Suspensión", description: "Piezas clave para un manejo confortable, estable y preciso como el primer día." },
  { icon: <Car className="h-8 w-8 text-primary" />, title: "Carrocería", description: "Partes originales para mantener la estética impecable y la estructura de tu Mercedes." },
  { icon: <Droplets className="h-8 w-8 text-primary" />, title: "Filtros y Fluidos", description: "Productos específicos para proteger y prolongar la vida útil de todos los sistemas." },
  { icon: <Grid3x3 className="h-8 w-8 text-primary" />, title: "Accesorios", description: "Detalles originales para personalizar y mejorar la funcionalidad de tu vehículo." },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Un Universo de Soluciones para tu Mercedes</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Distribuimos una amplia gama de repuestos originales para cubrir cada una de las necesidades de tu vehículo, sin importar el modelo o el año.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.title} className="group overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl bg-background text-left p-2">
              <CardHeader className="flex-row items-center gap-4">
                {category.icon}
                <CardTitle className="text-foreground text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" disabled>
            Ver catálogo completo (Próximamente)
          </Button>
        </div>
      </div>
    </section>
  );
}
