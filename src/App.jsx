// Impor komponen Navbar baru Anda di bagian atas
import { useState } from 'react';
import Navbar from './Navbar';

// Impor ke-7 Halaman Detail Proyek Mandiri Anda dengan Casing yang Presisi
import ProjectBappenas from './ProjectBappenas';
import ProjectEdu from './ProjectEdu';
import ProjectDB from './ProjectDB';
import ProjectFlut from './ProjectFlut'; 
import ProjectMT from './ProjectMT'; 
import ProjectSW from './ProjectSW'; 
import ProjectShoes from './ProjectShoes';

// === DATA SUMBER (8 Box Keahlian) ===
const skills = [
  {
    title: 'Fullstack Dev',
    tags: ['React.js', 'Vue.js', 'PHP', 'Laravel', 'MySQL','CSS', 'Json','HTML5','API', 'Wordpress'],
    icon: (
      <svg
        className="w-6 h-6 text-[#ca5b00]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: 'Android Dev',
    tags: ['Flutter', 'Dart', 'Android SDK','API Integration'],
    icon: (
      <svg
        className="w-6 h-6 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'UI / UX Design',
    tags: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
    icon: (
      <svg
        className="w-6 h-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3"
        />
      </svg>
    ),
  },
  {
    title: 'Deep Learning',
    tags: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Computer Vision'],
    icon: (
      <svg
        className="w-6 h-6 text-cyan-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: 'App Mobile Design',
    tags: ['Figma', 'Mobile UI', 'App Prototyping', 'iOS/Android Guidelines'],
    icon: (
      <svg
        className="w-6 h-6 text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Data Visualization',
    tags: ['Recharts', 'Chart.js', 'Dashboard UI', 'Data Analytics'],
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"
        />
      </svg>
    ),
  },
  {
    title: 'Web Design',
    tags: ['Figma', 'Wireframing', 'Prototyping','Design Web'],
    icon: (
      <svg
        className="w-6 h-6 text-rose-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Microsoft Skill',
    tags: ['Excel (Data Analysis)', 'PowerPoint', 'Word', 'Reporting'],
    icon: (
      <svg
        className="w-6 h-6 text-sky-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
      </svg>
    ),
  },
];

const experiences = [
  {
    role: "Research Assistant at Universitas Trunojoyo Madura",
    company: "Tech Horizon Studio",
    period: "2025 - 2026",
    description: "Conducted research on an intelligent rice leaf disease detection system using the MobileNetV2 deep learning model. Contributed to dataset preparation, model development and evaluation, and implemented the trained model into both web and Android applications to provide a practical solution for early rice disease identification."
  },
  {
    role: "Internship At Ministry of National Development Planning / BAPPENAS Republic of Indonesia",
    company: "Quantum Pixel Agency",
    period: "2025",
    description: "Developed an interactive dashboard to visualize stunting and food self-sufficiency information across East Java by integrating geographic and statistical data into an intuitive web-based platform. Additionally, contributed to the development of an AI-powered solution for one of the ministry's internal tools, collaborating with the team to support digital innovation and improve operational efficiency."
  }
];

// === LIST PROYEK DEPAN PORTFOLIO (Ditambahkan properti "types" untuk sistem filter) ===
const projects = [
  {
    id: "bappenas", 
    title: "BAPPENAS GIS Analytics Dashboard",
    category: "Geographic Info System",
    description: "Interactive dashboard visualizing stunting rates and food self-sufficiency index across East Java, integrating complex geographic and statistical data.",
    tech: ["React.js", "Vite", "Leaflet.js", "Tailwind CSS"],
    cover: "/projects/bappenas.png",
    types: ["Web development"] // Kategori filter
  },
  {
    id: "utm",
    title: "UTM Rice Leaf Identifier Mobile App",
    category: "Mobile & Deep Learning",
    description: "Android application designed to detect rice leaf diseases instantly using a MobileNetV2 model trained on crop leaf datasets.",
    tech: ["Kotlin", "Android SDK", "TensorFlow Lite", "MobileNetV2"],
    cover: "/projects/appdev.png",
    types: ["Android Development", "machine learning"] // Masuk ke 2 kategori sekaligus!
  },
  {
    id: "edu", 
    title: "Pembelajaran Budaya Madura",
    category: "UI/UX Design",
    description: "Desain interaktif prototipe aplikasi seluler pembelajaran budaya Madura (EduTech Madura) yang memperkenalkan tarian, musik tradisional, pakaian adat, dan kebudayaan khas pulau Madura secara menarik.",
    tech: ["Figma", "UI/UX", "Prototyping", "Mobile App"],
    cover: "/projects/edu1.png",
    types: ["UI/UX Development"]
  },
  {
    id: "flut", 
    title: "LinguistHero - English Learning App",
    category: "Mobile Application",
    description: "An interactive Android-based English learning application featuring gamified course mastery, quick practice modules, personalized progress metrics, and live announcements.",
    tech: ["Flutter", "Dart", "Android SDK"],
    cover: "/projects/flutter2.png",
    types: ["Android Development"]
  },
  {
    id: "mt", 
    title: "Madura Tour Mobile App",
    category: "Tourism & Cross-Platform",
    description: "A comprehensive mobile tourism application designed to explore local destinations, cultural heritages, and culinary delights across Madura Island.",
    tech: ["Flutter", "Dart", "Android SDK"],
    cover: "/projects/mt1.png",
    types: ["Android Development"]
  },
  {
    id: "db", 
    title: "E-Commerce Klik Indomaret",
    category: "Web Application",
    description: "A web-based e-commerce platform replica of Klik Indomaret featuring secure user authentication, interactive product catalog, shopping cart, and automated purchase receipts.",
    tech: ["PHP", "HTML", "CSS", "MySQL"],
    cover: "/projects/db.png",
    types: ["Web development"]
  },
  {
    id: "sw", 
    title: "SwiftpediaCommerce E-Commerce",
    category: "Web Application",
    description: "A full-featured e-commerce platform built with React, Node.js, and MySQL, featuring modern product catalogs, persistent shopping carts, and dynamic transaction flows.",
    tech: ["React.js", "Node.js", "MySQL", "Tailwind CSS"],
    cover: "/projects/SW.png",
    types: ["Web development"]
  },
  {
    id: "shoes", // ID pemicu kustom Anda
    title: "Kilau Bersih - App Design",
    category: "UI/UX Design",
    description: "An interactive, high-fidelity mobile UI/UX design prototype developed in Figma for a premium shoe care, washing, and restoration booking application. ",
    tech: ["Figma", "UI/UX", "Prototyping", "Design System"],
    cover: "/projects/Shoe.png",
    types: ["UI/UX Development"]// Menggunakan gambar utama Shoe.png langsung sebagai cover depan
  }        
];

const certificates = [
  {
    title: "Intro Software Engineering",
    issuer: "Dicoding Indonesia",
    date: "RevoU - 2026",
    desc: "Spesialisasi React tingkat lanjut yang mencakup state management modern, siklus hidup hooks, dan rendering sisi server.",
    image: "/certs/image10.png", 
    link: "/certs/image10.png"
  },
  {
    title: "Internship at BAPPENAS RI",
    issuer: "BAPPENAS RI",
    date: "BAPPENAS RI - 2025",
    desc: "Penguasaan sistem desain komprehensif, pedoman gaya komponen, struktur tata letak, dan alur kerja desain ke kode.",
    image: "/certs/image6.png", 
    link: "/certs/image6.png"
  },
  {
    title: "Test of English as a Foreign Language (TOEFL)",
    issuer: "Interaction Design Foundation",
    date: "Universitas Trundojoyo Madura - 2026",
    desc: "Penguasaan sistem desain komprehensif, pedoman gaya komponen, struktur tata letak, dan alur kerja desain ke kode.",
    image: "/certs/toefl.jpg", 
    link: "/certs/toefl.jpg"
  },
  {
    title: "Figma for UI/UX Mbile App",
    issuer: "Interaction Design Foundation",
    date: "Kelas Work - 2026",
    desc: "Penguasaan sistem desain komprehensif, pedoman gaya komponen, struktur tata letak, dan alur kerja desain ke kode.",
    image: "/certs/mobile.png", 
    link: "/certs/mobile.png"
  },
  {
    title: "Graphic Design and UI/UX",
    issuer: "Interaction Design Foundation",
    date: "DiBimbing - 2026",
    desc: "Penguasaan sistem desain komprehensif, pedoman gaya komponen, struktur tata letak, dan alur kerja desain ke kode.",
    image: "/certs/image5.png", 
    link: "/certs/image5.png"
  }
];

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState(null);
  
  // State baru untuk melacak gambar aktif sertifikat yang dibuka (Pop-up)
  const [activeCertImg, setActiveCertImg] = useState(null);

  // State baru khusus untuk mengelola filter kategori proyek yang dipilih
  const [projectFilter, setProjectFilter] = useState('All');

  // Menangani pemicu halaman detail proyek
  const handleProjectClick = (id) => {
    setActiveProjectId(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // === DYNAMIC COMPONENT STATE ROUTING ===
  if (activeProjectId === 'bappenas') {
    return <ProjectBappenas onBack={() => { setActiveProjectId(null); window.scrollTo({ top: 0, behavior: 'instant' }); }} />;
  }
  if (activeProjectId === 'utm') {
    return <ProjectUtm onBack={() => { setActiveProjectId(null); window.scrollTo({ top: 0, behavior: 'instant' }); }} />;
  }
  if (activeProjectId === 'edu') {
    return <ProjectEdu onBack={() => { setActiveProjectId(null); window.scrollTo({ top: 0, behavior: 'instant' }); }} />;
  }
  if (activeProjectId === 'flut') { 
    return <ProjectFlut onBack={() => { setActiveProjectId(null); window.scrollTo({ top: 0, behavior: 'instant' }); }} />;
  }
  if (activeProjectId === 'mt') { 
    return <ProjectMT onBack={() => { setActiveProjectId(null); window.scrollTo({ top: 0, behavior: 'instant' }); }} />;
  }
  if (activeProjectId === 'db') { 
    return <ProjectDB onBack={() => { setActiveProjectId(null); window.scrollTo({ top: 0, behavior: 'instant' }); }} />;
  }
  if (activeProjectId === 'sw') { 
    return <ProjectSW onBack={() => { setActiveProjectId(null); window.scrollTo({ top: 0, behavior: 'instant' }); }} />;
  }
  if (activeProjectId === 'shoes') { // <-- Tambahkan logika rute untuk proyek ProjectShoes baru Anda!
  return <ProjectShoes onBack={() => { setActiveProjectId(null); window.scrollTo({ top: 0, behavior: 'instant' }); }} />;
}

  // === LOGIKA PENYARINGAN PROYEK SECARA DINAMIS ===
  const filteredProjects = projectFilter === 'All'
    ? projects
    : projects.filter(proj => proj.types && proj.types.includes(projectFilter));

  return (
    // Latar belakang menggunakan warna Off-White (#fafafb) dan teks deskripsi abu-abu Slate (#4b5563)
    <div className="min-h-screen bg-[#fafafb] text-[#4b5563] font-sans selection:bg-[#ca5b00] selection:text-white relative overflow-hidden pb-24">

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
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Kiri: Teks Profil */}
          <div className="md:col-span-7 space-y-1 text-center md:text-left relative z-10">
            

            <div className="space-y-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-[#0e121e]">
                Rayhanza Nadhif Athala <br />
              </h1>
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
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:12px_12px] opacity-70 pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] [background-size:12px_12px] opacity-70 pointer-events-none" />

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
      <section
        id="skills"
        className="py-32 border-t border-zinc-200/60 px-6 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-5xl sm:text-7xl font-extralight text-black">
              02.
            </span>

            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#ca5b00] font-bold block mb-1">
                Tech Skills
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e121e]">
                SKILLS
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <div
                key={`${skill.title}-${index}`}
                className="group bg-white border border-zinc-200/60 rounded-2xl p-4 sm:p-6 lg:p-8 h-[230px] sm:h-[250px] lg:h-[245px] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:border-zinc-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-2 lg:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>

                  <h3
                    className="text-base sm:text-lg lg:text-xl font-bold text-[#0e121e] mb-1.5 sm:mb-3"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {skill.title}
                  </h3>

                  {/* KINI DIUBAH MENJADI SISTEM TAG MINIMALIS */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-[13px] px-2 py-0.5 sm:py-1 bg-zinc-50 text-zinc-600 rounded-md border border-zinc-200/30 font-medium transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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

          {/* DYNAMIC TIMELINE CONTAINER */}
          <div className="relative max-w-2xl mx-auto">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group pl-10 pb-12">
                
                {/* 
                  SEGMEN GARIS VERTIKAL (Menyesuaikan posisi bulatan Anda di top-[108px])
                  - top-[116px] memulai pas dari tengah bulatan pertama (mencegah kebocoran garis ke atas)
                  - bottom-[-110px] menarik garis ke bawah melintasi pb-12 untuk menyentuh bulatan kedua pas di posisi top-[108px]
                */}
                {idx !== experiences.length - 1 && (
                  <span className="absolute left-[8px] top-[116px] bottom-[-110px] w-0.5 bg-zinc-400" />
                )}

                {/* Bulatan timeline dipertahankan pas di posisi top-[108px] sesuai keinginan Anda */}
                <span className="absolute left-0 top-[108px] z-10 w-4.5 h-4.5 rounded-full border-4 border-[#fafaf9] bg-zinc-900 group-hover:bg-[#ca5b00] group-hover:border-orange-100 transition-all duration-300" />

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
        <div className="max-w-5xl mx-auto"> {/* Dikembalikan ke max-w-5xl untuk keseimbangan visual 3 baris */}

          <div className="flex items-center gap-4 mb-8 sm:mb-16"> {/* mb-16 diubah menjadi mb-8 sm:mb-16 agar filter lebih ke atas di mobile */}
            <span className="text-5xl sm:text-7xl font-extralight text-black">04.</span>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#ca5b00] font-bold block mb-1">Code Projects</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e121e]">Projects</h2>
            </div>
          </div>

          {/* TAB FILTER PROYEK (Rata kiri di mobile di bawah tombol "Semua", tengah di desktop) */}
          <div 
            className="flex flex-wrap gap-1.5 sm:gap-3 mb-12 px-6 -mx-6 sm:mx-0 justify-start sm:justify-center"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {[
              { id: 'All', label: 'Semua' },
              { id: 'Web development', label: 'Web Development' },
              { id: 'Android Development', label: 'Android Development' },
              { id: 'machine learning', label: 'Machine Learning' },
              { id: 'UI/UX Development', label: 'UI/UX Development' }
            ].reduce((acc, filter, index) => {
              // Sisipkan pemisah baris khusus di mobile sebelum filter ke-4 (Machine Learning)
              if (index === 3) {
                acc.push(
                  <div key="line-break" className="basis-full h-0 sm:hidden" />
                );
              }

              acc.push(
                <button
                  key={filter.id}
                  onClick={() => setProjectFilter(filter.id)}
                  className={`flex-shrink-0 px-2.5 py-1 sm:px-5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold transition-all duration-300 border cursor-pointer ${
                    projectFilter === filter.id
                      ? 'bg-zinc-950 border-zinc-950 text-white shadow-md'
                      : 'bg-white border-zinc-200 text-zinc-500 hover:text-zinc-800 hover:border-zinc-300'
                  }`}
                >
                  {filter.label}
                </button>
              );
              return acc;
            }, [])}
          </div>

          {/* GRID TATA LETAK: Menyajikan filteredProjects secara dinamis dalam format 3 kolom */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj, idx) => (
              <div key={proj.id} className="group bg-white border border-zinc-200/80 rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between shadow-[0_15px_40px_-20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-zinc-350 hover:-translate-y-1">
                <div>
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
                  </div>

                  {/* BOX GAMBAR COVER PROYEK */}
                  <div className="w-full h-40 rounded-xl overflow-hidden border border-zinc-200/50 bg-zinc-50 relative mb-6 shadow-inner flex items-center justify-center">
                    <img 
                      src={proj.cover} 
                      alt={proj.title} 
                      className="w-full h-full object-cover transition-transform duration-555 group-hover:scale-105"
                    />
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

                  <button
                    onClick={() => handleProjectClick(proj.id)}
                    className="text-xs font-bold text-zinc-800 hover:text-[#ca5b00] inline-flex items-center gap-1.5 transition-colors duration-300 cursor-pointer"
                  >
                    Lihat Detail Projek
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
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
            <span className="text-5xl sm:text-7xl font-extralight text-black">05.</span>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#ca5b00] font-bold block mb-1">Certificates</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e121e]">Certificates</h2>
            </div>
          </div>

          {/* Grid 3 Kolom Sejajar */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((proj, idx) => (
              <div 
                key={idx} 
                // Kapsul bodi utama diset 'relative', tinggi 'aspect-[4/3]', tumpul, dan menyembunyikan sisa sudut (overflow-hidden)
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1 flex flex-col justify-end"
              >
                {/* 1. GAMBAR LATAR BELAKANG SEPENUH KOTAK (FULL BOX BACKGROUND IMAGE) */}
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* 2. GRADIENT GELAP SEMI-TRANSPARAN (Overlay penyeimbang kontras teks di depan gambar) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20 transition-opacity duration-300 group-hover:via-black/60 z-10" />

                {/* 3. TULISAN INFORMASI MELAYANG DI DEPAN GAMBAR */}
                <div className="relative z-20 p-5 flex flex-col justify-between h-full w-full text-left">
                  {/* Bagian Atas: Nama Penerbit */}
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-white block mb-3">
                      
                    </span>
                  </div>

                  {/* Bagian Bawah: Judul Utama, Tanggal Terbit, dan Tombol Akses */}
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-white font-space leading-snug group-hover:text-orange-300 transition-colors duration-300">
                      {proj.title}
                    </h3>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-white/15">
                      <span className="text-white text-xs font-medium">{proj.date}</span>
                      
                      {/* Mengubah tag <a> menjadi <button> kustom untuk memicu popup Lightbox */}
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setActiveCertImg({ src: proj.image, title: proj.title });
                        }}
                        className="text-zinc-200 hover:text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors duration-300 cursor-pointer focus:outline-none"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        View
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================
          MODAL LIGHTBOX SCREEN (Pop-up Gambar Layar Penuh)
          ======================================================= */}
      {activeCertImg && (
        <div 
          onClick={() => setActiveCertImg(null)} // Klik di luar gambar untuk menutup modal
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-zoom-out"
        >
          {/* Tombol Silang (X) Penutup */}
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Mencegah bentrok dengan onClick penutup area luar
              setActiveCertImg(null);
            }}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 focus:outline-none cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Frame Gambar Lightbox */}
          <div 
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup ketika gambar di-klik
            className="max-w-4xl max-h-[80vh] flex items-center justify-center relative select-none cursor-default"
          >
            <img 
              src={activeCertImg.src} 
              alt={activeCertImg.title} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
          </div>

          {/* Caption di bagian bawah Lightbox */}
          <p className="mt-6 text-sm md:text-base font-space font-bold text-white text-center max-w-2xl px-4 select-none">
            {activeCertImg.title}
          </p>
        </div>
      )}

      {/* FOOTER */}
      <footer id="contact" className="border-t border-zinc-200/80 py-16 px-6 text-center text-xs text-zinc-500 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="text-left space-y-1.5">
            <p className="text-zinc-950 text-base font-bold tracking-tight">Rayhanza Nadhif Athala</p>
            <p className="text-zinc-500 text-xs">Email: nadhifatthala@gmail.com</p>
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