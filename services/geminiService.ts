
import { GoogleGenAI, Type } from "@google/genai";
import { AdResult } from "../types";

const API_KEY = process.env.API_KEY || "";

export const generateAdDesign = async (
  inputText: string,
  base64Image?: string
): Promise<AdResult> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const prompt = `
    You are MIA, an expert digital marketing assistant for small-scale agricultural and artisanal producers.
    Your task is to take a raw product description and an optional image and transform it into a professional premium advertisement.
    
    User Input: "${inputText}"
    
    Instructions:
    1. Analyze the product and determine its key selling points (e.g., quality, origin, freshness).
    2. Write a catchy, professional headline in Spanish.
    3. Write a persuasive description that adds value (luxury/premium positioning).
    4. Propose a suggested price if not provided, or optimize the provided one.
    5. Suggest a "call to action".
    6. Describe the professional aesthetic this ad should have.

    Return the result strictly as a JSON object.
  `;

  const contents: any[] = [{ text: prompt }];
  
  if (base64Image) {
    contents.push({
      inlineData: {
        mimeType: "image/jpeg",
        data: base64Image.split(',')[1] || base64Image
      }
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: { parts: contents },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING },
            description: { type: Type.STRING },
            callToAction: { type: Type.STRING },
            aestheticDescription: { type: Type.STRING },
            suggestedPrice: { type: Type.STRING },
          },
          required: ["headline", "description", "callToAction", "aestheticDescription", "suggestedPrice"]
        }
      }
    });

    const result = JSON.parse(response.text || "{}");
    return result as AdResult;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("MIA is busy at the moment. Please try again later.");
  }
};
