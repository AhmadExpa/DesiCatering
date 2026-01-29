import { HeroCarousel } from "@/components/HeroCarousel";
import { ActionButtons } from "@/components/ActionButtons";
import { MenuGrid } from "@/components/MenuGrid";
import { ContactSection } from "@/components/ContactSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      {/* Navigation / Header - Minimal transparent overlay */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex flex-col">
          <span className="text-2xl font-display font-bold text-white tracking-tight">
            Desi Catering
            <span className="text-primary text-4xl leading-none">.</span>
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-zinc-400 pl-0.5">Premium Dining</span>
        </div>
      </nav>

      <main>
        {/* Full screen carousel */}
        <HeroCarousel />
        
        {/* Floating cards overlap the hero */}
        <ActionButtons />
        
        {/* About Section - Brief Intro */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 px-6 text-center max-w-3xl mx-auto"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            A Symphony of Flavors
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            We bring you an authentic culinary experience with a modern twist. 
            From our hand-tossed artisan pizzas to our flame-grilled burgers, 
            every dish is crafted with passion and the finest ingredients.
          </p>
        </motion.section>

        {/* Visual Menu Grid */}
        <MenuGrid />
        
        {/* Contact & Footer */}
        <ContactSection />
      </main>

      {/* Floating CTA */}
      <WhatsAppButton />
    </div>
  );
}
