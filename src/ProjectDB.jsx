import React, { useState } from 'react';

export default function ProjectDB({ onBack }) {
  const [activeLightbox, setActiveLightbox] = useState(null);

  const images = [
    { src: "/projects/db.png", caption: "Tampilan utama dashboard monitoring" },
    { src: "/projects/db1.png", caption: "Grafik statistik metrik realtime" },
    { src: "/projects/db2.png", caption: "Panel manajemen pengguna & akses" },
    { src: "/projects/db3.png", caption: "Visualisasi analitik database & performa" },
    { src: "/projects/db4.png", caption: "Sistem alert & log notifikasi otomatis" },
    { src: "/projects/db5.png", caption: "Pengaturan integrasi API & workspace" }
  ];

  // Fungsi dinamis: Merender gambar dengan rasio asli (h-auto) tanpa pemotongan
  const renderImage = (src, alt, gradient) => {
    if (!src || src === '#' || src.includes('undefined')) {
      return (
        <div className="w-full aspect-[16/10] bg-gradient-to-br from-zinc-100 to-zinc-200 opacity-80 flex items-center justify-center text-[#fafafb]/30 font-bold text-3xl select-none">
          {alt ? alt[0] : 'P'}
        </div>
      );
    }
    return (
      <img 
        src={src} 
        alt={alt} 
        className="max-w-full max-h-full object-contain block transition-transform duration-500 group-hover:scale-[1.01]" 
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentNode.innerHTML = `<div class="w-full aspect-[16/10] bg-gradient-to-br from-zinc-100 to-zinc-200 opacity-80 flex items-center justify-center text-zinc-900/10 font-black text-4xl select-none">Fig. ${figNum}</div>`;
        }}
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#fafafb] text-[#4b5563] font-sans selection:bg-[#ca5b00] selection:text-white relative overflow-hidden pb-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* HEADER NAVIGASI */}
      <div className="max-w-4xl mx-auto px-6 pt-12 md:pt-16 flex items-center justify-between">
        <button onClick={onBack} className="text-xs sm:text-sm font-bold text-[#0e121e] hover:text-[#ca5b00] transition-colors duration-300 flex items-center gap-2 cursor-pointer group">
          <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Portofolio
        </button>
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#ca5b00]">Case Study &bull; Dashboard</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8 md:mt-12 space-y-16">
        <div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0e121e]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Aetherial Dashboard Platform
          </h1>
          <div className="flex flex-wrap gap-2 mt-4">
            {["PHP", "HTML", "CSS", "MySQL"].map(t => (
              <span key={t} className="text-[10px] sm:text-xs px-3 py-1 bg-white border border-zinc-200 rounded-full font-bold text-zinc-600 shadow-sm">{t}</span>
            ))}
          </div>
        </div>

        {/* TAMPILAN SECTION */}
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-[#2563eb] uppercase font-mono">TAMPILAN</span>
            <div className="h-[1px] bg-zinc-200 w-full" />
          </div>

          {/* GRID TAMPILAN SIMETRIS (Otomatis membentuk tepat 2 baris x 3 kolom di desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => {
              const figNum = String(idx + 1).padStart(2, '0');
              return (
                <div 
                  key={idx} 
                  onClick={() => setActiveLightbox(img)} 
                  // w-fit mx-auto memastikan bingkai menyusut pas memeluk lebar gambar secara presisi tanpa sisa celah kosong
                  className="mx-auto w-fit border border-zinc-200/80 bg-zinc-50 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-zinc-350 hover:shadow-md cursor-zoom-in relative group"
                >
                  <img 
                    src={img.src} 
                    alt={img.caption} 
                    // Membatasi tinggi maksimal agar seragam, rapi, dan border menyusut pas membungkus gambar
                    className="max-h-[180px] sm:max-h-[240px] md:max-h-[280px] lg:max-h-[320px] w-auto h-auto block transition-transform duration-500 group-hover:scale-[1.01]" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `<div class="w-full aspect-[16/10] bg-gradient-to-br from-zinc-100 to-zinc-200 opacity-80 flex items-center justify-center text-zinc-900/10 font-black text-4xl select-none">Fig. ${figNum}</div>`;
                    }}
                  />
                  <span className="absolute bottom-4 left-4 bg-[#555555]/90 backdrop-blur-sm text-white text-[9px] sm:text-xs font-mono px-3 py-1.5 rounded-md tracking-wide shadow-md">
                    Fig. {figNum} &mdash; {img.caption}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* OVERVIEW SECTION */}
        <div className="space-y-6 pt-8">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-[#2563eb] uppercase font-mono">OVERVIEW</span>
            <div className="h-[1px] bg-zinc-200 w-full" />
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-[#4b5563] text-left">
            SaaS dashboard platform designed for real-time telemetry monitoring, database metrics, workspace data analytics, and alert management.
          </p>
        </div>

        <div className="pt-12 text-left border-t border-zinc-200/60">
          <button onClick={onBack} className="px-6 py-3 border border-zinc-300 hover:bg-zinc-100 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 text-zinc-800 flex items-center justify-center gap-2 cursor-pointer">
            &larr; Kembali ke Portofolio
          </button>
        </div>
      </div>

      {/* LIGHTBOX POPUP */}
      {activeLightbox && (
        <div onClick={() => setActiveLightbox(null)} className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-zoom-out animate-fade-in">
          <button onClick={(e) => { e.stopPropagation(); setActiveLightbox(null); }} className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full focus:outline-none cursor-pointer">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-5xl max-h-[80vh] flex items-center justify-center relative select-none">
            <img src={activeLightbox.src} alt={activeLightbox.caption} className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/5 animate-scale-up" />
          </div>
          <p className="mt-6 text-xs sm:text-sm md:text-base font-mono text-zinc-300 text-center max-w-2xl px-4 select-none">{activeLightbox.caption}</p>
        </div>
      )}
    </div>
  );
}