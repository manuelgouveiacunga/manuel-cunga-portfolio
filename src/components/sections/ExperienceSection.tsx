import { useLanguage } from "@/contexts/LanguageContext";

export default function ExperienceSection() {
  const { data } = useLanguage();
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title mb-12">{data.experience.title}</h2>
        <ol className="relative ml-2 space-y-10 border-l-2 border-border pl-8">
          {data.experience.items.map(item => (
            <li key={item.id} className="relative">
              <span className="absolute -left-[2.55rem] top-1.5 h-4 w-4 rounded-full border-4 border-background bg-primary" aria-hidden />
              <p className="text-sm font-semibold text-primary">{item.period}</p>
              <h3 className="mt-1 text-2xl font-bold">{item.position} <span className="font-medium text-muted-foreground">· {item.company}</span></h3>
              <ul className="mt-3 max-w-2xl list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-primary">
                {item.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
