import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function Home() {
  const { data } = useLanguage();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        {data.ui.skip}
      </a>
      <div className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary" style={{ transform: `scaleX(${progress})` }} aria-hidden />
      <Navigation />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {data.name} · {data.location}
      </footer>
      {progress > 0.15 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={data.ui.top}
          className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
