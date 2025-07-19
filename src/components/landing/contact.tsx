import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Ponte en Contacto</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            ¿Necesitas una cotización o tienes alguna consulta? Nuestro equipo de expertos está listo para ayudarte a encontrar la pieza perfecta para tu Mercedes.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <Card className="lg:w-1/2 w-full shadow-lg border-border/50 bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Envíanos un Mensaje</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input id="name" name="name" type="text" placeholder="Nombre completo" className="bg-secondary/50"/>
                  </div>
                  <div>
                    <Input id="email" name="email" type="email" placeholder="tu@email.com" className="bg-secondary/50" />
                  </div>
                </div>
                <div>
                  <Input id="phone" name="phone" type="tel" placeholder="Tu número de teléfono" className="bg-secondary/50"/>
                </div>
                <div>
                  <Textarea id="message" name="message" placeholder="¿En qué podemos ayudarte?" rows={5} className="bg-secondary/50"/>
                </div>
                <div className="text-center pt-2">
                  <Button type="submit" size="lg" className="w-full">Enviar Mensaje</Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <div className="lg:w-1/2 w-full">
            <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Información de Contacto</h3>
                <div className="space-y-4 text-lg">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Dirección</p>
                      <p className="text-muted-foreground">Cra. 123 #14b-70, Bogotá, Colombia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Teléfono</p>
                      <p className="text-muted-foreground">+57 300 300 3000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <Link href="mailto:contacto@distrimercedes.com" className="text-primary hover:underline">contacto@distrimercedes.com</Link>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.591646237622!2d-74.1507094!3d4.666675199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c8f8a18a0e9%3A0x65a882b79a744265!2sCra.%20123%20%2314b-70%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1722443003290!5m2!1ses!2sco"
                        width="100%" 
                        height="350" 
                        style={{border:0}} 
                        allowFullScreen={false}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg shadow-md"
                    ></iframe>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
