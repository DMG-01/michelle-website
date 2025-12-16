import { Button } from "@/components/ui/button";
import { Mail, Calendar, Heart } from "lucide-react";

const CTA = () => {
  return (
    <section
  id="contact"
  className="py-24 relative overflow-hidden
             bg-gradient-to-br from-white via-[#FFF8E7] to-[#F5D78B]"
>
  {/* Decorative elements */}
  <div className="absolute top-10 left-10 w-64 h-64 bg-[#E6C56A]/20 rounded-full blur-3xl" />
  <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#D4AF37]/20 rounded-full blur-3xl" />

  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2
                      bg-white/60 border border-[#E6C56A]/40
                      rounded-full text-[#8A6A1F] text-sm mb-6 backdrop-blur-sm">
        <Heart className="h-4 w-4" />
        Available for new projects
      </div>

      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl
                     text-[#5C4A1A] mb-6 tracking-wide">
        Ready to Bring Clarity<br />
        <span className="italic text-[#8A6A1F]">to Complexity?</span>
      </h2>

      <p className="text-[#6B5A2A] text-lg mb-10 leading-relaxed font-light max-w-2xl mx-auto">
        If you're looking for someone who can step in quickly, bring structure to complexity,
        and move critical work streams forward—let's connect. I'm currently available for
        consulting, contract, and fractional support.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <Button variant="hero" size="xl" asChild>
          <a href="mailto:hello@magbooco">
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </a>
        </Button>
      </div>

      <p className="text-[#8A6A1F]/70 text-sm">
        Typically respond within 24 hours
      </p>
    </div>
  </div>
</section>


  );
};

export default CTA;
