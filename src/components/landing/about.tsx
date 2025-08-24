import Image from 'next/image';

export default function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-4">Nuestra Historia</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              AM BENZ S A S fue constituida en febrero del año 2017 y desde entonces, nos hemos dedicado a construir y consolidar la confianza de cada cliente, ofreciéndoles la tranquilidad de saber que su vehículo está en manos de expertos.
            </p>
            <div className="space-y-4 text-foreground">
              <p><strong>Misión:</strong> Ofrecer soluciones integrales en mantenimiento y accesorios de alta calidad para vehículos Mercedes-Benz en Colombia, asegurando la satisfacción y la confianza de nuestros clientes a través de un servicio experto y personalizado.</p>
              <p><strong>Visión:</strong> Ser el principal importador y proveedor de soluciones integrales para vehículos Mercedes-Benz en Colombia, reconocidos por nuestra pasión y el compromiso inquebrantable con la calidad en cada servicio y accesorio.</p>
            </div>
          </div>
          <div className="lg:w-1/2 flex items-start">
            <Image
              src="/images/Nuestra-Historia.jpg"
              alt="Imagen sobre nosotros"
              width={600}
              height={450}
              className="rounded-lg shadow-lg aspect-video object-cover w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
