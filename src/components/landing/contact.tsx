import Link from "next/link";
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
        <div className="flex justify-center">
          <div className="w-full lg:w-2/3">
            <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6 text-foreground text-center lg:text-left">Información de Contacto</h3>
                <div className="space-y-4 text-lg">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Dirección</p>
                      <p className="text-muted-foreground">Cra. 23 #77-12, Bogotá, Colombia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Teléfonos</p>
                      <p className="text-muted-foreground">+57 310 2004168</p>
                      <p className="text-muted-foreground">+57 311 2093888</p>
                      <p className="text-muted-foreground">(601) 235 4282</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <Link href="mailto:repuestosyserviciosambenz@gmail.com" className="text-primary hover:underline">repuestosyserviciosambenz@gmail.com</Link>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6212133299413!2d-74.07223842491108!3d4.661701342111158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a5658092261%3A0xb35a4d6f78816f1d!2sCra.%2023%20%2377-12%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1722444655979!5m2!1ses!2sco"
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
