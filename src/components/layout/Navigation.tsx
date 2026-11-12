import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ids = ["about", "achievements", "experience", "education", "projects", "skills", "contact"] as const;

export default function Navigation() {
  const { language, setLanguage, data } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const iconBtn = "grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-sm font-semibold hover:border-primary";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between" aria-label="Principal">
        <button onClick={() => go("hero")} className="font-heading text-lg font-extrabold tracking-tight" style={{ fontFamily: "Bricolage Grotesque" }}>
          Manuel Cunga
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {ids.map(id => (
            <li key={id}>
              <button onClick={() => go(id)} aria-current={active === id ? "true" : undefined}
                className={`border-b-2 py-1 text-sm font-medium hover:text-foreground ${active === id ? "border-primary text-foreground" : "border-transparent text-muted-foreground"}`}>
                {data.ui.nav[id]}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button className={iconBtn} onClick={() => setLanguage(language === "pt" ? "en" : "pt")} aria-label="Mudar idioma / Change language">
            {language === "pt" ? "EN" : "PT"}
          </button>
          <button className={iconBtn} onClick={toggleTheme} aria-label="Alternar tema">
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button className={`${iconBtn} md:hidden`} onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="container grid gap-1 border-t border-border py-3 md:hidden">
          {ids.map(id => (
            <li key={id}>
              <button onClick={() => go(id)} className="w-full rounded-lg px-3 py-3 text-left font-medium hover:bg-muted">
                {data.ui.nav[id]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
