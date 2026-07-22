import React, { useState } from 'react';

export default function ProjectShoes({ onBack }) {
  // State untuk melacak gambar aktif di Lightbox (Pop-up)
  const [activeLightbox, setActiveLightbox] = useState(null);

  // Daftar 8 Gambar Project Shoes Anda (Shoe.png s.d Shoe7.png) dari folder public/projects/
  const images = [
    { src: "/projects/Shoe.png", caption: "Halaman Beranda Utama Aplikasi" },       // images[0] -> Fig. 01
    { src: "/projects/Shoe1.png", caption: "Halaman Detil Produk & Spesifikasi" },    // images[1] -> Fig. 07
    { src: "/projects/Shoe2.png", caption: "Halaman Pencarian & Filter Kategori" },  // images[2] -> Fig. 05
    { src: "/projects/Shoe3.png", caption: "Halaman Keranjang & Checkout" },         // images[3] -> Fig. 02
    { src: "/projects/Shoe4.png", caption: "Halaman Pembayaran & Invoice" },         // images[4] -> Fig. 04
    { src: "/projects/Shoe5.png", caption: "Halaman Menu Pengaturan Akun" },         // images[5] -> Fig. 06
    { src: "/projects/Shoe6.png", caption: "Halaman Notifikasi & Riwayat Transaksi" }, // images[6] -> Fig. 03
    { src: "/projects/Shoe7.png", caption: "Halaman Desain Sistem & Panduan Warna" }   // images[7] -> Fig. 08
  ];

  // Fungsi dinamis: Merender gambar dengan rasio asli (h-auto) tanpa pemotongan
  const renderImage = (src, alt, gradient) => {
    if (!src || src === '#' || src.includes('undefined')) {
      return (
        <div className="w-full aspect-[9/16] bg-gradient-to-br from-zinc-100 to-zinc-200 opacity-80 flex items-center justify-center text-zinc-900/10 font-black text-4xl select-none">
          {alt ? alt[0] : 'P'}
        </div>
      );
    }
    return (
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.015]"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentNode.innerHTML = `<div class="w-full aspect-[9/16] bg-gradient-to-br from-zinc-100 to-zinc-200 opacity-80 flex items-center justify-center text-zinc-900/10 font-black text-4xl select-none">${alt ? alt[0] : 'P'}</div>`;
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
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#ca5b00]">Case Study &bull; UI/UX</span>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-8 md:mt-12 space-y-16">
        <div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0e121e]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Project Shoes Mobile UI/UX
          </h1>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Design System"].map(t => (
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

          {/* GRID TAMPILAN ASIMETRIS KONSISTEN (3 Kolom HP sejajar di Mobile dan Desktop) */}
          <div className="grid grid-cols-3 gap-2 md:gap-8 items-start max-w-5xl mx-auto">
            
            {/* KOLOM 1 (KIRI) — Dipergeser turun pt-4 (16px) di mobile, md:pt-16 (64px) di desktop */}
            <div className="flex flex-col gap-2 md:gap-8 pt-4 md:pt-16">
              {/* Fig. 01 */}
              <div 
                onClick={() => setActiveLightbox(images[0])}
                className="mx-auto w-fit border border-zinc-200/80 bg-zinc-50 rounded-lg sm:rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-zinc-350 hover:shadow-md cursor-zoom-in relative group"
              >
                {renderImage(images[0].src, images[0].caption, "from-zinc-100 to-zinc-200")}
                <span className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-[#555555]/90 backdrop-blur-sm text-white text-[9px] sm:text-xs font-mono px-1 md:px-3 py-0.5 md:py-1.5 rounded md:rounded-md tracking-wide shadow-md">
                  <span className="md:hidden">Fig. 01</span>
                  <span className="hidden md:inline">Fig. 01 &mdash; {images[0].caption}</span>
                </span>
              </div>

              {/* Fig. 02 */}
              <div 
                onClick={() => setActiveLightbox(images[3])}
                className="mx-auto w-fit border border-zinc-200/80 bg-zinc-50 rounded-lg sm:rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-zinc-350 hover:shadow-md cursor-zoom-in relative group"
              >
                {renderImage(images[3].src, images[3].caption, "from-zinc-100 to-zinc-200")}
                <span className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-[#555555]/90 backdrop-blur-sm text-white text-[9px] sm:text-xs font-mono px-1 md:px-3 py-0.5 md:py-1.5 rounded md:rounded-md tracking-wide shadow-md">
                  <span className="md:hidden">Fig. 02</span>
                  <span className="hidden md:inline">Fig. 02 &mdash; {images[3].caption}</span>
                </span>
              </div>

              {/* Fig. 03 */}
              <div 
                onClick={() => setActiveLightbox(images[6])}
                className="mx-auto w-fit border border-zinc-200/80 bg-zinc-50 rounded-lg sm:rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-zinc-350 hover:shadow-md cursor-zoom-in relative group"
              >
                {renderImage(images[6].src, images[6].caption, "from-zinc-100 to-zinc-200")}
                <span className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-[#555555]/90 backdrop-blur-sm text-white text-[9px] sm:text-xs font-mono px-1 md:px-3 py-0.5 md:py-1.5 rounded md:rounded-md tracking-wide shadow-md">
                  <span className="md:hidden">Fig. 03</span>
                  <span className="hidden md:inline">Fig. 03 &mdash; {images[6].caption}</span>
                </span>
              </div>
            </div>

            {/* KOLOM 2 (TENGAH) — Dikunci di batas atas (pt-0) untuk kolom paling tinggi */}
            <div className="flex flex-col gap-2 md:gap-8 pt-0">
              {/* Fig. 04 */}
              <div 
                onClick={() => setActiveLightbox(images[4])}
                className="mx-auto w-fit border border-zinc-200/80 bg-zinc-50 rounded-lg sm:rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-zinc-350 hover:shadow-md cursor-zoom-in relative group"
              >
                {renderImage(images[4].src, images[4].caption, "from-zinc-100 to-zinc-200")}
                <span className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-[#555555]/90 backdrop-blur-sm text-white text-[9px] sm:text-xs font-mono px-1 md:px-3 py-0.5 md:py-1.5 rounded md:rounded-md tracking-wide shadow-md">
                  <span className="md:hidden">Fig. 04</span>
                  <span className="hidden md:inline">Fig. 04 &mdash; {images[4].caption}</span>
                </span>
              </div>

              {/* Fig. 05 */}
              <div 
                onClick={() => setActiveLightbox(images[2])}
                className="mx-auto w-fit border border-zinc-200/80 bg-zinc-50 rounded-lg sm:rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-zinc-350 hover:shadow-md cursor-zoom-in relative group"
              >
                {renderImage(images[2].src, images[2].caption, "from-zinc-100 to-zinc-200")}
                <span className="absolute bottom-4 left-4 bg-[#555555]/90 backdrop-blur-sm text-white text-[9px] sm:text-xs font-mono px-3 py-1.5 rounded-md tracking-wide shadow-md">
                  <span className="md:hidden">Fig. 05</span>
                  <span className="hidden md:inline">Fig. 05 &mdash; {images[2].caption}</span>
                </span>
              </div>

              {/* Fig. 06 */}
              <div 
                onClick={() => setActiveLightbox(images[5])}
                className="mx-auto w-fit border border-zinc-200/80 bg-zinc-50 rounded-lg sm:rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-zinc-350 hover:shadow-md cursor-zoom-in relative group"
              >
                {renderImage(images[5].src, images[5].caption, "from-zinc-100 to-zinc-200")}
                <span className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-[#555555]/90 backdrop-blur-sm text-white text-[9px] font-mono px-1 md:px-3 py-0.5 md:py-1.5 rounded md:rounded-md tracking-wide shadow-md">
                  <span className="md:hidden">Fig. 06</span>
                  <span className="hidden md:inline">Fig. 06 &mdash; {images[5].caption}</span>
                </span>
              </div>
            </div>

            {/* KOLOM 3 (KANAN) — Dipergeser turun pt-8 (32px) di mobile, md:pt-32 (128px) di desktop */}
            <div className="flex flex-col gap-2 md:gap-8 pt-8 md:pt-32">
              {/* Fig. 07 */}
              <div 
                onClick={() => setActiveLightbox(images[1])}
                className="mx-auto w-fit border border-zinc-200/80 bg-zinc-50 rounded-lg sm:rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-zinc-350 hover:shadow-md cursor-zoom-in relative group"
              >
                {renderImage(images[1].src, images[1].caption, "from-zinc-100 to-zinc-200")}
                <span className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-[#555555]/90 backdrop-blur-sm text-white text-[9px] font-mono px-1 md:px-3 py-0.5 md:py-1.5 rounded md:rounded-md tracking-wide shadow-md">
                  <span className="md:hidden">Fig. 07</span>
                  <span className="hidden md:inline">Fig. 07 &mdash; {images[1].caption}</span>
                </span>
              </div>

              {/* Fig. 08 */}
              <div 
                onClick={() => setActiveLightbox(images[7])}
                className="mx-auto w-fit border border-zinc-200/80 bg-zinc-50 rounded-lg sm:rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-zinc-350 hover:shadow-md cursor-zoom-in relative group"
              >
                {renderImage(images[7].src, images[7].caption, "from-zinc-100 to-zinc-200")}
                <span className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-[#555555]/90 backdrop-blur-sm text-white text-[9px] font-mono px-1 md:px-3 py-0.5 md:py-1.5 rounded md:rounded-md tracking-wide shadow-md">
                  <span className="md:hidden">Fig. 08</span>
                  <span className="hidden md:inline">Fig. 08 &mdash; {images[7].caption}</span>
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* OVERVIEW SECTION (Deskripsi Bahasa Inggris Diperbarui sesuai Jasa Pemesanan Cuci Sepatu) */}
        <div className="space-y-6 pt-8">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-[#2563eb] uppercase font-mono">OVERVIEW</span>
            <div className="h-[1px] bg-zinc-200 w-full" />
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-[#4b5563] text-left">
            Project Shoes is an interactive, high-fidelity mobile UI/UX design prototype developed in Figma for a premium shoe care, washing, and restoration booking application. Designed with a comprehensive design system, it features intuitive booking flows, custom footwear service catalogs, live tracking of shoe care progress, and a seamless checkout experience.
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