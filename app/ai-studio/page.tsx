'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import {
  Sparkles,
  Camera,
  Video,
  BrainCircuit,
  Upload,
  Download,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building,
  Send,
  Sliders,
  Layers,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { JAIPUR_LOCALITIES } from '@/data/properties';
import { useSiteVisit } from '@/components/SiteVisitContext';
import { FadeIn } from '@/components/MotionReveal';

export default function AIStudioPage() {
  const { openSiteVisitModal } = useSiteVisit();
  const [activeTab, setActiveTab] = useState<'image' | 'analysis' | 'video' | 'advisor'>('image');

  // ==========================================
  // TAB 1: IMAGE GENERATION (gemini-3.1-flash-image)
  // ==========================================
  const [imgPrompt, setImgPrompt] = useState(
    'Ultra-luxury 5 BHK contemporary villa in Vaishali Nagar Jaipur with Italian marble facade, warm exterior cove lighting, infinity pool, and landscaped courtyard'
  );
  const [imgResolution, setImgResolution] = useState<'1K' | '2K' | '4K' | '512px'>('1K');
  const [imgAspectRatio, setImgAspectRatio] = useState<'16:9' | '1:1' | '4:3' | '9:16'>('16:9');
  const [isGeneratingImg, setIsGeneratingImg] = useState(false);
  const [generatedImgUrl, setGeneratedImgUrl] = useState<string | null>(null);
  const [imgError, setImgError] = useState<string | null>(null);

  const imgPresets = [
    'Ultra-luxury 5 BHK villa in Vaishali Nagar with glass walls, private lawn, and water feature',
    'Palatial Rajasthani heritage haveli in C-Scheme with sandstone jharokhas and modern luxury pool',
    'Sky Penthouse living room overlooking Statue Circle Jaipur at sunset with double-height ceiling',
    'Grade-A corporate glass tower on Tonk Road with biophilic green terraces and executive lounge'
  ];

  const handleGenerateImage = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGeneratingImg(true);
    setImgError(null);

    try {
      const res = await fetch('/api/ai/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: imgPrompt,
          resolution: imgResolution,
          aspectRatio: imgAspectRatio
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to generate architectural visual.');
      setGeneratedImgUrl(data.imageUrl);
    } catch (err: any) {
      setImgError(err.message || 'Image generation encountered an error.');
    } finally {
      setIsGeneratingImg(false);
    }
  };

  // ==========================================
  // TAB 2: PROPERTY ANALYSIS (gemini-3.1-pro-preview with HIGH THINKING)
  // ==========================================
  const [analysisImage, setAnalysisImage] = useState<string | null>(null);
  const [analysisLocality, setAnalysisLocality] = useState('Vaishali Nagar');
  const [analysisPropertyType, setAnalysisPropertyType] = useState('Luxury Villa');
  const [analysisNotes, setAnalysisNotes] = useState('Recently renovated, 4,500 sq.ft, east facing');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAnalysisImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const samplePhotos = [
    {
      label: 'Vaishali Nagar Villa',
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      locality: 'Vaishali Nagar',
      type: 'Independent Villa'
    },
    {
      label: 'C-Scheme Penthouse',
      url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
      locality: 'C-Scheme',
      type: 'Luxury Sky Penthouse'
    },
    {
      label: 'Commercial Retail Hub',
      url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      locality: 'Tonk Road',
      type: 'Commercial Asset'
    }
  ];

  const handleRunAnalysis = async () => {
    setIsAnalyzing(true);
    setAnalysisError(null);
    setAnalysisResult(null);

    try {
      const res = await fetch('/api/ai/analyze-property', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64: analysisImage || undefined,
          locality: analysisLocality,
          propertyType: analysisPropertyType,
          notes: analysisNotes
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to inspect property.');
      setAnalysisResult(data.analysis);
    } catch (err: any) {
      setAnalysisError(err.message || 'Analysis error occurred.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  // ==========================================
  // TAB 3: VIDEO WALKTHROUGH (veo-3.1-lite-generate-preview)
  // ==========================================
  const [videoPrompt, setVideoPrompt] = useState(
    'Cinematic slow drone approach into a modern Jaipur luxury villa with warm evening lighting and water reflections'
  );
  const [videoResolution, setVideoResolution] = useState<'720p' | '1080p' | '4k'>('1080p');
  const [videoAspectRatio, setVideoAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [videoStatusMsg, setVideoStatusMsg] = useState<string>('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoError, setVideoError] = useState<string | null>(null);

  const handleGenerateVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGeneratingVideo(true);
    setVideoError(null);
    setVideoUrl(null);
    setVideoStatusMsg('Initiating Veo cinematic video generation...');

    try {
      // Step 1: Start
      const startRes = await fetch('/api/ai/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: videoPrompt,
          resolution: videoResolution,
          aspectRatio: videoAspectRatio
        })
      });

      const startData = await startRes.json();
      if (!startRes.ok) throw new Error(startData.error || 'Failed to start video synthesis.');

      const opName = startData.operationName;
      setVideoStatusMsg('Rendering video frames with Veo neural model (this typically takes 60–90 seconds)...');

      // Step 2: Poll status
      let isDone = false;
      let attempts = 0;
      const maxAttempts = 30;

      while (!isDone && attempts < maxAttempts) {
        await new Promise((r) => setTimeout(r, 6000));
        attempts++;
        setVideoStatusMsg(`Synthesizing frames with Veo AI... Progress check ${attempts}/${maxAttempts}`);

        const statusRes = await fetch('/api/ai/video-status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ operationName: opName })
        });

        const statusData = await statusRes.json();
        if (statusData.error) throw new Error(statusData.error.message || 'Video generation failed.');
        if (statusData.done) {
          isDone = true;
          break;
        }
      }

      if (!isDone) {
        throw new Error('Video generation took longer than expected. Please try again or adjust duration.');
      }

      // Step 3: Download and display video
      setVideoStatusMsg('Downloading completed high-definition MP4...');
      const downloadRes = await fetch('/api/ai/video-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ operationName: opName })
      });

      if (!downloadRes.ok) throw new Error('Failed to retrieve finalized video stream.');

      const blob = await downloadRes.blob();
      const objUrl = URL.createObjectURL(blob);
      setVideoUrl(objUrl);
      setVideoStatusMsg('Video ready for playback!');
    } catch (err: any) {
      setVideoError(err.message || 'Video synthesis error.');
    } finally {
      setIsGeneratingVideo(false);
    }
  };

  // ==========================================
  // TAB 4: ADVISOR CHAT (gemini-3.1-pro-preview with HIGH THINKING)
  // ==========================================
  const [chatQuestion, setChatQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState<
    Array<{ role: 'user' | 'model'; text: string }>
  >([
    {
      role: 'model',
      text: "Namaste! I am your Senior AI Real Estate Counsel at Property Junction – Jaipur Real Estate. Ask me anything regarding Jaipur property investments, JDA 90A/90B conversion bylaws, RERA compliance, Rajasthan Sub-Registrar stamp duty calculations, or high-growth corridors like Ring Road and Jagatpura."
    }
  ]);
  const [isAskingAdvisor, setIsAskingAdvisor] = useState(false);

  const sampleAdvisorQuestions = [
    'What is the stamp duty calculation in Rajasthan for male vs female buyers on a ₹2 Cr villa?',
    'What are the critical legal checks for JDA Patta vs Society Patta in Jaipur?',
    'Which micro-market offers superior 5-year capital appreciation: Jagatpura or Vaishali Nagar?',
    'How do NRIs transfer funds legally for property registration in Jaipur under FEMA?'
  ];

  const handleAskAdvisor = async (qText?: string) => {
    const query = qText || chatQuestion;
    if (!query.trim()) return;

    const newHistory = [...chatHistory, { role: 'user' as const, text: query }];
    setChatHistory(newHistory);
    setChatQuestion('');
    setIsAskingAdvisor(true);

    try {
      const res = await fetch('/api/ai/investment-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: query,
          conversationHistory: chatHistory
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to consult AI advisor.');

      setChatHistory([...newHistory, { role: 'model', text: data.answer }]);
    } catch (err: any) {
      setChatHistory([
        ...newHistory,
        {
          role: 'model',
          text: `Error contacting senior advisor: ${err.message || 'Please call our hotline at +91 93525 21379.'}`
        }
      ]);
    } finally {
      setIsAskingAdvisor(false);
    }
  };

  return (
    <div className="py-10 space-y-12">
      {/* Header Banner */}
      <div className="bg-[#0F3D2E] text-white py-14 border-b border-[#D4AF37]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Property Junction AI Studio
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            AI Valuation & Architectural Studio
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            Harnessing state-of-the-art Gemini 3.1 and Veo models for luxury Jaipur property visualization, photo condition analysis, video generation, and legal reasoning.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white border border-[#E8E8E2] shadow-sm">
          <button
            onClick={() => setActiveTab('image')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'image'
                ? 'bg-[#0F3D2E] text-white shadow-md'
                : 'text-[#555555] hover:text-[#111111] hover:bg-gray-100'
            }`}
            id="tab-btn-image"
          >
            <Camera className="w-4 h-4 text-[#D4AF37]" />
            <span>AI Villa Concept (1K–4K)</span>
          </button>

          <button
            onClick={() => setActiveTab('analysis')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'analysis'
                ? 'bg-[#0F3D2E] text-white shadow-md'
                : 'text-[#555555] hover:text-[#111111] hover:bg-gray-100'
            }`}
            id="tab-btn-analysis"
          >
            <Layers className="w-4 h-4 text-[#D4AF37]" />
            <span>Property Valuation & Photo Inspection</span>
          </button>

          <button
            onClick={() => setActiveTab('video')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'video'
                ? 'bg-[#0F3D2E] text-white shadow-md'
                : 'text-[#555555] hover:text-[#111111] hover:bg-gray-100'
            }`}
            id="tab-btn-video"
          >
            <Video className="w-4 h-4 text-[#D4AF37]" />
            <span>Veo Video Walkthrough</span>
          </button>

          <button
            onClick={() => setActiveTab('advisor')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'advisor'
                ? 'bg-[#0F3D2E] text-white shadow-md'
                : 'text-[#555555] hover:text-[#111111] hover:bg-gray-100'
            }`}
            id="tab-btn-advisor"
          >
            <BrainCircuit className="w-4 h-4 text-[#D4AF37]" />
            <span>High-Thinking Investment Advisor</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: ARCHITECTURAL CONCEPT GENERATOR */}
        {/* ========================================================================= */}
        {activeTab === 'image' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8E2] shadow-xl space-y-5">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#1D6B52] uppercase tracking-wider">
                  Powered by gemini-3.1-flash-image
                </span>
                <h3 className="text-xl font-extrabold text-[#0F3D2E]">
                  Generate Custom Property Visuals
                </h3>
                <p className="text-xs text-[#555555]">
                  Synthesize photorealistic luxury villas, penthouses, and modern elevations configured for Jaipur architecture.
                </p>
              </div>

              <form onSubmit={handleGenerateImage} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F3D2E] uppercase tracking-wider mb-1.5">
                    Architectural Prompt
                  </label>
                  <textarea
                    rows={4}
                    value={imgPrompt}
                    onChange={(e) => setImgPrompt(e.target.value)}
                    className="w-full p-3.5 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                    placeholder="Describe architectural style, location, pool, lighting, or materials..."
                    id="ai-image-prompt-input"
                  />
                </div>

                {/* Presets */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-semibold text-[#777777]">One-Click Jaipur Presets:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {imgPresets.map((preset, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setImgPrompt(preset)}
                        className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-[#0F3D2E]/10 text-[#0F3D2E] text-[11px] transition-colors text-left"
                      >
                        {preset.slice(0, 42)}...
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Resolution */}
                  <div>
                    <label className="block text-xs font-bold text-[#0F3D2E] uppercase tracking-wider mb-1.5">
                      Output Resolution
                    </label>
                    <select
                      value={imgResolution}
                      onChange={(e) => setImgResolution(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111]"
                      id="ai-image-resolution-select"
                    >
                      <option value="1K">1K Standard HD</option>
                      <option value="2K">2K Quad HD (High Quality)</option>
                      <option value="4K">4K Ultra HD (Masterpiece)</option>
                      <option value="512px">512px Fast Preview</option>
                    </select>
                  </div>

                  {/* Aspect Ratio */}
                  <div>
                    <label className="block text-xs font-bold text-[#0F3D2E] uppercase tracking-wider mb-1.5">
                      Aspect Ratio
                    </label>
                    <select
                      value={imgAspectRatio}
                      onChange={(e) => setImgAspectRatio(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111]"
                      id="ai-image-ratio-select"
                    >
                      <option value="16:9">16:9 Landscape (Hero View)</option>
                      <option value="1:1">1:1 Square (Catalog Card)</option>
                      <option value="4:3">4:3 Standard Photo</option>
                      <option value="9:16">9:16 Vertical (Mobile Reel)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isGeneratingImg}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#0F3D2E] hover:bg-[#1D6B52] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  id="ai-generate-image-submit-btn"
                >
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  {isGeneratingImg ? 'Rendering with gemini-3.1-flash-image...' : 'Generate Architectural Render'}
                </button>
              </form>

              {imgError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{imgError}</span>
                </div>
              )}
            </div>

            {/* Right: Display Output */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8E2] shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#1D6B52] uppercase tracking-wider block mb-2">
                  Render Canvas
                </span>

                {isGeneratingImg ? (
                  <div className="h-96 w-full rounded-2xl bg-gray-50 border border-dashed border-gray-300 flex flex-col items-center justify-center text-center p-6 space-y-3">
                    <div className="w-12 h-12 rounded-full border-4 border-[#0F3D2E] border-t-transparent animate-spin" />
                    <h4 className="text-sm font-bold text-[#0F3D2E]">Synthesizing Architecture...</h4>
                    <p className="text-xs text-[#777777] max-w-xs">
                      Applying natural sunlight, marble textures, and Jaipur regional lighting cues at {imgResolution}.
                    </p>
                  </div>
                ) : generatedImgUrl ? (
                  <div className="space-y-4">
                    <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-md border border-[#E8E8E2]">
                      <Image
                        src={generatedImgUrl}
                        alt="AI generated luxury property"
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#555555]">
                        Quality: {imgResolution} • Ratio: {imgAspectRatio}
                      </span>
                      <a
                        href={generatedImgUrl}
                        download="propertyjunction-concept-render.png"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F3D2E] text-white text-xs font-semibold hover:bg-[#1D6B52]"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download Render
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="h-96 w-full rounded-2xl bg-[#FAFAF8] border border-dashed border-gray-300 flex flex-col items-center justify-center text-center p-6 space-y-2">
                    <Camera className="w-10 h-10 text-gray-400" />
                    <p className="text-sm font-bold text-[#555555]">No Visual Generated Yet</p>
                    <p className="text-xs text-[#777777] max-w-xs">
                      Enter your architectural vision or pick a preset on the left, then click generate.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E8E2] text-[11px] text-[#777777]">
                *Renders are AI-synthesized conceptual blueprints. Contact Property Junction at +91 93525 21379 to review physical plot availability and construction execution.
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: PROPERTY PHOTO INSPECTION & VALUATION */}
        {/* ========================================================================= */}
        {activeTab === 'analysis' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8E2] shadow-xl space-y-5">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#1D6B52] uppercase tracking-wider">
                  Model: gemini-3.1-pro-preview (Thinking Level: High)
                </span>
                <h3 className="text-xl font-extrabold text-[#0F3D2E]">
                  AI Photo Inspection & Valuation
                </h3>
                <p className="text-xs text-[#555555]">
                  Upload a photo of your villa, apartment, or plot to receive an expert condition score, Jaipur rate estimate, and legal diligence checklist.
                </p>
              </div>

              {/* Upload area */}
              <div>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="hidden"
                />

                {analysisImage ? (
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-[#0F3D2E]">
                    <Image
                      src={analysisImage}
                      alt="Uploaded for valuation"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <button
                      type="button"
                      onClick={() => setAnalysisImage(null)}
                      className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2.5 py-1 rounded-lg hover:bg-black"
                    >
                      Change Photo
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="h-44 w-full rounded-2xl border-2 border-dashed border-gray-300 hover:border-[#0F3D2E] bg-[#FAFAF8] flex flex-col items-center justify-center cursor-pointer transition-colors p-4 text-center"
                  >
                    <Upload className="w-8 h-8 text-[#0F3D2E] mb-2" />
                    <span className="text-xs font-bold text-[#111111]">
                      Click to upload property photo
                    </span>
                    <span className="text-[11px] text-[#777777] mt-0.5">
                      Supports JPG, PNG, WEBP (Facade, Interior, or Land)
                    </span>
                  </div>
                )}
              </div>

              {/* Sample Photo Presets */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-[#777777]">Or evaluate sample Jaipur properties:</span>
                <div className="grid grid-cols-3 gap-2">
                  {samplePhotos.map((s, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setAnalysisImage(s.url);
                        setAnalysisLocality(s.locality);
                        setAnalysisPropertyType(s.type);
                      }}
                      className="text-left p-1.5 rounded-xl border border-[#E8E8E2] hover:border-[#0F3D2E] bg-white transition-all text-[10px]"
                    >
                      <div className="relative h-12 w-full rounded-lg overflow-hidden mb-1">
                        <Image src={s.url} alt={s.label} fill className="object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <span className="font-semibold block truncate">{s.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Locality & Type */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#0F3D2E] uppercase tracking-wider mb-1">
                    Locality
                  </label>
                  <select
                    value={analysisLocality}
                    onChange={(e) => setAnalysisLocality(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111]"
                  >
                    {JAIPUR_LOCALITIES.filter((l) => l !== 'All Localities').map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#0F3D2E] uppercase tracking-wider mb-1">
                    Property Type
                  </label>
                  <input
                    type="text"
                    value={analysisPropertyType}
                    onChange={(e) => setAnalysisPropertyType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111]"
                    placeholder="e.g. 4 BHK Villa"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#0F3D2E] uppercase tracking-wider mb-1">
                  Context / Notes
                </label>
                <input
                  type="text"
                  value={analysisNotes}
                  onChange={(e) => setAnalysisNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111]"
                  placeholder="e.g. 300 sq.yard plot, 3 years old, corner facing"
                />
              </div>

              <button
                type="button"
                onClick={handleRunAnalysis}
                disabled={isAnalyzing}
                className="w-full py-3.5 px-6 rounded-xl bg-[#0F3D2E] hover:bg-[#1D6B52] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                id="run-analysis-btn"
              >
                <BrainCircuit className="w-4 h-4 text-[#D4AF37]" />
                {isAnalyzing ? 'Deep Reasoning in Progress...' : 'Run High-Thinking Property Audit'}
              </button>

              {analysisError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{analysisError}</span>
                </div>
              )}
            </div>

            {/* Right: Detailed Analysis Report */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8E2] shadow-xl space-y-4 max-h-[750px] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-[#E8E8E2] pb-3">
                <div>
                  <span className="text-[11px] font-bold text-[#1D6B52] uppercase tracking-wider block">
                    Chief Appraiser Audit
                  </span>
                  <h4 className="text-lg font-bold text-[#0F3D2E]">
                    Comprehensive Valuation Report
                  </h4>
                </div>
                <button
                  onClick={() => openSiteVisitModal()}
                  className="px-3 py-1.5 rounded-lg bg-[#D4AF37] text-[#0F3D2E] text-xs font-bold hover:bg-[#E5C358]"
                >
                  Book In-Person Audit
                </button>
              </div>

              {isAnalyzing ? (
                <div className="py-20 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full border-4 border-[#0F3D2E] border-t-transparent animate-spin mx-auto" />
                  <h4 className="text-base font-bold text-[#0F3D2E]">
                    Gemini 3.1 Pro (High Thinking) Evaluating...
                  </h4>
                  <p className="text-xs text-[#777777] max-w-md mx-auto">
                    Synthesizing current registry transactions in {analysisLocality}, cross-referencing JDA structural standards, and estimating rental yields.
                  </p>
                </div>
              ) : analysisResult ? (
                <div className="prose prose-sm max-w-none text-[#111111] leading-relaxed text-xs space-y-3 whitespace-pre-line">
                  {analysisResult}
                </div>
              ) : (
                <div className="py-20 text-center space-y-3 text-gray-400">
                  <Layers className="w-12 h-12 mx-auto" />
                  <p className="text-sm font-medium text-[#555555]">
                    No report generated yet
                  </p>
                  <p className="text-xs text-[#777777] max-w-sm mx-auto">
                    Upload an image and click &quot;Run High-Thinking Property Audit&quot; to generate an authoritative evaluation.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: VEO VIDEO WALKTHROUGH GENERATION */}
        {/* ========================================================================= */}
        {activeTab === 'video' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8E2] shadow-xl space-y-5">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#1D6B52] uppercase tracking-wider">
                  Model: veo-3.1-lite-generate-preview
                </span>
                <h3 className="text-xl font-extrabold text-[#0F3D2E]">
                  Synthesize Cinematic Video Tours
                </h3>
                <p className="text-xs text-[#555555]">
                  Turn architectural prompts and villa concepts into smooth, camera-stabilized video walkthroughs for buyers and NRIs.
                </p>
              </div>

              <form onSubmit={handleGenerateVideo} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F3D2E] uppercase tracking-wider mb-1.5">
                    Cinematic Camera Prompt
                  </label>
                  <textarea
                    rows={4}
                    value={videoPrompt}
                    onChange={(e) => setVideoPrompt(e.target.value)}
                    className="w-full p-3.5 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                    placeholder="Describe camera movement, lighting, villa entrance, garden walkthrough..."
                    id="ai-video-prompt-input"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F3D2E] uppercase tracking-wider mb-1.5">
                      Resolution
                    </label>
                    <select
                      value={videoResolution}
                      onChange={(e) => setVideoResolution(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111]"
                    >
                      <option value="1080p">1080p Full HD</option>
                      <option value="720p">720p Fast Render</option>
                      <option value="4k">4K Ultra (veo-3.1-generate-preview)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F3D2E] uppercase tracking-wider mb-1.5">
                      Aspect Ratio
                    </label>
                    <select
                      value={videoAspectRatio}
                      onChange={(e) => setVideoAspectRatio(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111]"
                    >
                      <option value="16:9">16:9 Cinematic Landscape</option>
                      <option value="9:16">9:16 Instagram Reel / Mobile</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isGeneratingVideo}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#0F3D2E] hover:bg-[#1D6B52] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  id="generate-video-btn"
                >
                  <Video className="w-4 h-4 text-[#D4AF37]" />
                  {isGeneratingVideo ? 'Synthesizing with Veo AI...' : 'Generate Veo Video Tour'}
                </button>
              </form>

              {videoStatusMsg && (
                <div className="p-3.5 rounded-xl bg-[#FAFAF8] border border-[#E8E8E2] text-xs text-[#0F3D2E] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{videoStatusMsg}</span>
                </div>
              )}

              {videoError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{videoError}</span>
                </div>
              )}
            </div>

            {/* Video Player Display */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8E2] shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#1D6B52] uppercase tracking-wider block mb-3">
                  Veo Video Preview
                </span>

                {isGeneratingVideo ? (
                  <div className="h-96 w-full rounded-2xl bg-black/90 text-white flex flex-col items-center justify-center p-6 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full border-4 border-[#D4AF37] border-t-transparent animate-spin" />
                    <h4 className="text-base font-bold text-white">Veo Video Synthesis Active</h4>
                    <p className="text-xs text-white/70 max-w-sm">
                      Video generation typically takes 1 to 2 minutes. The model is simulating optical motion, reflections, and camera physics.
                    </p>
                  </div>
                ) : videoUrl ? (
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/20">
                      <video
                        src={videoUrl}
                        controls
                        autoPlay
                        loop
                        className="w-full max-h-[440px] object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#555555]">
                        Veo Render Complete • {videoResolution} • {videoAspectRatio}
                      </span>
                      <a
                        href={videoUrl}
                        download="propertyjunction-video-tour.mp4"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0F3D2E] text-white text-xs font-bold hover:bg-[#1D6B52]"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download Video MP4
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="h-96 w-full rounded-2xl bg-[#FAFAF8] border border-dashed border-gray-300 flex flex-col items-center justify-center text-center p-6 space-y-3">
                    <Play className="w-12 h-12 text-gray-400" />
                    <p className="text-sm font-bold text-[#555555]">No Video Generated Yet</p>
                    <p className="text-xs text-[#777777] max-w-xs">
                      Enter a camera prompt and click &quot;Generate Veo Video Tour&quot; to launch the neural renderer.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E8E2] text-[11px] text-[#777777]">
                *Veo video generation uses server-side token polling and outputs genuine MP4 video files.
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: HIGH THINKING INVESTMENT ADVISOR */}
        {/* ========================================================================= */}
        {activeTab === 'advisor' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8E2] shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E8E2] pb-5">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0F3D2E]/10 text-[#0F3D2E] text-[11px] font-bold uppercase tracking-wider mb-1">
                  <BrainCircuit className="w-3.5 h-3.5 text-[#D4AF37]" />
                  gemini-3.1-pro-preview with ThinkingLevel.HIGH
                </div>
                <h3 className="text-2xl font-extrabold text-[#0F3D2E]">
                  Jaipur Real Estate Legal & Investment Strategist
                </h3>
              </div>

              <a
                href="tel:+919352521379"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F3D2E] text-white text-xs font-bold hover:bg-[#1D6B52]"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                Human Advisory Desk: +91 93525 21379
              </a>
            </div>

            {/* Suggested Prompts */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-semibold text-[#777777]">Suggested Legal & Tax Questions:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sampleAdvisorQuestions.map((sq, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleAskAdvisor(sq)}
                    className="p-2.5 rounded-xl bg-[#FAFAF8] hover:bg-[#0F3D2E]/5 border border-[#E8E8E2] text-left text-xs text-[#0F3D2E] font-medium transition-colors"
                  >
                    {sq}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Thread */}
            <div className="space-y-4 max-h-[450px] overflow-y-auto p-4 rounded-2xl bg-[#FAFAF8] border border-[#E8E8E2]">
              {chatHistory.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-2xl p-4 rounded-2xl text-xs leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#0F3D2E] text-white rounded-br-none'
                        : 'bg-white text-[#111111] border border-[#E8E8E2] shadow-xs rounded-bl-none whitespace-pre-line'
                    }`}
                  >
                    <div className="font-bold text-[10px] uppercase tracking-wider mb-1 opacity-70">
                      {msg.role === 'user' ? 'You' : 'Property Junction AI Counsel'}
                    </div>
                    {msg.text}
                  </div>
                </div>
              ))}

              {isAskingAdvisor && (
                <div className="flex justify-start">
                  <div className="max-w-md p-4 rounded-2xl bg-white border border-[#E8E8E2] text-xs text-[#0F3D2E] flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border-2 border-[#0F3D2E] border-t-transparent animate-spin" />
                    <span>Engaging Gemini 3.1 Pro High-Thinking Reasoning...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="flex gap-2">
              <input
                type="text"
                value={chatQuestion}
                onChange={(e) => setChatQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleAskAdvisor();
                  }
                }}
                placeholder="Ask about Rajasthan stamp duty, JDA 90A, RERA, taxation, or Jaipur growth corridors..."
                className="flex-1 px-4 py-3 rounded-xl border border-[#E8E8E2] text-xs bg-[#FAFAF8] text-[#111111] focus:outline-none focus:border-[#D4AF37]"
                id="ai-advisor-input"
              />
              <button
                type="button"
                onClick={() => handleAskAdvisor()}
                disabled={isAskingAdvisor || !chatQuestion.trim()}
                className="px-6 py-3 rounded-xl bg-[#0F3D2E] hover:bg-[#1D6B52] disabled:opacity-50 text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-md"
                id="ai-advisor-send-btn"
              >
                <Send className="w-4 h-4" />
                <span>Consult</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
