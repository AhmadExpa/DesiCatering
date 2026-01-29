import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormData } from "@/lib/schema";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate a brief delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));

    // Construct mailto link
    const subject = encodeURIComponent(`Website Inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );

    window.location.href = `mailto:contact@desicateringlimted.com?subject=${subject}&body=${body}`;

    toast({
      title: "Email client opened!",
      description: "Please send the email to complete your inquiry.",
      variant: "default",
    });

    setIsSubmitting(false);
    form.reset();
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                Experience the finest culinary delights. Whether it's a quick bite or a grand event,
                we are here to serve you with excellence.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-zinc-300 group cursor-pointer hover:text-primary transition-colors">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Call Us</p>
                  <p className="text-lg font-display font-medium">+44 7943 273077</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-zinc-300 group cursor-pointer hover:text-primary transition-colors">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Email Us</p>
                  <p className="text-lg font-display font-medium">contact@desicateringlimted.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Location</p>
                  <p className="text-lg font-display font-medium">Thornton Heath, London</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 backdrop-blur-sm">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Send us a Message</h3>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-2">
                <input
                  {...form.register("name")}
                  placeholder="Your Name"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                />
                {form.formState.errors.name && (
                  <p className="text-red-400 text-sm ml-1">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <input
                  {...form.register("email")}
                  placeholder="Email Address"
                  type="email"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                />
                {form.formState.errors.email && (
                  <p className="text-red-400 text-sm ml-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <textarea
                  {...form.register("message")}
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                />
                {form.formState.errors.message && (
                  <p className="text-red-400 text-sm ml-1">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm
                  bg-gradient-to-r from-primary to-amber-600 text-black
                  hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5
                  active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed
                  transition-all duration-200 flex items-center justify-center gap-2
                "
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Opening Email...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-900 text-center">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Desi Catering Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
