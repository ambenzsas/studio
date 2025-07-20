import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "La calidad de los repuestos es insuperable y el servicio al cliente es de primera. Encontré todo para mi C200 en un solo lugar. ¡Recomendadísimos!",
    name: "Juan Pérez",
    title: "Propietario, Mercedes-Benz C200 (2005)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    hint: "man smiling"
  },
  {
    quote: "Como taller, necesitamos proveedores confiables. AM BENZ nunca nos ha fallado. Entregas a tiempo y la certeza de que estamos instalando piezas originales.",
    name: "Taller Auto-Fix",
    title: "Cliente Corporativo",
    avatar: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop",
    hint: "mechanic garage"
  },
  {
    quote: "El equipo de asesoría me ayudó a identificar una pieza que llevaba semanas buscando para mi E-Class. Su conocimiento técnico es impresionante. ¡Gracias!",
    name: "Luisa Fernanda",
    title: "Propietaria, Mercedes-Benz E-Class (2008)",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    hint: "woman professional"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Lo que Dicen Nuestros Clientes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            La confianza y satisfacción de quienes nos eligen es nuestra mayor garantía.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card shadow-sm border-border/50 flex flex-col justify-between rounded-lg overflow-hidden">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/20 mb-6" />
                <p className="text-muted-foreground mb-6 italic text-base">"{testimonial.quote}"</p>
              </CardContent>
              <div className="bg-secondary/50 px-8 py-4 flex items-center gap-4 border-t border-border/50">
                  <Image src={testimonial.avatar} alt={testimonial.name} width={50} height={50} className="rounded-full object-cover aspect-square" data-ai-hint={testimonial.hint}/>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
