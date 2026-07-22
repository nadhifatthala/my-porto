import React, { useState } from 'react';

export default function ProjectSW({ onBack }) {
  const [activeLightbox, setActiveLightbox] = useState(null);

  // Daftar 5 Gambar SwiftpediaCommerce (SW.png s.d SW4.png) dari folder public/projects/
  const images = [
    { src: "/projects/SW.png", caption: "Halaman Beranda Utama — SwiftpediaCommerce" }, // images[0] -> Fig. 01
    { src: "/projects/SW1.png", caption: "Halaman Daftar Produk & Kategori" },         // images[1] -> Fig. 02
    { src: "/projects/SW2.png", caption: "Halaman Detail Produk & Keranjang" },        // images[2] -> Fig. 03
    { src: "/projects/SW3.png", caption: "Halaman Keranjang & Proses Checkout" },       // images[3] -> Fig. 04
    { src: "/projects/SW4.png", caption: "Halaman Detail Transaksi & Pembayaran" }     // images[4] -> Fig. 05
  ];

  // Fungsi dinamis: Merender gambar dengan rasio asli (h-auto) tanpa pemotongan
  const renderImage = (src, alt, gradient) => {
    if (!src || src === '#' || src.includes('undefined')) {
      return (
        <div className="w-full aspect-[16/10] bg-gradient-to-br ${gradient || 'from-zinc-100 to-zinc-200'} opacity-80 flex items-center justify-center text-zinc-900/10 font-black text-4xl select-none">
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
          e.target.parentNode.innerHTML = `<div class="w-full aspect-[16/10] bg-gradient-to-br ${gradient || 'from-zinc-100 to-zinc-200'} opacity-80 flex items-center justify-center text-zinc-900/10 font-black text-4xl select-none">Fig. ${figNum}</div>`;
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
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#ca5b00]">Case Study &bull; E-Commerce</span>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-8 md:mt-12 space-y-16">
        <div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0e121e]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            SwiftpediaCommerce E-Commerce
          </h1>
          <div className="flex flex-wrap gap-2 mt-4">
            {["React.js", "Node.js", "MySQL", "Tailwind CSS"].map(t => (
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

          {/* FIG 01 - TAMPILAN UTAMA (Mendukung Auto Scale & Rapat Tanpa Celah) */}
          <div 
            onClick={() => setActiveLightbox(images[0])} 
            className="mx-auto w-fit border border-zinc-200/80 bg-zinc-50 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-zinc-300 cursor-zoom-in relative group"
          >
            {renderImage(images[0].src, images[0].caption, "from-zinc-100 to-zinc-200")}
            <span className="absolute bottom-4 left-4 bg-[#555555]/90 backdrop-blur-sm text-white text-[9px] sm:text-xs font-mono px-3 py-1.5 rounded-md tracking-wide shadow-md">
              Fig. 01 &mdash; {images[0].caption}
            </span>
          </div>

          {/* GRID UNTUK SISA 4 GAMBAR (Membentuk grid 2x2 yang sangat rapi & rapat) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.slice(1).map((img, idx) => {
              const figNum = String(idx + 2).padStart(2, '0');
              return (
                <div 
                  key={idx} 
                  onClick={() => setActiveLightbox(img)} 
                  className="mx-auto w-fit border border-zinc-200/80 bg-zinc-50 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-zinc-350 hover:shadow-md cursor-zoom-in relative group"
                >
                  <img 
                    src={img.src} 
                    alt={img.caption} 
                    className="max-h-[180px] sm:max-h-[240px] md:max-h-[280px] lg:max-h-[320px] w-auto h-auto block transition-transform duration-500 group-hover:scale-[1.01]" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `<div class="w-full aspect-[16/10] bg-gradient-to-br from-zinc-100 to-zinc-200 opacity-80 flex items-center justify-center text-zinc-900/10 font-black text-2xl select-none relative shadow-inner">${project.title[0]}</div>`;
                    }}
                  />
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
            SwiftpediaCommerce is a modern, full-featured e-commerce platform built with React, Node.js, and MySQL. It features robust user authentication, an interactive product catalog with category filtering, persistent shopping cart management, and automated purchase receipt generation.
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