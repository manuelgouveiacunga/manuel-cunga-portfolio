import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const { data } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {data.experience.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Experience Items */}
          <div className="space-y-8">
            {data.experience.items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-8 border-l-2 border-secondary last:border-l-transparent last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-3.5 top-0 w-6 h-6 bg-secondary rounded-full border-4 border-background" />

                {/* Content */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {item.position}
                      </h3>
                      <p className="text-lg font-semibold text-secondary">
                        {item.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                      <div className="flex items-center gap-2 md:justify-end">
                        <Calendar size={16} />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2 md:justify-end">
                        <MapPin size={16} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="flex gap-3 text-foreground">
                        <span className="text-secondary font-bold mt-1">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
