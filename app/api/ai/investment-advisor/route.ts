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

    const { question, conversationHistory = [] } = await req.json();

    if (!question) {
      return NextResponse.json(
        { error: 'Question is required.' },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `
You are the Senior Principal Real Estate Counsel and Investment Strategist for Property Junction – Jaipur Real Estate (Hotline/WhatsApp: +91 93525 21379), led by RK Reddy (Real Estate Professional & Digital Creator).
You have over 15 years of specialized expertise in:
1. Jaipur micro-markets (Vaishali Nagar, C-Scheme, Civil Lines, Mansarovar, Jagatpura, Malviya Nagar, Tonk Road, Ajmer Road SEZ).
2. Rajasthan property laws: JDA (Jaipur Development Authority) 90A/90B agricultural to residential conversion, RERA Rajasthan rules, builder-buyer agreements, title deed diligence, Sub-Registrar stamp duties (e.g. 5% for male, 4% for female buyers + 30% surcharge), and registry mechanics.
3. Tax structuring: Long-term capital gains, Section 54 / 54F tax exemptions, NRI remittance (NRE/NRO accounts, Form 15CA/15CB).
4. Rental yields vs Capital growth in Jaipur.

Provide deep, well-reasoned, actionable, objective advice. Structure your response with clear headings, bullet points, and key cautions. Maintain a respectful, sophisticated, luxury advisory tone. Always invite the user to arrange a confidential in-person consultation or site visit with Property Junction at +91 93525 21379.
`;

    // Construct contents from history + current question
    const contents: any[] = [];
    for (const msg of conversationHistory) {
      contents.push({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      });
    }
    contents.push({
      role: 'user',
      parts: [{ text: question }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents,
      config: {
        systemInstruction,
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.HIGH
        }
      }
    });

    return NextResponse.json({
      answer: response.text,
      model: 'gemini-3.1-pro-preview (Thinking Level: High)'
    });
  } catch (err: any) {
    console.error('Investment advisor error:', err);
    return NextResponse.json(
      { error: err?.message || 'Failed to process inquiry with AI advisor.' },
      { status: 500 }
    );
  }
}
