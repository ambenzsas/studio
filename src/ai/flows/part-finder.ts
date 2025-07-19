// Part-finder.ts
'use server';
/**
 * @fileOverview An AI agent that identifies Mercedes-Benz parts from an image.
 *
 * - photoPartIdentification - A function that handles the part identification process.
 * - PhotoPartIdentificationInput - The input type for the photoPartIdentification function.
 * - PhotoPartIdentificationOutput - The return type for the photoPartIdentification function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PhotoPartIdentificationInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a Mercedes-Benz part, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  description: z.string().optional().describe('The description of the part.'),
});
export type PhotoPartIdentificationInput = z.infer<typeof PhotoPartIdentificationInputSchema>;

const PhotoPartIdentificationOutputSchema = z.object({
  partIdentification: z.object({
    isIdentified: z.boolean().describe('Whether or not the part is identified.'),
    partName: z.string().describe('The name of the identified part.'),
    partNumber: z.string().describe('The part number of the identified part.'),
    modelCompatibility: z.string().describe('The Mercedes-Benz models that the part is compatible with.'),
  }),
});
export type PhotoPartIdentificationOutput = z.infer<typeof PhotoPartIdentificationOutputSchema>;

export async function photoPartIdentification(input: PhotoPartIdentificationInput): Promise<PhotoPartIdentificationOutput> {
  return photoPartIdentificationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'photoPartIdentificationPrompt',
  input: {schema: PhotoPartIdentificationInputSchema},
  output: {schema: PhotoPartIdentificationOutputSchema},
  prompt: `You are an expert in identifying Mercedes-Benz auto parts.

You will use this information to identify the part, its part number, and the Mercedes-Benz models it is compatible with. You will make a determination as to whether the part is identifiable or not, and set the isIdentified output field appropriately.

Use the following as the primary source of information about the part.

Description: {{{description}}}
Photo: {{media url=photoDataUri}}`,
});

const photoPartIdentificationFlow = ai.defineFlow(
  {
    name: 'photoPartIdentificationFlow',
    inputSchema: PhotoPartIdentificationInputSchema,
    outputSchema: PhotoPartIdentificationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
