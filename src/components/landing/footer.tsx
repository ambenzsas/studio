import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Logo } from "@/components/icons/logo";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4 md:text-left">
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 justify-center md:justify-start">
              <Logo className="text-primary" /> AutoPartes Élite
            </h3>
            <p className="text-muted-foreground">Calidad y garantía para tu Mercedes-Benz.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><Link href="#nosotros" className="text-muted-foreground hover:text-primary-foreground">Nosotros</Link></li>
              <li><Link href="#servicios" className="text-muted-foreground hover:text-primary-foreground">Servicios</Link></li>
              <li><Link href="#ventajas" className="text-muted-foreground hover:text-primary-foreground">Ventajas</Link></li>
              <li><Link href="#contacto" className="text-muted-foreground hover:text-primary-foreground">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link href="#" className="text-muted-foreground hover:text-primary-foreground"><Facebook className="w-6 h-6" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary-foreground"><Instagram className="w-6 h-6" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary-foreground"><Linkedin className="w-6 h-6" /></Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary-foreground">Política de Privacidad</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border/20 pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AutoPartes Élite. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
