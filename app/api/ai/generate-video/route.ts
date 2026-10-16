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

    const { prompt, imageBase64, mimeType = 'image/png', aspectRatio = '16:9', resolution = '1080p' } = await req.json();

    if (!prompt && !imageBase64) {
      return NextResponse.json(
        { error: 'A prompt or image is required for video generation.' },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    // Model: veo-3.1-lite-generate-preview (or veo-3.1-generate-preview if 4K)
    const model = resolution === '4k' ? 'veo-3.1-generate-preview' : 'veo-3.1-lite-generate-preview';
    const validResolution = resolution === '4k' ? '4k' : resolution === '720p' ? '720p' : '1080p';
    const validAspectRatio = aspectRatio === '9:16' ? '9:16' : '16:9';

    const videoConfig: any = {
      numberOfVideos: 1,
      resolution: validResolution,
      aspectRatio: validAspectRatio
    };

    const generateParams: any = {
      model,
      prompt: prompt || 'Cinematic luxury villa walkthrough in Jaipur with morning sunlight and lush garden.',
      config: videoConfig
    };

    if (imageBase64) {
      const cleanBase64 = imageBase64.replace(/^data:[^;]+;base64,/, '');
      generateParams.image = {
        imageBytes: cleanBase64,
        mimeType: mimeType || 'image/png'
      };
    }

    const operation = await ai.models.generateVideos(generateParams);

    return NextResponse.json({
      operationName: operation.name,
      model,
      status: 'initiated'
    });
  } catch (err: any) {
    console.error('Video generation error:', err);
    return NextResponse.json(
      { error: err?.message || 'Failed to initiate video generation.' },
      { status: 500 }
    );
  }
}
