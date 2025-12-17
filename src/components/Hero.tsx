import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden
                 bg-gradient-to-br from-[#FFFCF4] via-[#F6E3A3] to-[#D4AF37]"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#C9A227]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-[28rem] h-[28rem] bg-[#B8962E]/25 rounded-full blur-3xl" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-3xl">
          {/* Highlight Badge */}
          <div
            className="animate-fade-up inline-flex items-center gap-2 px-4 py-2
                       bg-white/70 border border-[#D4AF37]/40
                       rounded-full text-[#7A5F1B] text-sm mb-6 backdrop-blur-sm"
          >
            Insurance Regulatory & Compliance Consulting
          </div>

          {/* Main Heading */}
          <h1
            className="animate-fade-up-delay-1 font-display text-4xl md:text-5xl lg:text-6xl
                       text-[#5C4A1A] leading-tight mb-6 tracking-wide"
          >
            Providing strategic details.<br />
            <span className="italic text-[#8A6A1F]">
              between idea and execution.
            </span>
          </h1>

          {/* Description */}
          <p
            className="animate-fade-up-delay-2 text-[#6B5A2A]
                       text-lg md:text-xl mb-10 leading-relaxed
                       max-w-2xl font-light"
          >
            Expert guidance for SERFF filings, regulatory compliance, and operational excellence.
            I help insurance organizations navigate complexity with clarity and confidence.
          </p>

          {/* Action Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">View Services</a>
            </Button>
          </div>

          {/* Features */}
          <div className="animate-fade-up-delay-4 flex flex-wrap gap-6 text-[#7A5F1B]/80 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              PMP Certified
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              Fortune 100 Experience
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              State & Carrier Perspective
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
