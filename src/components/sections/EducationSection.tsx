import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Languages } from "lucide-react";

type Item = { id: number; degree: string; institution: string; period: string; status?: string };

export default function EducationSection() {
  const { data } = useLanguage();
  const e = data.education;
  return (
    <section id="education" className="section bg-muted/60">
      <div className="container">
        <h2 className="section-title mb-10 flex items-center gap-3">
          <GraduationCap className="text-primary" size={34} aria-hidden /> {e.title}
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {(e.items as Item[]).map(i => (
            <article key={i.id} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-sm font-semibold text-primary">
                {i.period}{i.status ? ` · ${i.status}` : ""}
              </p>
              <h3 className="mt-2 text-xl font-bold">{i.degree}</h3>
              <p className="mt-1 text-muted-foreground">{i.institution}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <h3 className="flex items-center gap-2 font-bold"><Languages size={18} className="text-primary" aria-hidden /> {e.languagesTitle}</h3>
          <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
            {e.languages.map(l => (
              <li key={l.language}><span className="font-semibold">{l.language}</span> <span className="text-muted-foreground">· {l.level}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
