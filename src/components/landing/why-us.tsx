import { CheckCircle, Award, Globe, Users } from "lucide-react";

const advantages = [
    {
        icon: <CheckCircle className="w-10 h-10 text-primary" />,
        title: "Repuestos 100% Originales",
        description: "Cada pieza viene directamente del fabricante, asegurando un ajuste perfecto y el rendimiento que esperas de Mercedes-Benz."
    },
    {
        icon: <Award className="w-10 h-10 text-primary" />,
        title: "Garantía de Fábrica Completa",
        description: "Tu inversión está protegida. Todos nuestros productos cuentan con la garantía oficial, dándote total tranquilidad."
    },
    {
        icon: <Globe className="w-10 h-10 text-primary" />,
        title: "Envíos a Todo el País",
        description: "No importa dónde te encuentres, llevamos la calidad Mercedes-Benz hasta la puerta de tu taller o casa de forma rápida y segura."
    },
    {
        icon: <Users className="w-10 h-10 text-primary" />,
        title: "Soporte Técnico Especializado",
        description: "Nuestro equipo está altamente capacitado para resolver tus dudas y asegurar que compres exactamente lo que necesitas."
    }
];

export default function WhyUs() {
    return (
        <section id="ventajas" className="py-20 lg:py-32 bg-card">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">¿Por Qué Elegirnos?</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                        Más que un proveedor, somos tu socio estratégico. Te ofrecemos más que repuestos, te ofrecemos tranquilidad, confianza y el respaldo de la excelencia.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-12">
                    {advantages.map((advantage) => (
                        <div key={advantage.title} className="flex items-start space-x-6">
                            <div className="flex-shrink-0">
                                {advantage.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2 text-foreground">{advantage.title}</h3>
                                <p className="text-muted-foreground">{advantage.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
