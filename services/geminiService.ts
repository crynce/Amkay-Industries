
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateProductImage = async (prompt: string): Promise<string | null> => {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: `Professional industrial product photography of a Royal Enfield motorcycle part: ${prompt}. High quality, cinematic lighting, 8k resolution, minimalist studio background.` }]
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image generation failed:", error);
    return null;
  }
};

export const getAssistantResponse = async (history: { role: string, text: string }[], userMessage: string) => {
  try {
    const ai = getAI();
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are the Amkay Precision Assistant. Amkay is a premier manufacturing firm for Royal Enfield parts. 
        You are knowledgeable about motorcycle mechanics, Royal Enfield history (Classic, Bullet, Himalayan, Continental GT, Interceptor), 
        and high-quality manufacturing standards (CNC machining, powder coating, chrome plating). 
        Help customers find the right parts, explain the manufacturing process, or give advice on motorcycle maintenance. 
        Keep your tone professional, authoritative, and helpful.`,
      }
    });

    // In a real app we'd load history, but for simplicity we'll just send the message
    const result = await chat.sendMessage({ message: userMessage });
    return result.text;
  } catch (error) {
    console.error("Chat error:", error);
    return "I apologize, I'm having trouble connecting to my knowledge base right now. Please try again or contact Amkay support directly.";
  }
};
