import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "El servicio fue impecable. Encontraron el repuesto para mi Clase C que no hallaba en ningún otro lado y llegó al día siguiente. ¡Totalmente recomendados!",
    name: "Carlos Mendoza",
    title: "Propietario, Mercedes-Benz C200",
    avatar: "https://placehold.co/100x100.png"
  },
  {
    quote: "La asesoría técnica marcó la diferencia. Estaba a punto de comprar la pieza equivocada. Su equipo me guió correctamente. ¡Calidad humana y profesional!",
    name: "Taller Mecánico Veloz",
    title: "Cliente Corporativo",
    avatar: "https://placehold.co/100x100.png"
  },
  {
    quote: "Comprar repuestos originales aquí me da la tranquilidad que necesito para mi GLE. Los precios son justos y la atención es de primera. No busco en otro lugar.",
    name: "Ana Sofía Rincón",
    title: "Propietaria, Mercedes-Benz GLE 450",
    avatar: "https://placehold.co/100x100.png"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Lo que Dicen Nuestros Clientes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            La satisfacción y confianza de quienes nos eligen es nuestra mejor carta de presentación.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card shadow-lg flex flex-col justify-between">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/20 mb-6" />
                <p className="text-muted-foreground mb-6 italic text-base">"{testimonial.quote}"</p>
              </CardContent>
              <div className="bg-card/50 px-8 py-4 flex items-center gap-4 border-t">
                  <Image src={testimonial.avatar} alt={testimonial.name} width={50} height={50} className="rounded-full" data-ai-hint="person portrait"/>
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
