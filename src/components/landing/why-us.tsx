import { CheckCircle, Award, Globe, Users, TrendingUp } from "lucide-react";

const advantages = [
    {
        icon: <CheckCircle className="w-10 h-10 text-primary" />,
        title: "Originalidad Certificada",
        description: "Cada pieza está certificada por Mercedes-Benz, asegurando un ajuste perfecto y rendimiento óptimo."
    },
    {
        icon: <Award className="w-10 h-10 text-primary" />,
        title: "Calidad Garantizada",
        description: "Tu inversión está protegida. Todos nuestros productos cuentan con la garantía oficial de fábrica."
    },
    {
        icon: <Globe className="w-10 h-10 text-primary" />,
        title: "Entregas Rápidas",
        description: "Recibe tus repuestos en tiempo récord en cualquier parte del país. Sabemos que tu tiempo es valioso."
    },
    {
        icon: <TrendingUp className="w-10 h-10 text-primary" />,
        title: "Precios Competitivos",
        description: "Ofrecemos la mejor relación calidad-precio del mercado, sin sacrificar la autenticidad de los repuestos."
    },
    {
        icon: <Users className="w-10 h-10 text-primary" />,
        title: "Soporte Técnico Especializado",
        description: "Nuestro equipo está altamente capacitado para resolver tus dudas y asegurar que compres exactamente lo que necesitas."
    }
];

export default function WhyUs() {
    return (
        <section id="ventajas" className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">¿Por Qué Elegir AM BENZ S.A.S?</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                        Más que un proveedor, somos tu socio estratégico. Te ofrecemos tranquilidad, confianza y el respaldo de la excelencia alemana.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-12">
                    {advantages.map((advantage) => (
                        <div key={advantage.title} className="flex items-start space-x-6">
                            <div className="flex-shrink-0 bg-secondary/50 p-4 rounded-full">
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
