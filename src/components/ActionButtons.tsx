import { motion } from "framer-motion";
import { FileText, Bike, ShoppingBag, Utensils } from "lucide-react";

interface ActionButtonProps {
  title: string;
  url: string;
  color: string;
  icon: React.ElementType;
  delay: number;
}

const buttons: ActionButtonProps[] = [
  {
    title: "Download Menu",
    url: "/uploads/menu.pdf", // Assuming this exists per requirements
    color: "from-amber-600 to-amber-500", // Gold for premium menu
    icon: FileText,
    delay: 0
  },
  {
    title: "Uber Eats",
    url: "https://www.order.store/store/railway-telegraph/ZRwX-NuEX_CaSFPNwa1RGw",
    color: "from-[#06C167] to-[#048a4a]", // Uber Green
    icon: Bike,
    delay: 0.1
  },
  {
    title: "Deliveroo",
    url: "https://deliveroo.co.uk/menu/London/south-norbury/xpress-pizza-house-19-brigstock-road/",
    color: "from-[#00CCBC] to-[#00a699]", // Deliveroo Teal
    icon: ShoppingBag,
    delay: 0.2
  },
  {
    title: "Just Eat",
    url: "https://www.just-eat.co.uk/restaurants-xpress-pizza-house-thornton-heath/menu",
    color: "from-[#F36D00] to-[#c25700]", // Just Eat Red/Orange
    icon: Utensils,
    delay: 0.3
  }
];

function ActionButton({ title, url, color, icon: Icon, delay }: ActionButtonProps) {
  const isPdf = title === "Download Menu";

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      {...(isPdf ? { download: "DesiCatering-Menu.pdf" } : {})}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative group overflow-hidden rounded-2xl p-6 h-32 md:h-40
        flex flex-col justify-between
        bg-gradient-to-br ${color}
        shadow-lg shadow-black/20
        border border-white/10
      `}
    >
      <div className="absolute top-0 right-0 -mt-4 -mr-4 p-8 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500" />

      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-md" />

      <div className="relative z-10">
        <span className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-1 block">
          {isPdf ? "View PDF" : "Order on"}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-white font-display tracking-wide">
          {title}
        </h3>
      </div>
    </motion.a>
  );
}

export function ActionButtons() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto -mt-10 md:-mt-20 relative z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {buttons.map((btn) => (
          <ActionButton key={btn.title} {...btn} />
        ))}
        {/* Direct Order Messaging */}
        <div className="mt-12 text-center">
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
            <span className="text-primary font-bold">Order Direct & Save:</span> Online platform pricing may differ from our direct menu. We recommend ordering via WhatsApp for the best prices and exclusive offers. We use our own dedicated in-house delivery team.
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <div className="h-1 w-12 rounded-full bg-primary/30" />
            <div className="h-1 w-12 rounded-full bg-primary" />
            <div className="h-1 w-12 rounded-full bg-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
