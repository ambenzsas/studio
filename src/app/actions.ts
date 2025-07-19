"use server";

import {
  photoPartIdentification,
  type PhotoPartIdentificationInput,
  type PhotoPartIdentificationOutput,
} from "@/ai/flows/part-finder";
import {
  identifyPartByDescription,
  type IdentifyPartByDescriptionInput,
  type IdentifyPartByDescriptionOutput,
} from "@/ai/flows/part-description";

export async function handlePhotoIdentification(
  input: PhotoPartIdentificationInput
): Promise<PhotoPartIdentificationOutput> {
  try {
    const result = await photoPartIdentification(input);
    return result;
  } catch (error) {
    console.error("Error in photo identification flow:", error);
    throw new Error("Failed to identify part from photo.");
  }
}

export async function handleTextIdentification(
  input: IdentifyPartByDescriptionInput
): Promise<IdentifyPartByDescriptionOutput> {
  try {
    const result = await identifyPartByDescription(input);
    return result;
  } catch (error) {
    console.error("Error in text identification flow:", error);
    throw new Error("Failed to identify part from description.");
  }
}

export type { PhotoPartIdentificationOutput, IdentifyPartByDescriptionOutput };
