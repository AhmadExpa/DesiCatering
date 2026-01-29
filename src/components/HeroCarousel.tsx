import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sliderData } from "@/lib/sliderData";

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-black">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-transparent" />
      
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {sliderData.map((slide, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative h-full" key={slide.id}>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12 z-20 w-full">
                <AnimatePresence mode="wait">
                  {selectedIndex === index && (
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="max-w-4xl"
                    >
                      <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-[0.2em] text-black uppercase bg-primary rounded-full shadow-lg shadow-primary/20">
                        Limited Time Offer
                      </span>
                      <h2 className="text-5xl md:text-8xl font-display font-bold text-white mb-4 drop-shadow-2xl">
                        {slide.title}
                      </h2>
                      <div className="text-4xl md:text-6xl font-display font-bold text-primary mb-6 drop-shadow-lg">
                        {slide.price}
                      </div>
                      <p className="text-sm md:text-lg text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        {slide.note}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-12 left-0 right-0 z-30 flex justify-center gap-4">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === selectedIndex ? "w-12 bg-primary" : "w-3 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
