import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const { data } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    try {
      const formData = new FormData(form);
      
      
      

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configurations missing");
      }

      await emailjs.sendForm(serviceId, templateId, form, publicKey);

      toast.success(data.ui.sent);
      form.reset();
    } catch (error) {
      toast.error(data.ui.failed);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="section bg-muted/60"
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
          <div className="mb-12">
            <h2 className="section-title mb-4">
              {data.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              {data.contact.description}
            </p>
            
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
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground">
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
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground">
                    <Phone size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">
                    Tel.
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
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground">
                    <MapPin size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">
                    {data.ui.location}
                  </h3>
                  <p className="text-muted-foreground">{data.location}</p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">
                  {data.ui.social}
                </h3>
                <div className="flex gap-4">
                  <a
                    href={data.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
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
              className="space-y-6 bg-card rounded-lg p-8 shadow-lg border border-border"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {data.ui.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder={data.ui.yourName}
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
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {data.ui.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder={data.ui.yourMessage}
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                {isLoading ? data.ui.sending : data.ui.send}
              </Button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
