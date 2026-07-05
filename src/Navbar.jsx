import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Melacak scroll untuk deteksi active section & efek scroll navbar desktop
  useEffect(() => {
    const handleScroll = () => {
      // 1. Efek ketika halaman mulai di-scroll
      setScrolled(window.scrollY > 20);

      // 2. Deteksi section mana yang sedang aktif saat di-scroll
      const sections = ['home', 'skills', 'experience', 'projects', 'certificates'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Profil' },
    { id: 'skills', label: 'Skill' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Project' },
    { id: 'certificates', label: 'Certificate' },
  ];

  return (
    /*
      RESPONSIF NAVBAR CONTAINER:
      - Mobile: Mengapung di BAWAH (bottom-10)
      - Desktop (md): Mengapung di ATAS (md:top-6 dan menonaktifkan koordinat bawah dengan md:bottom-auto)
    */
    <div className={`fixed left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-lg md:max-w-xl transition-all duration-300 ${
      scrolled 
        ? 'bottom-10 md:top-4 md:bottom-auto' 
        : 'bottom-10 md:top-6 md:bottom-auto'
    }`}>
      <div className="bg-zinc-950/95 backdrop-blur-md border border-white/10 rounded-full p-1.5 flex items-center justify-between shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)]">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`text-[9px] sm:text-xs font-bold uppercase tracking-wider px-3 sm:px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap ${
              activeSection === item.id
                ? 'bg-white text-zinc-950 shadow-md'
                : 'text-white hover:text-white'
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}