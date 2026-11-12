import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { data } = useLanguage();
  return (
    <section id="about" className="section">
      <div className="container grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <h2 className="section-title">{data.about.title}</h2>
        <div>
          <div className="space-y-4 text-lg leading-relaxed">
            {data.about.paragraphs.map(p => <p key={p}>{p}</p>)}
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {data.about.stats.map(s => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-4xl font-extrabold text-primary" style={{ fontFamily: "Bricolage Grotesque" }}>{s.value}</dd>
                <p className="mt-1 text-sm text-muted-foreground" aria-hidden>{s.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
