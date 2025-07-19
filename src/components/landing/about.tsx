import Image from 'next/image';

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="lg:w-1/2">
            <Image
              src="https://placehold.co/1200x800.png"
              alt="Interior de concesionario Mercedes-Benz"
              width={1200}
              height={800}
              className="rounded-lg shadow-xl"
              data-ai-hint="car dealership"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-4">Nuestra Historia</h2>
            <p className="text-muted-foreground mb-4">
              Fundada por entusiastas de la ingeniería alemana, AutoPartes Élite nació con el objetivo de ofrecer una solución confiable y profesional a los propietarios de Mercedes-Benz. Con más de una década de experiencia, nos hemos consolidado como líderes en la distribución de repuestos originales.
            </p>
            <div className="mt-6 space-y-4 text-foreground">
              <p><strong>Misión:</strong> Proveer componentes genuinos que preserven la integridad y el valor de cada vehículo Mercedes-Benz.</p>
              <p><strong>Visión:</strong> Ser el distribuidor de referencia a nivel nacional, reconocidos por nuestra calidad, conocimiento y servicio al cliente.</p>
              <p><strong>Valores:</strong> Calidad, Confianza, Precisión, Pasión por el cliente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
