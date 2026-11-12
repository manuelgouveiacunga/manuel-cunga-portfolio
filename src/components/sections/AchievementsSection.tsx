import { useLanguage } from "@/contexts/LanguageContext";
import { Trophy } from "lucide-react";

export default function AchievementsSection() {
  const { data } = useLanguage();
  return (
    <section id="achievements" className="section bg-muted/60">
      <div className="container">
        <h2 className="section-title mb-10 flex items-center gap-3">
          <Trophy className="text-primary" size={32} aria-hidden /> {data.achievements.title}
        </h2>
        <ul className="grid gap-5 md:grid-cols-3">
          {data.achievements.items.map(a => (
            <li key={a.title} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <span className="mb-4 inline-flex h-14 w-14 items-center justify-center self-start rounded-2xl bg-accent text-2xl font-extrabold text-accent-foreground" style={{ fontFamily: "Bricolage Grotesque" }}>
                {a.place}
              </span>
              <h3 className="text-xl font-bold leading-snug">{a.title}</h3>
              <p className="mt-3 text-muted-foreground">{a.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
