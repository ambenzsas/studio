import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Ponte en Contacto</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            ¿Listo para cotizar o tienes alguna consulta? Nuestro equipo de expertos está listo para ayudarte a encontrar la pieza perfecta.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <Card className="lg:w-1/2 w-full shadow-2xl bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Envíanos un Mensaje</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Nombre</label>
                    <Input id="name" type="text" placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">Teléfono</label>
                  <Input id="phone" type="tel" placeholder="Tu número de teléfono" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Mensaje</label>
                  <Textarea id="message" placeholder="¿En qué podemos ayudarte?" rows={5} />
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
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Dirección</p>
                      <p className="text-muted-foreground">Av. de la Precisión 123, Distrito Automotriz, Ciudad Capital</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Teléfono</p>
                      <p className="text-muted-foreground">+57 300 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <Link href="mailto:contacto@autopartesfinder.com" className="text-primary hover:underline">contacto@autopartesfinder.com</Link>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Horarios de Atención</p>
                      <p className="text-muted-foreground">Lunes a Viernes: 8:00 AM - 6:00 PM | Sábados: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                    <Image
                    src="https://placehold.co/600x400.png"
                    alt="Mapa de ubicación de la tienda"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md w-full h-64 object-cover"
                    data-ai-hint="city map"
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
