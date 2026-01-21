import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "hero", label: language === "pt" ? "Início" : "Home" },
    { id: "about", label: language === "pt" ? "Sobre" : "About" },
    {
      id: "experience",
      label: language === "pt" ? "Experiência" : "Experience",
    },
    { id: "skills", label: language === "pt" ? "Competências" : "Skills" },
    { id: "projects", label: language === "pt" ? "Projetos" : "Projects" },
    { id: "contact", label: language === "pt" ? "Contato" : "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="shrink-0">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg md:text-xl font-bold text-primary hover:text-secondary transition-colors truncate max-w-[150px] sm:max-w-none"
          >
            <span className="hidden sm:inline">Manuel Gouveia Cunga</span>
            <span className="sm:hidden">M. Gouveia</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Language Switcher & Mobile Menu */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex gap-1 md:gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-8 h-8 md:w-10 md:h-10 p-0"
            >
              {theme === "light" ? (
                <Moon size={18} className="md:w-5 md:h-5" />
              ) : (
                <Sun size={18} className="md:w-5 md:h-5" />
              )}
            </Button>
            <Button
              variant={language === "pt" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("pt")}
              className={`w-8 h-8 md:w-10 md:h-10 p-0 text-xs md:text-sm ${language === "pt" ? "" : "text-muted-foreground hover:text-primary"}`}
            >
              PT
            </Button>
            <Button
              variant={language === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("en")}
              className={`w-8 h-8 md:w-10 md:h-10 p-0 text-xs md:text-sm ${language === "en" ? "" : "text-muted-foreground hover:text-primary"}`}
            >
              EN
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-4 text-base font-medium text-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
