import Link from "next/link";
import { Youtube, Facebook, Twitter } from "lucide-react";
import { Logo } from "@/components/icons/logo";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4 md:text-left">
          <div className="md:col-span-1">
            <Link href="#inicio" className="inline-flex items-center gap-2 mb-4">
              <Logo className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">Conduciendo tu confianza en cada pieza.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4 text-primary-foreground/90">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#inicio" className="text-muted-foreground hover:text-primary-foreground transition-colors">Inicio</Link></li>
              <li><Link href="#nosotros" className="text-muted-foreground hover:text-primary-foreground transition-colors">Nosotros</Link></li>
              <li><Link href="#servicios" className="text-muted-foreground hover:text-primary-foreground transition-colors">Servicios</Link></li>
              <li><Link href="#ventajas" className="text-muted-foreground hover:text-primary-foreground transition-colors">Ventajas</Link></li>
              <li><Link href="#contacto" className="text-muted-foreground hover:text-primary-foreground transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4 text-primary-foreground/90">Síguenos</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link href="https://www.youtube.com/@giolex2" target="_blank" aria-label="YouTube" className="text-muted-foreground hover:text-primary-foreground transition-colors"><Youtube className="w-6 h-6" /></Link>
              <Link href="https://www.facebook.com/giovanny.garces" target="_blank" aria-label="Facebook" className="text-muted-foreground hover:text-primary-foreground transition-colors"><Facebook className="w-6 h-6" /></Link>
              <Link href="https://x.com/Giovanny_Garces" target="_blank" aria-label="Twitter" className="text-muted-foreground hover:text-primary-foreground transition-colors"><Twitter className="w-6 h-6" /></Link>
            </div>
          </div>
           <div>
            <h3 className="text-base font-semibold mb-4 text-primary-foreground/90">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Cr 127 14b‑70, Bogotá</li>
              <li>+57 300 300 3000</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border/20 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} distrimercedes. Todos los derechos reservados.</p>
          <p className="mt-2">
            <Link href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Política de Privacidad</Link>
            <span className="mx-2">|</span>
            <Link href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Términos de Servicio</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
