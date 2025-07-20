"use client";

import Link from "next/link";
import { WhatsappIcon } from "@/components/icons/whatsapp";

export default function WhatsappButton() {
  const phoneNumber = "573102004168";
  const message = "Hola, me contacto desde la pagina web";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsappIcon />
    </Link>
  );
}
