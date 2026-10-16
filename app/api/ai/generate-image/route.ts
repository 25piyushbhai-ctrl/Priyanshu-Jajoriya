import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY is not configured on the server.' },
        { status: 500 }
      );
    }

    const { prompt, aspectRatio = '16:9', resolution = '1K' } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required for property image generation.' },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    // Validate resolution supported by gemini-3.1-flash-image: "512px" | "1K" | "2K" | "4K"
    const validResolution = ['512px', '1K', '2K', '4K'].includes(resolution)
      ? resolution
      : '1K';

    // Model: gemini-3.1-flash-image
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image',
      contents: {
        parts: [
          {
            text: `High-end luxury architectural photograph, ultra-realistic real estate render in Jaipur Rajasthan, Indian luxury aesthetics: ${prompt}. Professional architectural lighting, 8k detail, photorealistic.`
          }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio as '1:1' | '3:4' | '4:3' | '9:16' | '16:9',
          imageSize: validResolution as '512px' | '1K' | '2K' | '4K'
        }
      }
    });

    let imageUrl: string | null = null;
    let descriptionText: string = '';

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData?.data) {
          const mimeType = part.inlineData.mimeType || 'image/png';
          imageUrl = `data:${mimeType};base64,${part.inlineData.data}`;
        } else if (part.text) {
          descriptionText += part.text;
        }
      }
    }

    if (!imageUrl) {
      return NextResponse.json(
        { error: 'No image could be generated. Please refine your architectural prompt.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      imageUrl,
      description: descriptionText,
      resolution: validResolution,
      aspectRatio
    });
  } catch (err: any) {
    console.error('Image generation error:', err);
    return NextResponse.json(
      { error: err?.message || 'Failed to generate property visualization.' },
      { status: 500 }
    );
  }
}
