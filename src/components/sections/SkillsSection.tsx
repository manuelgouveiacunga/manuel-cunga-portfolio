import { useLanguage } from "@/contexts/LanguageContext";

export default function SkillsSection() {
  const { data } = useLanguage();
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title mb-10">{data.skills.title}</h2>
        <dl className="divide-y divide-border border-y border-border">
          {data.skills.categories.map(c => (
            <div key={c.name} className="grid gap-3 py-5 md:grid-cols-[14rem_1fr]">
              <dt className="font-bold">{c.name}</dt>
              <dd className="flex flex-wrap gap-2">
                {c.skills.map(s => <span key={s} className="chip">{s}</span>)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
