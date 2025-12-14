import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-3xl">
          {/* Highlight Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Insurance Regulatory & Compliance Consulting
          </div>
          
          {/* Main Heading */}
          <h1 className="animate-fade-up-delay-1 font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 tracking-wide">
            Bring Structure to Complexity.<br />
            <span className="italic">Move Critical Work Forward.</span>
          </h1>
          
          {/* Description */}
          <p className="animate-fade-up-delay-2 text-white/80 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl font-light">
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
          <div className="animate-fade-up-delay-4 flex flex-wrap gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              PMP Certified
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Fortune 100 Experience
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              State & Carrier Perspective
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
