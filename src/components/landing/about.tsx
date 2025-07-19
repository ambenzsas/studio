import Image from 'next/image';

export default function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="lg:w-1/2">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Interior de concesionario Mercedes-Benz"
              width={600}
              height={400}
              className="rounded-lg shadow-xl aspect-[3/2] object-cover"
              data-ai-hint="car dealership"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-4">Nuestra Historia</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Fundada por entusiastas de la ingeniería alemana, nuestra empresa nació con el objetivo de ofrecer una solución confiable y profesional a los propietarios de Mercedes-Benz. Con más de una década de experiencia, nos hemos consolidado como líderes en la distribución de repuestos originales.
            </p>
            <div className="space-y-4 text-foreground">
              <p><strong>Misión:</strong> Proveer componentes genuinos que preserven la integridad y el valor de cada vehículo Mercedes-Benz, garantizando tu seguridad y satisfacción.</p>
              <p><strong>Visión:</strong> Ser el distribuidor de referencia a nivel nacional, reconocidos por nuestra calidad, conocimiento y un servicio al cliente excepcional.</p>
              <p><strong>Valores:</strong> Calidad, Confianza, Precisión, Pasión por el cliente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
