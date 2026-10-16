import { GoogleGenAI, GenerateVideosOperation } from '@google/genai';
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

    const { operationName } = await req.json();

    if (!operationName) {
      return NextResponse.json(
        { error: 'operationName is required to download video.' },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const op = new GenerateVideosOperation();
    op.name = operationName;

    const updated = await ai.operations.getVideosOperation({ operation: op });

    const uri = updated.response?.generatedVideos?.[0]?.video?.uri;
    if (!uri) {
      return NextResponse.json(
        { error: 'Video is not yet ready or operation did not produce a video URI.' },
        { status: 404 }
      );
    }

    // Fetch video with x-goog-api-key header
    const videoRes = await fetch(uri, {
      headers: { 'x-goog-api-key': apiKey }
    });

    if (!videoRes.ok) {
      return NextResponse.json(
        { error: `Failed to download video stream from Google servers: ${videoRes.statusText}` },
        { status: 502 }
      );
    }

    const videoBuffer = await videoRes.arrayBuffer();

    return new NextResponse(videoBuffer, {
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Disposition': 'inline; filename="property-junction-walkthrough.mp4"'
      }
    });
  } catch (err: any) {
    console.error('Video download error:', err);
    return NextResponse.json(
      { error: err?.message || 'Failed to download generated video.' },
      { status: 500 }
    );
  }
}
