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
  title: 'AM BENZ S.A.S | Repuestos Originales Mercedes-Benz',
  description: 'Distribuidor de confianza para repuestos originales Mercedes-Benz. Conduciendo tu confianza en cada pieza.',
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
