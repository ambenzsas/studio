import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, User, UserRound } from "lucide-react";

const testimonials = [
  {
    quote: "Absalon siempre con la buena actitud para ayudar al cliente.",
    name: "Mauricio Londoño",
    title: "Cliente",
    icon: <User className="w-10 h-10 text-muted-foreground" />,
    stars: 5,
  },
  {
    quote: "Buenos precios y buena atención.",
    name: "Carlos Ferreira Reyes",
    title: "Cliente",
    icon: <User className="w-10 h-10 text-muted-foreground" />,
    stars: 5,
  },
  {
    quote: "Calidad y servicio garantizado.",
    name: "Sandra Yaneth Rojas",
    title: "Cliente",
    icon: <UserRound className="w-10 h-10 text-muted-foreground" />,
    stars: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? "fill-current" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
};

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
              <CardContent className="p-8 flex-grow">
                <Quote className="w-10 h-10 text-primary/20 mb-6" />
                <p className="text-muted-foreground mb-6 italic text-base">"{testimonial.quote}"</p>
              </CardContent>
              <div className="bg-secondary/50 px-8 py-6 flex flex-col items-start gap-4 border-t border-border/50">
                  <div className="flex items-center gap-4 w-full">
                    <div className="p-2 bg-muted rounded-full">
                      {testimonial.icon}
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                  <StarRating rating={testimonial.stars} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
