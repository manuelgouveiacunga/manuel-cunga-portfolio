import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUpRight } from "lucide-react";

type P = { id: number; title: string; featured?: boolean; description?: string; technologies: string[]; link: string };

const Tags = ({ list }: { list: string[] }) => (
  <ul className="flex flex-wrap gap-2">
    {list.map(t => <li key={t} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">{t}</li>)}
  </ul>
);

export default function ProjectsSection() {
  const { data } = useLanguage();
  const items = data.projects.items as P[];
  const featured = items.filter(p => p.featured);
  const others = items.filter(p => !p.featured);

  return (
    <section id="projects" className="section bg-muted/60">
      <div className="container">
        <h2 className="section-title mb-10">{data.projects.title}</h2>

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map(p => (
            <article key={p.id} className="rounded-3xl bg-primary p-7 text-primary-foreground">
              <p className="text-sm font-semibold opacity-80">{data.ui.featured}</p>
              <h3 className="mt-2 text-3xl font-extrabold">{p.title}</h3>
              <p className="mt-4 leading-relaxed opacity-95">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.technologies.map(t => <li key={t} className="rounded-full bg-background/20 px-3 py-1 text-xs font-medium">{t}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <ul className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
          {others.map(p => {
            const body = (
              <div className="grid gap-3 p-5 md:grid-cols-[1.1fr_1.4fr_auto] md:items-center">
                <h3 className="font-bold">{p.title}</h3>
                {p.description ? <p className="text-sm text-muted-foreground">{p.description}</p> : <Tags list={p.technologies} />}
                {p.link && <ArrowUpRight size={18} className="hidden text-primary md:block" aria-hidden />}
              </div>
            );
            return (
              <li key={p.id}>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`${data.ui.viewProject}: ${p.title}`} className="block hover:bg-muted/60">{body}</a>
                ) : body}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
