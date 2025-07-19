"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  handlePhotoIdentification,
  handleTextIdentification,
} from "@/app/actions";
import { Loader2, Camera, Car, Wrench, Search } from "lucide-react";
import type {
  PhotoPartIdentificationOutput,
  IdentifyPartByDescriptionOutput,
} from "@/app/actions";

type AiResult = PhotoPartIdentificationOutput | IdentifyPartByDescriptionOutput | null;

export default function AiFinder() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("photo");
  const [isLoading, setIsLoading] = useState(false);
  const [aiResult, setAiResult] = useState<AiResult>(null);

  // State for photo form
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoDescription, setPhotoDescription] = useState("");
  
  // State for description form
  const [partDescription, setPartDescription] = useState("");
  const [model, setModel] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) { // 4MB limit
        toast({
          variant: "destructive",
          title: "Archivo demasiado grande",
          description: "Por favor, sube una imagen de menos de 4MB.",
        });
        e.target.value = ''; // Clear the input
        return;
      }
      setPhotoFile(file);
    }
  };

  const handlePhotoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!photoFile) {
      toast({
        variant: "destructive",
        title: "Falta imagen",
        description: "Por favor, sube una foto del repuesto.",
      });
      return;
    }

    setIsLoading(true);
    setAiResult(null);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(photoFile);
      reader.onloadend = async () => {
        const base64data = reader.result as string;
        const result = await handlePhotoIdentification({
          photoDataUri: base64data,
          description: photoDescription,
        });
        setAiResult(result);
      };
      reader.onerror = () => {
        throw new Error("No se pudo leer el archivo.");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error de IA",
        description:
          error instanceof Error ? error.message : "Ocurrió un error desconocido.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDescriptionSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!partDescription || !model) {
      toast({
        variant: "destructive",
        title: "Faltan datos",
        description: "Por favor, completa la descripción y el modelo.",
      });
      return;
    }

    setIsLoading(true);
    setAiResult(null);

    try {
      const result = await handleTextIdentification({
        partDescription,
        model,
      });
      setAiResult(result);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error de IA",
        description:
          error instanceof Error ? error.message : "Ocurrió un error desconocido.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderResult = () => {
    if (isLoading) {
      return (
        <div className="mt-8 flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed p-8 text-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="font-semibold text-foreground">Identificando repuesto...</p>
            <p className="text-sm text-muted-foreground">La IA está analizando tu solicitud. Esto puede tardar unos segundos.</p>
        </div>
      );
    }

    if (!aiResult) return null;

    if ('partIdentification' in aiResult) { // Photo Identification Result
      const { partIdentification: part } = aiResult;
      if (!part.isIdentified) {
        return <p className="mt-6 text-center text-orange-600 font-medium p-4 bg-orange-100 rounded-md">No se pudo identificar el repuesto. Por favor, intenta con una imagen más clara o contacta a nuestros expertos.</p>
      }
      return (
        <Card className="mt-8 bg-background border-primary shadow-lg">
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2"><Wrench /> Resultado de la Identificación</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-bold text-lg text-foreground">{part.partName}</p>
              <p className="text-sm text-muted-foreground">Número de parte: <span className="font-mono bg-muted py-1 px-2 rounded">{part.partNumber}</span></p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Compatibilidad de Modelos:</h4>
              <p className="text-muted-foreground">{part.modelCompatibility}</p>
            </div>
          </CardContent>
        </Card>
      );
    }
    
    if ('possibleMatches' in aiResult) { // Text Description Result
      return (
         <Card className="mt-8 bg-background border-primary shadow-lg">
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2"><Search /> Resultados de la Búsqueda</CardTitle>
            <CardDescription>{aiResult.confirmation}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <h4 className="font-semibold text-foreground">Posibles Coincidencias:</h4>
            <div className="space-y-4">
              {aiResult.possibleMatches.map((match, index) => (
                <div key={index} className="rounded-md border p-4 bg-card/50">
                  <p className="font-bold text-lg text-foreground">{match.partName}</p>
                  <p className="text-sm text-muted-foreground">Número de parte: <span className="font-mono bg-muted py-1 px-2 rounded">{match.partNumber}</span></p>
                  <p className="mt-2 text-sm text-muted-foreground">{match.compatibilityNotes}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      );
    }

    return null;
  }

  return (
    <section id="ai-finder" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Buscador de Repuestos con IA
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿No estás seguro de qué pieza necesitas? Usa nuestra herramienta inteligente para encontrarla al instante. Sube una foto o describe la pieza que buscas.
          </p>
        </div>

        <Card className="mx-auto mt-12 max-w-2xl shadow-2xl bg-background">
          <CardContent className="p-4 md:p-6">
            <Tabs value={activeTab} onValueChange={(v) => {setActiveTab(v); setAiResult(null);}} className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-muted/60">
                <TabsTrigger value="photo">
                  <Camera className="mr-2 h-4 w-4" /> Buscar por Foto
                </TabsTrigger>
                <TabsTrigger value="description">
                  <Wrench className="mr-2 h-4 w-4" /> Buscar por Descripción
                </TabsTrigger>
              </TabsList>
              <TabsContent value="photo" className="mt-6">
                <form onSubmit={handlePhotoSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="photo-upload" className="mb-2 block text-sm font-medium text-foreground">Foto del Repuesto</label>
                    <Input id="photo-upload" type="file" accept="image/*" onChange={handleFileChange} required className="file:text-primary file:font-semibold" />
                    <p className="mt-2 text-xs text-muted-foreground">Sube una imagen clara de la pieza. Máximo 4MB.</p>
                  </div>
                  <div>
                     <label htmlFor="photo-description" className="mb-2 block text-sm font-medium text-foreground">Descripción Adicional (Opcional)</label>
                    <Textarea
                      id="photo-description"
                      placeholder="Ej: 'Es una pieza del motor, cerca del filtro de aire...'"
                      value={photoDescription}
                      onChange={(e) => setPhotoDescription(e.target.value)}
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full text-lg py-6" disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Camera className="mr-2 h-5 w-5" />}
                    Identificar Repuesto
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="description" className="mt-6">
                 <form onSubmit={handleDescriptionSubmit} className="space-y-6">
                  <div>
                     <label htmlFor="part-description" className="mb-2 block text-sm font-medium text-foreground">Descripción del Repuesto</label>
                    <Textarea
                      id="part-description"
                      placeholder="Ej: 'Necesito la bomba de agua delantera...'"
                      rows={4}
                      value={partDescription}
                      onChange={(e) => setPartDescription(e.target.value)}
                      required
                    />
                  </div>
                   <div>
                     <label htmlFor="model" className="mb-2 block text-sm font-medium text-foreground">Modelo de Mercedes-Benz</label>
                    <Input
                      id="model"
                      placeholder="Ej: 'Clase C 200 año 2019'"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full text-lg py-6" disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Search className="mr-2 h-5 w-5" />}
                    Buscar Repuesto
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            {renderResult()}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
