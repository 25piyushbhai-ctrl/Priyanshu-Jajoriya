import { GoogleGenAI, ThinkingLevel } from '@google/genai';
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

    const { imageBase64, mimeType = 'image/jpeg', locality, propertyType, notes } = await req.json();

    const ai = new GoogleGenAI({ apiKey });

    const promptText = `
You are the Chief Valuation Officer and Senior Real Estate Appraiser at Property Junction – Jaipur Real Estate, directed by RK Reddy.
Analyze this property image and data with high-reasoning diligence.

Context provided:
- Target Locality in Jaipur: ${locality || 'Jaipur Prime Region'}
- Stated Property Type: ${propertyType || 'Residential / Commercial'}
- Client Notes: ${notes || 'Standard evaluation'}

Perform a rigorous evaluation focusing on Jaipur real estate market realities:
1. Architectural Style & Build Quality
2. Visible Condition & Finishes Assessment (score out of 10)
3. Estimated Fair Market Valuation per sq.ft in ${locality || 'Jaipur'} based on current market rates
4. Estimated Rental Yield (% per annum)
5. Top 3 Value-Add / Modernization Recommendations to increase property market value
6. Crucial Legal Due Diligence items for this property type in Rajasthan (e.g. JDA 90A/90B Patta, RERA status, Sub-Registrar stamp duty advice).

Provide your response in clear, structured, professional markdown.
`;

    const parts: any[] = [];

    if (imageBase64) {
      // Strip data url prefix if present
      const cleanBase64 = imageBase64.replace(/^data:[^;]+;base64,/, '');
      parts.push({
        inlineData: {
          mimeType,
          data: cleanBase64
        }
      });
    }

    parts.push({ text: promptText });

    // Use gemini-3.1-pro-preview with ThinkingLevel.HIGH
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents: { parts },
      config: {
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.HIGH
        }
      }
    });

    return NextResponse.json({
      analysis: response.text,
      model: 'gemini-3.1-pro-preview (High Thinking Mode)'
    });
  } catch (err: any) {
    console.error('Property analysis error:', err);
    return NextResponse.json(
      { error: err?.message || 'Failed to analyze property photo.' },
      { status: 500 }
    );
  }
}
