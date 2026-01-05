import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const { data } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {data.skills.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Skills Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src="/images/skills-visual.png"
              alt="Technical Skills"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {data.skills.categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-primary mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-semibold rounded-full border border-primary/20 hover:border-secondary hover:text-secondary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 pt-16 border-t-2 border-border"
          >
            <h3 className="text-2xl font-bold text-primary mb-8">
              {data.education.title}
            </h3>
            <div className="space-y-6">
              {data.education.items.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white rounded-lg p-6 shadow-sm border border-border"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-bold text-primary">
                      {edu.degree}
                    </h4>
                    <span className="text-sm text-secondary font-semibold">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                    {edu.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 pt-16 border-t-2 border-border"
          >
            <h3 className="text-2xl font-bold text-primary mb-8">
              {data.languages.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {data.languages.items.map((lang) => (
                <div
                  key={lang.language}
                  className="bg-white rounded-lg p-6 shadow-sm border border-border"
                >
                  <p className="text-lg font-bold text-primary mb-2">
                    {lang.language}
                  </p>
                  <p className="text-muted-foreground">{lang.level}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
