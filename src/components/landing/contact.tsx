import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Ponte en Contacto</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            ¿Listo para cotizar o tienes alguna consulta? Nuestro equipo está listo para ayudarte.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <Card className="lg:w-1/2 shadow-2xl">
            <CardContent className="p-8">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Input type="text" placeholder="Nombre" />
                  <Input type="email" placeholder="Email" />
                </div>
                <div className="mb-6">
                  <Input type="tel" placeholder="Teléfono" />
                </div>
                <div className="mb-6">
                  <Textarea placeholder="Mensaje" rows={5} />
                </div>
                <div className="text-center">
                  <Button type="submit" className="w-full md:w-auto">Enviar Mensaje</Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <div className="lg:w-1/2">
            <Card className="shadow-lg">
                <CardContent className="p-8 space-y-4 text-muted-foreground">
                    <p><strong>Dirección:</strong> Av. de la Precisión 123, Distrito Automotriz, Ciudad Capital</p>
                    <p><strong>Teléfono:</strong> +57 300 123 4567</p>
                    <p><strong>Email:</strong> <Link href="mailto:contacto@autoparteselite.com" className="text-primary hover:underline">contacto@autoparteselite.com</Link></p>
                    <p><strong>Horarios de Atención:</strong> Lunes a Viernes: 8:00 AM - 6:00 PM | Sábados: 9:00 AM - 1:00 PM</p>
                </CardContent>
            </Card>
            <div className="mt-8">
              <Image
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1931&auto=format&fit=crop"
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
    </section>
  );
}
