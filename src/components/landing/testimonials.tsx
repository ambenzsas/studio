import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "La calidad de los repuestos es insuperable y el servicio al cliente es de primera. Encontré todo para mi C200 en un solo lugar. ¡Recomendadísimos!",
    name: "Juan Pérez",
    title: "Propietario, Mercedes-Benz C200",
    avatar: "https://placehold.co/100x100.png",
    hint: "man smiling"
  },
  {
    quote: "Como taller, necesitamos proveedores confiables. distrimercedes nunca nos ha fallado. Entregas a tiempo y la certeza de que estamos instalando piezas originales.",
    name: "Taller Auto-Fix",
    title: "Cliente Corporativo",
    avatar: "https://placehold.co/100x100.png",
    hint: "mechanic"
  },
  {
    quote: "El equipo de asesoría me ayudó a identificar una pieza que llevaba semanas buscando. Su conocimiento técnico es impresionante. ¡Gracias!",
    name: "Luisa Fernanda",
    title: "Propietaria, Mercedes-Benz GLE",
    avatar: "https://placehold.co/100x100.png",
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
            <Card key={index} className="bg-card shadow-lg flex flex-col justify-between rounded-lg overflow-hidden">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/30 mb-6" />
                <p className="text-muted-foreground mb-6 italic text-base">"{testimonial.quote}"</p>
              </CardContent>
              <div className="bg-black/20 px-8 py-4 flex items-center gap-4 border-t border-border">
                  <Image src={testimonial.avatar} alt={testimonial.name} width={50} height={50} className="rounded-full" data-ai-hint={testimonial.hint}/>
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
