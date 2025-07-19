import Image from 'next/image';

export default function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:gap-16">
          <div className="lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9e?q=80&w=2070&auto=format&fit=crop"
              alt="Taller de distrimercedes"
              width={600}
              height={400}
              className="rounded-lg shadow-lg aspect-[3/2] object-cover"
              data-ai-hint="car workshop"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-4">Nuestra Historia</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Desde nuestra fundación, en **distrimercedes** nos hemos dedicado con pasión a ser el puente entre la excelencia de la ingeniería alemana y los dueños de un Mercedes-Benz. Nacimos para solucionar la necesidad de repuestos originales de alta calidad con un servicio cercano y confiable.
            </p>
            <div className="space-y-4 text-foreground">
              <p><strong>Misión:</strong> Ser el aliado número uno de nuestros clientes, garantizando el óptimo rendimiento y la seguridad de sus vehículos a través de repuestos 100% originales y una asesoría técnica inigualable.</p>
              <p><strong>Visión:</strong> Convertirnos en el distribuidor de referencia en Colombia, reconocidos por nuestra integridad, conocimiento y un compromiso inquebrantable con la satisfacción del cliente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
