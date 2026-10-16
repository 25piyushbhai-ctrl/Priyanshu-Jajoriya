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
        { error: 'operationName is required to check video status.' },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const op = new GenerateVideosOperation();
    op.name = operationName;

    const updated = await ai.operations.getVideosOperation({ operation: op });

    return NextResponse.json({
      done: !!updated.done,
      error: updated.error || null
    });
  } catch (err: any) {
    console.error('Video status check error:', err);
    return NextResponse.json(
      { error: err?.message || 'Failed to check video status.' },
      { status: 500 }
    );
  }
}
