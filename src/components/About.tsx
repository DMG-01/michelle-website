import { Building2, Scale, Briefcase, TrendingUp } from "lucide-react";

const credentials = [
  {
    icon: Scale,
    title: "SERFF Filing Expertise",
    description: "Preparing, managing, and correcting filings; responding to objections; ensuring products meet state and federal regulatory requirements."
  },
  {
    icon: Building2,
    title: "Regulatory & Compliance Operations",
    description: "Translating complex mandates into actionable workflows, documentation, and system updates."
  },
  {
    icon: Briefcase,
    title: "Project Management & PMO Leadership",
    description: "Leading cross-functional initiatives across legal, compliance, actuarial, product, and technology teams. PMP-certified."
  },
  {
    icon: TrendingUp,
    title: "Process Improvement & Operational Excellence",
    description: "Building scalable workflows, Smartsheet dashboards, KPI trackers, and SOPs that reduce delays and eliminate rework."
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-soft-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">
            Background & Expertise
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 tracking-wide">
            A Unique Perspective Across the Insurance Ecosystem
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I've worked inside a state insurance administration, managed product development at a national 
            life & health insurer, and executed strategic legal/compliance projects at Fortune 100 scale. 
            This gives me the ability to see problems from every angle—regulator, carrier, and enterprise operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {credentials.map((item, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-500">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
