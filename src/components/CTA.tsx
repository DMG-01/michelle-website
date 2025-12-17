import { Button } from "@/components/ui/button";
import { Mail, Calendar, Heart } from "lucide-react";

const CTA = () => {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden
                 bg-gradient-to-br from-[#FFFCF4] via-[#F6E3A3] to-[#D4AF37]"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#C9A227]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B8962E]/25 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2
                       bg-white/70 border border-[#D4AF37]/40
                       rounded-full text-[#7A5F1B] text-sm mb-6 backdrop-blur-sm"
          >
            Available for new projects
          </div>

          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl
                       text-[#5C4A1A] mb-6 tracking-wide"
          >
            Ready to Bring Clarity<br />
            <span className="italic text-[#8A6A1F]">to Complexity?</span>
          </h2>

          <p
            className="text-[#6B5A2A] text-lg mb-10 leading-relaxed
                       font-light max-w-2xl mx-auto"
          >
            You need someone to step in quickly, bring structure to chaos, and activate
            workstreams that have been clogged for months. I actively solve these issues
            through strategic PMO excellence, operations management, and Fractional COO
            support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button variant="hero" size="xl" asChild>
             <a
  href="mailto:hello@magboo.co?subject=Consulting%20Inquiry&body=Hello%20Magboo%20Consulting,%0D%0A%0D%0AI’m%20interested%20in%20discussing%20your%20services.%20Please%20let%20me%20know%20a%20good%20time%20to%20connect.%0D%0A%0D%0AThank%20you."
>
  <Mail className="mr-2 h-5 w-5" />
  Get in Touch
</a>

            </Button>
          </div>

          <p className="text-[#7A5F1B]/70 text-sm">
            Typically respond within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
