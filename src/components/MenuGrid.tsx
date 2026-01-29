import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/use-scroll-animation";

interface Category {
  id: string;
  title: string;
  image: string;
  colSpan?: string;
}

const CATEGORIES: Category[] = [
  {
    id: "pizza",
    title: "Signature Pizzas",
    image: "/uploads/pizza.jpg",
    colSpan: "md:col-span-2 md:row-span-2"
  },
  {
    id: "burger",
    title: "Gourmet Burgers",
    image: "/uploads/burger.jpg",
    colSpan: "md:col-span-1 md:row-span-1"
  },
  {
    id: "shakes",
    title: "Artisan Shakes",
    image: "/uploads/shakes.jpg",
    colSpan: "md:col-span-1 md:row-span-1"
  },
  {
    id: "wings",
    title: "Fire Wings",
    image: "/uploads/wings.jpg",
    colSpan: "md:col-span-1 md:row-span-1"
  },
  {
    id: "wraps",
    title: "Fresh Wraps",
    image: "/uploads/wraps.jpg",
    colSpan: "md:col-span-1 md:row-span-1"
  },
  {
    id: "shisha",
    title: "Premium Shisha",
    image: "/uploads/shisha.jpg",
    colSpan: "md:col-span-2"
  }
];

function MenuCard({ category, index }: { category: Category; index: number }) {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`
        relative group overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800
        ${category.colSpan || "col-span-1"}
        min-h-[240px] md:min-h-[300px]
      `}
    >
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
      
      <img
        src={category.image}
        alt={category.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {category.title}
        </h3>
        <div className="h-1 w-12 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </motion.div>
  );
}

export function MenuGrid() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Selection</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Explore Our Menu</h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
        {CATEGORIES.map((cat, idx) => (
          <MenuCard key={cat.id} category={cat} index={idx} />
        ))}
      </div>
    </section>
  );
}
