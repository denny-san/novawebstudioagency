
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const VideoLab: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

  const loadingMessages = [
    "Iniciando motores creativos...",
    "Esculpiendo fotogramas con IA...",
    "Renderizando texturas cinematográficas...",
    "Añadiendo toques finales de luz...",
    "Tu visión está casi lista..."
  ];

  useEffect(() => {
    let interval: any;
    if (isGenerating) {
      let i = 0;
      setStatusMessage(loadingMessages[0]);
      interval = setInterval(() => {
        i = (i + 1) % loadingMessages.length;
        setStatusMessage(loadingMessages[i]);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isGenerating]);

  const handleGenerate = async () => {
    if (!prompt) return;

    try {
      // 1. Check/Request API Key
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await window.aistudio.openSelectKey();
        // Billing documentation link: ai.google.dev/gemini-api/docs/billing
      }

      setIsGenerating(true);
      setVideoUrl(null);

      // 2. Initialize AI
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // 3. Start Generation
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: aspectRatio
        }
      });

      // 4. Poll for results
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      // 5. Fetch Video
      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
      }
    } catch (error: any) {
      console.error("Generation failed:", error);
      if (error.message?.includes("Requested entity was not found")) {
        alert("Error de API Key. Por favor selecciona una llave válida con facturación activa.");
        await window.aistudio.openSelectKey();
      } else {
        alert("Ocurrió un error inesperado. Inténtalo de nuevo.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="ai-lab" className="w-full bg-background-darker px-4 py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-[1000px] flex flex-col gap-12">
        <div className="text-center flex flex-col gap-4">
          <div className="inline-flex self-center items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-primary">
            NovaWeb AI Studio
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">Laboratorio Creativo</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Experimenta el futuro del contenido. Genera videos cinematográficos personalizados para tu marca usando Veo 3.1.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-white font-bold text-sm ml-1">Describe tu visión</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ej: Un astronauta de neón caminando por las calles de Tokio en una noche lluviosa, estilo cinematográfico, 4k..."
                className="w-full bg-background-dark border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-primary/50 transition-all resize-none h-32"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex gap-4">
                <button 
                  onClick={() => setAspectRatio('16:9')}
                  className={`px-4 py-2 rounded-xl border transition-all ${aspectRatio === '16:9' ? 'bg-primary border-primary text-white shadow-lg' : 'bg-white/5 border-white/10 text-text-muted hover:border-white/30'}`}
                >
                  <span className="text-sm font-bold">16:9 Horizontal</span>
                </button>
                <button 
                  onClick={() => setAspectRatio('9:16')}
                  className={`px-4 py-2 rounded-xl border transition-all ${aspectRatio === '9:16' ? 'bg-primary border-primary text-white shadow-lg' : 'bg-white/5 border-white/10 text-text-muted hover:border-white/30'}`}
                >
                  <span className="text-sm font-bold">9:16 Vertical</span>
                </button>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={isGenerating || !prompt}
                className={`flex items-center gap-3 px-8 h-14 rounded-2xl font-black text-lg transition-all ${isGenerating || !prompt ? 'bg-white/5 text-white/30 cursor-not-allowed' : 'bg-primary text-white hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(51,154,240,0.4)]'}`}
              >
                {isGenerating ? (
                  <>
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Generando...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">video_spark</span>
                    <span>Generar Video</span>
                  </>
                )}
              </button>
            </div>

            {/* Result Area */}
            <div className="mt-4 aspect-video w-full bg-background-dark rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center relative group">
              {isGenerating ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                  <p className="text-primary font-medium animate-pulse">{statusMessage}</p>
                </div>
              ) : videoUrl ? (
                <video 
                  src={videoUrl} 
                  controls 
                  autoPlay 
                  loop 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-8 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-white/20">movie_creation</span>
                  </div>
                  <p className="text-text-muted">Tu video aparecerá aquí una vez generado</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 text-text-muted/60 text-xs">
          <span className="material-symbols-outlined text-sm">info</span>
          <p>Se requiere una Google API Key de un proyecto con facturación activa (GCP Paid Project).</p>
        </div>
      </div>
    </section>
  );
};

export default VideoLab;
