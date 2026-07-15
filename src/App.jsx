import { useEffect, useState } from 'react';
import Navbar from './Navbar';

// Halaman detail proyek
import ProjectBappenas from './ProjectBappenas';
import ProjectUtm from './ProjectUTM';
import ProjectEdu from './ProjectEdu';
import ProjectDB from './ProjectDB';
import ProjectFlut from './ProjectFlut';
import ProjectMT from './ProjectMT';


// ==========================================
// DATA SKILLS (Diubah Menggunakan Sistem Tag)
// ==========================================
const skills = [
  {
    title: 'Fullstack Dev',
    tags: ['React.js', 'Vue.js', 'PHP', 'Laravel', 'MySQL','CSS', 'Json','HTML5','API'],
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

// ==========================================
// DATA EXPERIENCE
// ==========================================
const experiences = [
  {
    role: 'Research Assistant at Universitas Trunojoyo Madura',
    company: 'Universitas Trunojoyo Madura',
    period: '2025 - 2026',
    description:
      'Conducted research on an intelligent rice leaf disease detection system using the MobileNetV2 deep learning model. Contributed to dataset preparation, model development and evaluation, and implemented the trained model into both web and Android applications to provide a practical solution for early rice disease identification.',
  },
  {
    role: 'Internship at Ministry of National Development Planning / BAPPENAS Republic of Indonesia',
    company: 'Ministry of National Development Planning / BAPPENAS',
    period: '2025',
    description:
      "Developed an interactive dashboard to visualize stunting and food self-sufficiency information across East Java by integrating geographic and statistical data into an intuitive web-based platform. Additionally, contributed to the development of an AI-powered solution for one of the ministry's internal tools, collaborating with the team to support digital innovation and improve operational efficiency.",
  },
];

// ==========================================
// DATA PROJECT
// ==========================================
const projects = [
  {
    id: 'bappenas',
    title: 'BAPPENAS GIS Analytics Dashboard',
    category: 'Geographic Info System',
    description:
      'Interactive dashboard visualizing stunting rates and food self-sufficiency index across East Java, integrating complex geographic and statistical data.',
    tech: ['HTML', 'JSON', 'Leaflet.js', 'CSS'],
    cover: '/projects/bappenas.png',
  },
  ,
  {
    id: "db", // <-- MENDAFTARKAN PROYEK KE-6 BARU ANDA!
    title: "Aetherial Dashboard Platform",
    category: "SaaS & Data Analytics",
    description: "SaaS dashboard platform designed for real-time telemetry monitoring, database metrics, workspace data analytics, and alert management.",
    tech: ["PHP", "HTML", "CSS", "MySQL"],
    cover: "/projects/db.png" 
  },
  {
    id: 'utm',
    title: 'UTM Rice Leaf Identifier Mobile App',
    category: 'Mobile & Deep Learning',
    description:
      'Android application designed to detect rice leaf diseases instantly using a MobileNetV2 model trained on crop leaf datasets.',
    tech: [
      'Flutter',
      'TensorFlow Lite',
      'MobileNetV2',
    ],
    cover: '/projects/appdev.png',
  },
  {
    id: 'edu',
    title: 'Academic EduPortal & Analytics Center',
    category: 'Education Tech',
    description:
      'Interactive design prototype of Madurese cultural learning mobile application (EduTech Madura) which introduces dance, traditional music, traditional clothing, and the unique culture of Madura Island in an interesting way.',
    tech: ['Mobile App', 'UI/UX', 'Design', 'Figma'],
    cover: '/projects/edu1.png',
  },
  {
    id: 'flut',
    title: 'Flutter Mobile Application',
    category: 'Mobile & Cross-Platform',
    description:
      'An interactive Android-based English learning application featuring gamified course mastery, quick practice modules, personalized progress metrics, and live announcements.',
    tech: ['Flutter', 'Dart', 'Android SDK'],
    cover: '/projects/flutter2.png',
  },
  {
    id: 'mt',
    title: 'Madura Tour Mobile App',
    category: 'Tourism & Cross-Platform',
    description:
      'A comprehensive mobile tourism application designed to explore local destinations, cultural heritages, and culinary delights across Madura Island.',
    tech: ['Flutter', 'Dart', 'Android SDK'],
    cover: '/projects/mt1.png',
  },
];

// ==========================================
// DATA CERTIFICATES
// ==========================================
const certificates = [
  {
    title: 'Junior Web Developer (VSGA)',
    issuer: 'Kementerian Kominfo RI',
    date: 'DiBimbing - 2026',
    desc: 'Sertifikasi kompetensi resmi Junior Web Developer melalui skema Vocational School Graduate Academy (VSGA).',
    image: '/certs/cyber.png',
  },
  {
    title: 'Intro Software Engineering',
    issuer: 'Dicoding Indonesia',
    date: 'RevoU - 2026',
    desc: 'Sertifikasi penyelesaian program pelatihan dasar rekayasa perangkat lunak berskala intensif.',
    image: '/certs/image10.png',
  },
  {
    title: 'Internship at BAPPENAS RI',
    issuer: 'BAPPENAS RI',
    date: 'BAPPENAS RI - 2025',
    desc: 'Sertifikat pengalaman magang di Kementerian Perencanaan Pembangunan Nasional/BAPPENAS.',
    image: '/certs/image6.png',
  },
  {
    title: 'Test of English as a Foreign Language (TOEFL)',
    issuer: 'Universitas Trunojoyo Madura',
    date: 'Universitas Trunojoyo Madura - 2026',
    desc: 'Sertifikat kemampuan bahasa Inggris melalui Test of English as a Foreign Language.',
    image: '/certs/toefl.jpg',
  },
  {
    title: 'Figma for UI/UX Mobile App',
    issuer: 'Kelas Work',
    date: 'Kelas Work - 2026',
    desc: 'Pelatihan perancangan UI/UX aplikasi mobile menggunakan Figma, wireframe, prototype, dan design system.',
    image: '/certs/mobile.png',
  },
  {
    title: 'Graphic Design and UI/UX',
    issuer: 'DiBimbing',
    date: 'DiBimbing - 2026',
    desc: 'Pelatihan desain grafis dan UI/UX untuk membuat tampilan digital yang menarik dan mudah digunakan.',
    image: '/certs/image5.png',
  },
  {
    title: 'Internship Certificate',
    issuer: 'BAPPENAS RI',
    date: 'BAPPENAS RI - 2025',
    desc: 'Sertifikat pengalaman magang dan kontribusi pengembangan dashboard serta fitur digital.',
    image: '/certs/image6.png',
  },
];

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState(null);

  // Menyimpan data sertifikat yang sedang dibuka
  const [activeCertificate, setActiveCertificate] = useState(null);

  // ==========================================
  // MODAL CERTIFICATE EFFECT
  // ==========================================
  useEffect(() => {
    if (!activeCertificate) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveCertificate(null);
      }
    };

    const previousOverflow = document.body.style.overflow;

    // Mencegah halaman belakang ikut bergerak
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [activeCertificate]);

  // ==========================================
  // PROJECT HANDLER
  // ==========================================
  const handleProjectClick = (id) => {
    setActiveProjectId(id);
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  };

  const handleBackProject = () => {
    setActiveProjectId(null);

    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  };

  // ==========================================
  // DYNAMIC PROJECT ROUTING
  // ==========================================
  if (activeProjectId === 'bappenas') {
    return <ProjectBappenas onBack={handleBackProject} />;
  }

  if (activeProjectId === 'utm') {
    return <ProjectUtm onBack={handleBackProject} />;
  }

  if (activeProjectId === 'edu') {
    return <ProjectEdu onBack={handleBackProject} />;
  }

  if (activeProjectId === 'db') {
    return <ProjectDB onBack={handleBackProject} />;
  }

  if (activeProjectId === 'flut') {
    return <ProjectFlut onBack={handleBackProject} />;
  }

  if (activeProjectId === 'mt') {
    return <ProjectMT onBack={handleBackProject} />;
  }

  return (
    <div className="min-h-screen bg-[#fafafb] text-[#4b5563] font-sans selection:bg-[#ca5b00] selection:text-white relative overflow-hidden pb-24">
      {/* POLA GRID LATAR BELAKANG */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* GLOW EFFECT */}
      <div className="absolute top-[-10%] right-[-10%] w-[55%] h-[55%] rounded-full bg-[#ca5b00]/5 blur-[125px] pointer-events-none" />

      <div className="absolute top-[20%] left-[-15%] w-[55%] h-[55%] rounded-full bg-indigo-500/3 blur-[125px] pointer-events-none" />

      {/* NAVBAR */}
      <Navbar />

      {/* ==========================================
          SECTION 1: HERO
          ========================================== */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20 relative"
      >
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* TEKS PROFIL */}
          <div className="md:col-span-7 space-y-5 text-center md:text-left relative z-10">
            <div
              className="space-y-1"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-[#0e121e]">
                Rayhanza Nadhif Athala
              </h1>

              <p className="text-[13px] sm:text-sm lg:text-base uppercase tracking-[0.1em] font-bold text-[#ca5b00]">
                &bull; Fullstack Developer &bull; UI / UX Design
              </p>

              <p className="text-[13px] sm:text-sm lg:text-base uppercase tracking-[0.1em] font-bold text-[#ca5b00]">
                &bull; Android Developer &bull; Deep Learning
              </p>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-[#4b5563] max-w-2xl leading-relaxed">
              Fresh Graduate Fullstack Developer with experience in
              building web and mobile applications. Interested in UI/UX
              Design, Android application development, and the
              implementation of Artificial Intelligence and Deep Learning
              to create modern, responsive, and user-experience-oriented
              digital solutions.
            </p>
          </div>

          {/* FOTO PROFIL */}
          <div className="md:col-span-5 flex justify-center relative">
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:12px_12px] opacity-70 pointer-events-none" />

            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] [background-size:12px_12px] opacity-70 pointer-events-none" />

            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden">
              <img
                src="/certs/profile.png"
                alt="Rayhanza Nadhif Athala"
                className="w-full h-full object-cover scale-[1.15] opacity-95 group-hover:scale-125 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: SKILLS
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
                Tech Skill
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e121e]">
                SKILL
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
          SECTION 3: EXPERIENCE
          ========================================== */}
      <section
        id="experience"
        className="py-32 border-t border-zinc-200/60 px-6 bg-zinc-100/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-5xl sm:text-7xl font-extralight text-black">
              03.
            </span>

            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#ca5b00] font-bold block mb-1">
                History Career
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e121e]">
                EXPERIENCE
              </h2>
            </div>
          </div>

          <div className="relative max-w-2xl mx-auto">
            {experiences.map((experience, index) => (
              <div
                key={`${experience.role}-${index}`}
                className="relative group pl-10 pb-12"
              >
                {index !== experiences.length - 1 && (
                  <span className="absolute left-[8px] top-[116px] bottom-[-110px] w-0.5 bg-zinc-400" />
                )}

                <span className="absolute left-0 top-[108px] z-10 w-[18px] h-[18px] rounded-full border-4 border-[#fafaf9] bg-zinc-900 group-hover:bg-[#ca5b00] group-hover:border-orange-100 transition-all duration-300" />

                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 bg-white border border-zinc-200 rounded-full text-xs font-bold text-zinc-500 shadow-sm">
                    {experience.period}
                  </span>

                  <h3 className="text-xl font-bold text-zinc-900">
                    {experience.role}
                  </h3>

                  <p className="text-[#4b5563] text-sm leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: PROJECTS
          ========================================== */}
      <section
        id="projects"
        className="py-32 border-t border-zinc-200/60 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-5xl sm:text-7xl font-extralight text-zinc-300">
              04.
            </span>

            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#ca5b00] font-bold block mb-1">
                Code Project
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e121e]">
                Projects
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white border border-zinc-200/80 rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between shadow-[0_15px_40px_-20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-zinc-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
                  </div>

                  <div className="w-full h-40 rounded-xl overflow-hidden border border-zinc-200/50 bg-zinc-50 relative mb-6 shadow-inner flex items-center justify-center">
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <span className="text-[10px] uppercase tracking-wider text-[#ca5b00] font-bold block mb-2">
                    {project.category}
                  </span>

                  <h3 className="text-lg font-bold text-[#0e121e] mb-2 group-hover:text-[#ca5b00] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-[#4b5563] text-xs sm:text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-zinc-100">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="text-[10px] px-2.5 py-1 bg-zinc-50 text-zinc-600 rounded-md border border-zinc-200/50 font-medium"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleProjectClick(project.id)}
                    className="text-xs font-bold text-zinc-800 hover:text-[#ca5b00] inline-flex items-center gap-1.5 transition-colors duration-300 cursor-pointer"
                  >
                    Lihat Detail Projek

                    <svg
                      className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: CERTIFICATES
          ========================================== */}
      <section
        id="certificates"
        className="py-32 border-t border-zinc-200/60 px-6 bg-zinc-100/30"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-5xl sm:text-7xl font-extralight text-zinc-300">
              05.
            </span>

            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#ca5b00] font-bold block mb-1">
                Certificates
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e121e]">
                Certificates 
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <div
                key={`${certificate.title}-${index}`}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1 flex flex-col justify-end"
              >
                {/* GAMBAR SERTIFIKAT */}
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* OVERLAY GELAP */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20 transition-opacity duration-300 group-hover:via-black/60 z-10" />

                {/* INFORMASI SERTIFIKAT */}
                <div className="relative z-20 p-5 flex flex-col justify-between h-full w-full text-left">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-white/80 block mb-3">
                      {certificate.issuer}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-orange-300 transition-colors duration-300">
                      {certificate.title}
                    </h3>

                    <div className="flex items-center justify-between gap-4 pt-3 border-t border-white/15">
                      <span className="text-white text-xs font-medium">
                        {certificate.date}
                      </span>

                      {/* TOMBOL MEMBUKA POP-UP */}
                      <button
                        type="button"
                        onClick={() =>
                          setActiveCertificate(certificate)
                        }
                        className="text-zinc-200 hover:text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors duration-300 cursor-pointer"
                        aria-label={`Lihat sertifikat ${certificate.title}`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
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

      {/* ==========================================
          POP-UP CERTIFICATE
          ========================================== */}
      {activeCertificate && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-6"
          onClick={() => setActiveCertificate(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
        >
          <div
            className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* HEADER POP-UP */}
            <div className="flex items-center justify-between gap-4 border-b border-zinc-200 px-5 py-4 sm:px-6">
              <div className="min-w-0">
                <h3
                  id="certificate-modal-title"
                  className="text-base sm:text-lg font-bold text-zinc-900"
                >
                  {activeCertificate.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-500">  {activeCertificate.issuer} {' • '} {activeCertificate.date}</p>
              </div>
              {/* TOMBOL SILANG */}
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600 cursor-pointer"
                aria-label="Tutup sertifikat"
              ><svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"><path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* GAMBAR SERTIFIKAT */}
            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-zinc-100 p-3 sm:p-6">
              <img
                src={activeCertificate.image}
                alt={activeCertificate.title}
                className="block max-h-[76vh] max-w-full object-contain shadow-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          FOOTER
          ========================================== */}
      <footer
        id="contact"
        className="border-t border-zinc-200/80 py-16 px-6 text-center text-xs text-zinc-500 bg-white"
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="text-left space-y-1.5">
            <p className="text-zinc-950 text-base font-bold tracking-tight">
              Rayhanza Nadhif Athala
            </p>
            <p className="text-zinc-500 text-xs">
              Email: emailanda@example.com
            </p>
            <p className="text-zinc-400 text-[10px]">
              Tersedia untuk proyek Web Development & UI/UX Design.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-semibold">
            <a href="#home" className="hover:text-zinc-950 transition-colors">
              01. Profil
            </a>
            <a href="#skills"
              className="hover:text-[#ca5b00] transition-colors">
              02. Skill
            </a>
            <a href="#experience"
              className="hover:text-[#ca5b00] transition-colors">
              03. Experience
            </a>
            <a href="#projects"
              className="hover:text-[#ca5b00] transition-colors">
              04. Project
            </a>
            <a href="#certificates"
              className="hover:text-[#ca5b00] transition-colors">
              05. Certificate
            </a>
          </div>
        </div>

        <p className="mt-12 text-[10px] text-zinc-400">
          &copy; {new Date().getFullYear()} Portfolio. Seluruh hak cipta
          dilindungi.
        </p>
      </footer>
    </div>
  );
}