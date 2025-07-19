// 'use server'
'use server';
/**
 * @fileOverview An AI agent that identifies Mercedes-Benz parts based on a text description.
 *
 * - identifyPartByDescription - A function that handles the part identification process.
 * - IdentifyPartByDescriptionInput - The input type for the identifyPartByDescription function.
 * - IdentifyPartByDescriptionOutput - The return type for the identifyPartByDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IdentifyPartByDescriptionInputSchema = z.object({
  partDescription: z.string().describe('A description of the Mercedes-Benz part needed.'),
  model: z.string().describe('The Mercedes-Benz model the part is for.'),
});
export type IdentifyPartByDescriptionInput = z.infer<typeof IdentifyPartByDescriptionInputSchema>;

const IdentifyPartByDescriptionOutputSchema = z.object({
  possibleMatches: z
    .array(
      z.object({
        partName: z.string().describe('The name of the part.'),
        partNumber: z.string().describe('The part number of the part.'),
        compatibilityNotes: z.string().describe('Notes on the parts compatibility with the model.'),
      })
    )
    .describe('A list of possible matching parts.'),
  confirmation: z.string().describe('Confirmation that the identified part is correct for the specified model.'),
});
export type IdentifyPartByDescriptionOutput = z.infer<typeof IdentifyPartByDescriptionOutputSchema>;

export async function identifyPartByDescription(
  input: IdentifyPartByDescriptionInput
): Promise<IdentifyPartByDescriptionOutput> {
  return identifyPartByDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'identifyPartByDescriptionPrompt',
  input: {schema: IdentifyPartByDescriptionInputSchema},
  output: {schema: IdentifyPartByDescriptionOutputSchema},
  prompt: `You are an expert in Mercedes-Benz auto parts.
  A user is looking for a part for their Mercedes-Benz and will provide a description of the part and the model of their car.
  Identify the correct part, confirm its compatibility with the Mercedes-Benz model, and provide a list of possible matches.

  Part Description: {{{partDescription}}}
  Mercedes-Benz Model: {{{model}}}

  Respond in the following JSON format:
  {
    "possibleMatches": [
      {
        "partName": "string",
        "partNumber": "string",
        "compatibilityNotes": "string"
      }
    ],
    "confirmation": "string"
  }`,
});

const identifyPartByDescriptionFlow = ai.defineFlow(
  {
    name: 'identifyPartByDescriptionFlow',
    inputSchema: IdentifyPartByDescriptionInputSchema,
    outputSchema: IdentifyPartByDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
