import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function AboutSection() {
  const { data } = useLanguage();

  return (
    <section
      id="about"
      className="py-12 bg-gradient-to-b from-muted/50 to-background"
    >
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
              {data.about.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Content Grid - tudo centralizado */}
          <div className="grid grid-cols-1 gap-12 items-center justify-items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 max-w-3xl text-center"
            >
              <p className="text-lg text-foreground leading-relaxed">
                {data.about.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 w-full justify-items-center">
                <div className="text-center p-4 bg-card rounded-lg shadow-sm border border-border w-full max-w-[200px] sm:w-40">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    3+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Anos de Experiência
                  </p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-sm border border-border w-full max-w-[200px] sm:w-40">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    10+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Projetos Completos
                  </p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-sm border border-border w-full max-w-[200px] sm:w-40">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    500+
                  </div>
                  <p className="text-sm text-muted-foreground">Conexões</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
