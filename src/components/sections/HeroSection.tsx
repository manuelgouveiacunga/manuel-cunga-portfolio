import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function HeroSection() {
  const { data } = useLanguage();
  const [photoOk, setPhotoOk] = useState(true);
  const link = "grid h-11 w-11 place-items-center rounded-full border border-border bg-card hover:border-primary hover:text-primary";

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container grid items-center gap-12 md:grid-cols-[1.35fr_1fr]">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="chip mb-6">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500" aria-hidden />
            {data.ui.available}
          </p>
          <h1 className="text-[clamp(2.2rem,5.6vw,4.4rem)] font-extrabold leading-[1.02]">
            {data.hero.heading}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {data.hero.subheading}
          </p>
          <p className="mt-3 font-semibold">{data.name} · {data.title}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={() => go("projects")} className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground hover:opacity-90">
              {data.hero.cta} <ArrowDown size={16} />
            </button>
            <button onClick={() => go("contact")} className="inline-flex h-11 items-center rounded-full border border-border bg-card px-6 font-semibold hover:border-primary">
              {data.hero.ctaSecondary}
            </button>
            <span className="mx-1 hidden h-6 w-px bg-border sm:block" />
            <a className={link} href={data.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a className={link} href={data.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a className={link} href={data.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a>
            <a className={link} href={`mailto:${data.email}`} aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -right-3 -bottom-3 h-full w-full rounded-t-[999px] rounded-b-3xl bg-accent" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl border border-border bg-muted">
            {photoOk ? (
              <img
                src="/profile.jpg"
                alt="Manuel Gouveia Cunga, Analista de Teste e Desenvolvedor Front-end"
                width={435}
                height={543}
                fetchPriority="high"
                onError={() => setPhotoOk(false)}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <div className="grid h-full place-items-center text-7xl font-extrabold text-primary" style={{ fontFamily: "Bricolage Grotesque" }}>MC</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
