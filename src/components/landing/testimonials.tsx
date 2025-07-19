import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "El servicio fue impecable. Encontraron el repuesto para mi Clase C que no hallaba en ningún otro lado y llegó al día siguiente. ¡Totalmente recomendados!",
    name: "Carlos Mendoza",
    title: "Propietario, Mercedes-Benz C200",
  },
  {
    quote: "La asesoría técnica marcó la diferencia. Estaba a punto de comprar la pieza equivocada. Su equipo me guió correctamente. ¡Mucha calidad humana y profesional!",
    name: "Taller Mecánico Veloz",
    title: "Cliente Corporativo",
  },
  {
    quote: "Comprar repuestos originales aquí me da la tranquilidad que necesito para mi GLE. Los precios son justos y la atención es de primera. No busco en otro lugar.",
    name: "Ana Sofía Rincón",
    title: "Propietaria, Mercedes-Benz GLE 450",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Lo que dicen nuestros clientes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
