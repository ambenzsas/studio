import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import WhatsappButton from '@/components/landing/whatsapp-button';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'AM BENZ SAS | Repuestos Originales y Homologados para Mercedes-Benz',
  description: 'Tu proveedor de confianza para repuestos originales y homologados de alta calidad para Mercedes-Benz. Conduciendo tu confianza en cada pieza.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        {children}
        <Toaster />
        <WhatsappButton />
      </body>
    </html>
  );
}
