import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function RecommendationsSection() {
  const { data } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const recommendations = data.recommendations.items;
  const itemsPerView = 1;
  const totalSlides = Math.ceil(recommendations.length / itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section id="recommendations" className="py-20 bg-gradient-to-b from-background to-muted/30">
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
              {data.recommendations.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Recommendations Carousel */}
            <div className="overflow-hidden">
              <motion.div
                animate={{ x: -currentIndex * 100 + "%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex"
              >
                {recommendations.map((rec) => (
                  <motion.div
                    key={rec.id}
                    className="w-full flex-shrink-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white rounded-lg shadow-sm border border-border p-8 md:p-12 hover:shadow-lg transition-shadow duration-300">
                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className="fill-secondary text-secondary"
                          />
                        ))}
                      </div>

                      {/* Testimonial */}
                      <p className="text-lg text-foreground mb-8 leading-relaxed italic">
                        "{rec.testimonial}"
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <img
                          src={rec.image}
                          alt={rec.name}
                          className="w-16 h-16 rounded-full border-2 border-primary"
                        />

                        {/* Author Details */}
                        <div>
                          <h3 className="text-lg font-bold text-primary">
                            {rec.name}
                          </h3>
                          <p className="text-sm text-secondary font-semibold">
                            {rec.position}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {rec.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft size={20} />
              </Button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {[...Array(totalSlides)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "bg-primary w-8"
                        : "bg-muted-foreground"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight size={20} />
              </Button>
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-6 text-sm text-muted-foreground">
              {currentIndex + 1} / {totalSlides}
            </div>
          </div>

          {/* All Recommendations Grid (Mobile View) */}
          <div className="md:hidden mt-12 space-y-6">
            {recommendations.map((rec) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-border p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-secondary text-secondary"
                    />
                  ))}
                </div>

                <p className="text-base text-foreground mb-6 leading-relaxed italic">
                  "{rec.testimonial}"
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="w-12 h-12 rounded-full border-2 border-primary"
                  />
                  <div>
                    <h3 className="font-bold text-primary text-sm">
                      {rec.name}
                    </h3>
                    <p className="text-xs text-secondary font-semibold">
                      {rec.position}
                    </p>
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
