import { CheckCircle2, Award, Globe, Users } from "lucide-react";

const advantages = [
    {
        icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
        title: "Repuestos 100% Originales",
        description: "Cada pieza viene directamente del fabricante, asegurando un ajuste perfecto y el rendimiento esperado."
    },
    {
        icon: <Award className="w-8 h-8 text-green-500" />,
        title: "Garantía de Fábrica",
        description: "Tu inversión está protegida. Todos nuestros productos cuentan con la garantía oficial de Mercedes-Benz."
    },
    {
        icon: <Globe className="w-8 h-8 text-green-500" />,
        title: "Envíos a Todo el País",
        description: "No importa dónde te encuentres, llevamos la calidad Mercedes-Benz hasta la puerta de tu taller o casa."
    },
    {
        icon: <Users className="w-8 h-8 text-green-500" />,
        title: "Soporte Técnico Especializado",
        description: "Nuestro equipo está capacitado para resolver tus dudas y asegurar que compres exactamente lo que necesitas."
    }
];

export default function WhyUs() {
    return (
        <section id="ventajas" className="py-20 bg-card">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">¿Por Qué Elegirnos?</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        Te ofrecemos más que repuestos, te ofrecemos tranquilidad y confianza.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-8 gap-y-10">
                    {advantages.map((advantage) => (
                        <div key={advantage.title} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 bg-background p-3 rounded-full shadow-md">
                                {advantage.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-1 text-foreground">{advantage.title}</h3>
                                <p className="text-muted-foreground">{advantage.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
