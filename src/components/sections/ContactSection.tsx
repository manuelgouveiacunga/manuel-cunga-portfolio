import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const { data } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Mensagem enviada com sucesso!");
      e.currentTarget.reset();
    } catch (error) {
      toast.error("Erro ao enviar mensagem");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
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
              {data.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {data.contact.description}
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary text-white">
                    <Mail size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">Email</h3>
                  <a
                    href={`mailto:${data.email}`}
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {data.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary text-white">
                    <Phone size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">
                    Telefone
                  </h3>
                  <a
                    href={`tel:${data.phone}`}
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {data.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary text-white">
                    <MapPin size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">
                    Localização
                  </h3>
                  <p className="text-muted-foreground">{data.location}</p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">
                  Redes Sociais
                </h3>
                <div className="flex gap-4">
                  <a
                    href={data.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted hover:bg-secondary hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={data.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted hover:bg-secondary hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-white rounded-lg p-8 shadow-sm border border-border"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="Sua mensagem aqui..."
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
              >
                {isLoading
                  ? "Enviando..."
                  : data.contact.cta}
              </Button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
