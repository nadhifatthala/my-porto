// Impor komponen Navbar baru Anda di bagian atas
import Navbar from './Navbar';

// === DATA SUMBER (Kini disesuaikan menjadi 8 Box Keahlian Simetris & Ikon Diperbesar) ===

const skills = [
  {
    title: "Fullstack Dev",
    description: "Building modern web applications with interactive frontends using React.js & Vue.js and structured backends using PHP, MySQL, and REST API.",
    icon: (
      <svg className="w-6 h-6 text-[#ca5b00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Android Dev",
    description: "Develop high-performance, responsive, and optimized Android mobile applications using Flutter.",
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "UI / UX Design",
    description: "Designing information architecture, custom wireframes, and intuitive and aesthetic digital interfaces.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3" />
      </svg>
    )
  },
  {
    title: "Deep Learning",
    description: "Developing Deep Learning models for classification, prediction, and computer vision using TensorFlow, Keras, and Python.",
    icon: (
      <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "App Mobile Design",
    description: "Designing intuitive, user-friendly, and aesthetic mobile app prototypes & interfaces.",
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },{
    title: "Data Visualization",
    description: "Present complex data in easy-to-understand graphs, charts, and interactive dashboards.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    )
  },
  {
    title: "Web Design",
    description: "Modern standard creative website visual design to enhance digital brand identity.",
    icon: (
      <svg className="w-6 h-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Microsoft Skill",
    description: "Mastery of Microsoft Office productivity tools (Excel, Word, PowerPoint) for data analysis & reporting.",
    icon: (
      <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    )
  }
];

const experiences = [
  {
    role: "Research Assistant at Universitas Trunojoyo Madura",
    company: "Tech Horizon Studio",
    period: "2025 - 2026",
    description: "Memimpin migrasi arsitektur web ke React modern, merancang pustaka komponen UI kustom, dan mempercepat pemuatan halaman web utama hingga 35%."
  },
  {
    role: "Internship At Ministry of National Development Planning / National Development Planning Agency (BAPPENAS)",
    company: "Quantum Pixel Agency",
    period: "2025",
    description: "Membangun puluhan situs web klien yang sangat responsif, merancang interaksi mikro animasi yang mulus, dan bekerja erat dengan tim desainer UI/UX."
  }
];

const projects = [
  {
    title: "Aetherial Platform",
    category: "Finance Tech",
    description: "Dasbor analitik keuangan real-time dengan visualisasi grafik interaktif, mode gelap otomatis, dan integrasi API yang aman.",
    tech: ["React", "Tailwind CSS", "Recharts"],
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    link: "#"
  },
  {
    title: "Zenith Workspace",
    category: "SaaS Product",
    description: "Aplikasi manajemen tugas bergaya Kanban papan kolaboratif dengan pembaruan instan dan kustomisasi tema.",
    tech: ["React", "Zustand", "Tailwind CSS"],
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    link: "#"
  },
  {
    title: "Chronicle DevBlog",
    category: "Content Platform",
    description: "Situs publikasi artikel teknologi dengan sistem optimasi pemuatan gambar dan optimasi SEO.",
    tech: ["React", "Markdown", "Tailwind CSS"],
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    link: "#"
  }
];

const certificates = [
  {
    title: "Professional Frontend Architect",
    issuer: "Google / Coursera",
    date: "Desember 2025",
    credentialId: "CRED-GF-998811",
    link: "#"
  },
  {
    title: "React Specialist Certificate",
    issuer: "Dicoding Indonesia",
    date: "Oktober 2025",
    credentialId: "DIC-RX-44321",
    link: "#"
  },
  {
    title: "Advanced System UI & Design Systems",
    issuer: "Interaction Design Foundation",
    date: "Mei 2025",
    credentialId: "IDF-UI-112233",
    link: "#"
  }
];

export default function App() {
  return (
    // Latar belakang menggunakan warna Off-White (#fafafb) dan teks deskripsi abu-abu Slate (#4b5563)
    <div className="min-h-screen bg-[#fafafb] text-[#4b5563] font-sans selection:bg-[#ca5b00] selection:text-white relative overflow-hidden">

      {/* POLA GRID LATAR BELAKANG */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* GLOW EFFECT PREMIUM (Jingga Hangat di Kanan Atas, Indigo Lembut di Kiri) */}
      <div className="absolute top-[-10%] right-[-10%] w-[55%] h-[55%] rounded-full bg-[#ca5b00]/5 blur-[125px] pointer-events-none" />
      <div className="absolute top-[20%] left-[-15%] w-[55%] h-[55%] rounded-full bg-indigo-500/3 blur-[125px] pointer-events-none" />

      {/* KOMPONEN NAVBAR */}
      <Navbar />

      {/* ==========================================
          SECTION 1: HERO (PROFIL - NAMA & FOTO) 
          ========================================== */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        {/* Kontainer diperlebar ke 'max-w-7xl' & jarak antar kolom diperbesar dengan 'gap-12 lg:gap-16' */}
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Kiri: Teks Profil */}
          <div className="md:col-span-7 space-y-2 text-center md:text-left relative z-10">

            {/* Nama & Tagline menggunakan Font Space Grotesk */}
            <div className="space-y-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {/* Teks Nama menggunakan Navy Gelap (#0e121e) */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-[#0e121e]">
                Rayhanza Nadhif Athala <br />
              </h1>
              {/* Tagline menggunakan Jingga Hangat (#ca5b00) */}
              <p className="text-[13px] sm:text-sm lg:text-base uppercase tracking-[0.1em] font-bold text-[#ca5b00]">
                &bull; FullStack Developer &bull; UI /UX Design
              </p>
              <p className="text-[13px] sm:text-sm lg:text-base uppercase tracking-[0.1em] font-bold text-[#ca5b00]">
                &bull; Android Developer  &bull; Deep Learning
              </p>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-[#4b5563] max-w-2xl leading-relaxed">
              Fresh Graduate Fullstack Developer with experience in building web and mobile applications. Interested in UI/UX Design, Android application development, and the implementation of Artificial Intelligence and Deep Learning to create modern, responsive, and user-experience-oriented digital solutions.
            </p>
          </div>

          {/* Kanan: Foto Profil (Dipotong lingkaran sempurna dengan scale-115 untuk menghilangkan border bawaan file) */}
          <div className="md:col-span-5 flex justify-center relative">
            {/* Ornamen */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:12px_12px] opacity-70 pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] [background-size:12px_12px] opacity-70 pointer-events-none" />

            {/* Foto (Bebas dari border putih luar secara rapi) */}
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden">
              <img
                src="/certs/profile.png"
                alt="Rayhanza Nadhif Athala"
                className="
                  w-full
                  h-full
                  object-cover
                  scale-[1.15]
                  opacity-95
                  group-hover:scale-125
                  transition-all
                  duration-500
                "
              />
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 2: SKILLS (TENTANG SKILL) 
          ========================================== */}
      <section id="skills" className="py-32 border-t border-zinc-200/60 px-6 relative">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-4 mb-16">
            <span className="text-5xl sm:text-7xl font-extralight text-black">02.</span>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#ca5b00] font-bold block mb-1">Tech Sklill</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e121e]">SKILL</h2>
            </div>
          </div>

          {/* Grid responsif dengan jarak antarkartu yang lebih lapang: gap-6 md:gap-8 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {skills.map((skill, idx) => (
              <div 
                key={idx} 
                // OPTIMASI: p-4 di mobile agar teks memiliki ruang horizontal luas dan terlihat jauh lebih besar, lg:p-8 di desktop
                className="group bg-white border border-zinc-200/60 rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:border-zinc-350 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Lencana Ikon: w-12 h-12 di mobile agar pas & proporsional, membesar ke lg:w-14 lg:h-14 di desktop */}
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Judul: text-base (16px) di mobile agar terbaca besar & jelas, lg:text-xl di desktop */}
                  <h3 
                    className="text-base sm:text-lg lg:text-xl font-bold text-[#0e121e] mb-1.5 sm:mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {skill.title}
                  </h3>
                  
                  {/* Deskripsi: text-xs (12px) di mobile agar tulisan cukup besar namun pas di 2 kolom, lg:text-sm di desktop */}
                  <p className="text-xs sm:text-[13px] lg:text-sm text-[#4b5563] leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 3: EXPERIENCE (RIWAYAT PENGALAMAN)
          ========================================== */}
      <section id="experience" className="py-32 border-t border-zinc-200/60 px-6 bg-zinc-100/30">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-4 mb-16">
            <span className="text-5xl sm:text-7xl font-extralight text-black">03.</span>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#ca5b00] font-bold block mb-1">History Career</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e121e]">EXPERIENCE</h2>
            </div>
          </div>

          {/* Jalur timeline vertikal dibuat lebih tebal dan lebih gelap (border-l-2 border-zinc-400) */}
          <div className="relative border-l-2 border-zinc-400 pl-8 space-y-2 max-w-2xl mx-auto">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Bulatan diubah menggunakan bg-zinc-900 dan menyala jingga saat disorot */}
                <span className="absolute -left-[41px] top-1.5 w-4.5 h-4.5 rounded-full border-4 border-[#fafaf9] bg-zinc-900 group-hover:bg-[#ca5b00] group-hover:border-orange-100 transition-all duration-300" />

                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 bg-white border border-zinc-200 rounded-full text-xs font-bold text-zinc-500 shadow-sm">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-[#0e121e] group-hover:text-[#ca5b00] transition-colors duration-300">
                    {exp.role} 
                  </h3>
                  <p className="text-[#4b5563] text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 4: PROJECTS (TENTANG PROJECT)
          ========================================== */}
      <section id="projects" className="py-32 border-t border-zinc-200/60 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="flex items-center gap-4 mb-16">
            <span className="text-5xl sm:text-7xl font-extralight text-zinc-300">04.</span>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#ca5b00] font-bold block mb-1">Karya Kode</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e121e]">Showcase Proyek</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="group bg-white border border-zinc-200/80 rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between shadow-[0_15px_40px_-20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-zinc-350 hover:-translate-y-1">
                <div>
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
                  </div>

                  <div className={`w-full h-40 rounded-xl bg-gradient-to-br ${proj.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300 mb-6 flex items-center justify-center text-white/25 font-black text-4xl select-none overflow-hidden relative shadow-inner`}>
                    {proj.title[0]}
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
                  </div>

                  <span className="text-[10px] uppercase tracking-wider text-[#ca5b00] font-bold block mb-2">
                    {proj.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#0e121e] mb-2 group-hover:text-[#ca5b00] transition-colors duration-300">
                    {proj.title}
                  </h3>
                  <p className="text-[#4b5563] text-xs sm:text-sm mb-6 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-zinc-100">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-[10px] px-2.5 py-1 bg-zinc-50 text-zinc-600 rounded-md border border-zinc-200/50 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href={proj.link} className="text-xs font-bold text-zinc-800 hover:text-[#ca5b00] inline-flex items-center gap-1.5 transition-colors duration-300">
                    Kunjungi Demo
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: CERTIFICATES (TENTANG SERTIFIKAT)
          ========================================== */}
      <section id="certificates" className="py-32 border-t border-zinc-200/60 px-6 bg-zinc-100/30">
        <div className="max-w-5xl mx-auto">

          <div className="flex items-center gap-4 mb-16">
            <span className="text-5xl sm:text-7xl font-extralight text-zinc-300">05.</span>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#ca5b00] font-bold block mb-1">Validasi Kompetensi</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e121e]">Sertifikat Akademis</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <div key={idx} className="group bg-white border border-zinc-200/60 hover:border-zinc-350 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_15px_30px_rgba(0,0,0,0.02)]">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#ca5b00] mb-6">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 group-hover:text-[#ca5b00] transition-colors duration-300 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-[#4b5563] text-xs mb-3">{cert.issuer} &bull; {cert.date}</p>
                </div>

                <div className="pt-4 border-t border-zinc-100 mt-6">
                  <p className="text-[10px] text-zinc-400 font-mono mb-3">KREDENSIAL ID: {cert.credentialId}</p>
                  <a href={cert.link} className="text-xs font-semibold text-[#ca5b00] hover:text-[#b45309] inline-flex items-center gap-1.5 transition-colors duration-300">
                    Verifikasi Sertifikasi
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-zinc-200/80 py-16 px-6 text-center text-xs text-[#4b5563] bg-white">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="text-left space-y-1.5">
            <p className="text-[#0e121e] text-base font-bold tracking-tight">Rayhanza Nadhif Athala</p>
            <p className="text-zinc-500 text-xs">Email: emailanda@example.com</p>
            <p className="text-zinc-400 text-[10px]">Tersedia untuk proyek Web Development & UI/UX Design.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-semibold">
            <a href="#home" className="hover:text-zinc-950 transition-colors">01. Profil</a>
            <a href="#skills" className="hover:text-[#ca5b00] transition-colors">02. Skill</a>
            <a href="#experience" className="hover:text-[#ca5b00] transition-colors">03. Experience</a>
            <a href="#projects" className="hover:text-[#ca5b00] transition-colors">04. Project</a>
            <a href="#certificates" className="hover:text-[#ca5b00] transition-colors">05. Certificate</a>
          </div>
        </div>
        <p className="mt-12 text-[10px] text-zinc-400">&copy; {new Date().getFullYear()} Portfolio. Seluruh hak cipta dilindungi.</p>
      </footer>

    </div>
  );
}