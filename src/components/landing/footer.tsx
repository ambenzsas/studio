import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Logo } from "@/components/icons/logo";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4 md:text-left">
          <div className="md:col-span-1">
            <Link href="#inicio" className="inline-flex items-center gap-2 mb-4">
              <Logo className="text-primary" />
              <span className="text-xl font-bold">AutoPartes Finder</span>
            </Link>
            <p className="text-sm text-muted-foreground">Calidad y garantía para tu Mercedes-Benz.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4 text-primary-foreground/90">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#nosotros" className="text-muted-foreground hover:text-primary-foreground transition-colors">Nosotros</Link></li>
              <li><Link href="#servicios" className="text-muted-foreground hover:text-primary-foreground transition-colors">Servicios</Link></li>
              <li><Link href="#ventajas" className="text-muted-foreground hover:text-primary-foreground transition-colors">Ventajas</Link></li>
              <li><Link href="#contacto" className="text-muted-foreground hover:text-primary-foreground transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4 text-primary-foreground/90">Síguenos</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary-foreground transition-colors"><Facebook className="w-6 h-6" /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary-foreground transition-colors"><Instagram className="w-6 h-6" /></Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary-foreground transition-colors"><Linkedin className="w-6 h-6" /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary-foreground transition-colors"><Twitter className="w-6 h-6" /></Link>
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4 text-primary-foreground/90">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Política de Privacidad</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Términos de Servicio</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border/20 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AutoPartes Finder. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
