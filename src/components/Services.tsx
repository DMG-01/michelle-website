import { FileCheck, Shield, Package, FolderKanban, Workflow, Users } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "SERFF Filing Management",
    description: "End-to-end filing preparation, submission tracking, objection responses, and state approval management."
  },
  {
    icon: Shield,
    title: "Regulatory Readiness & Compliance Reviews",
    description: "Comprehensive assessments to ensure your products and operations meet current regulatory standards."
  },
  {
    icon: Package,
    title: "Product Development Support",
    description: "Navigate the regulatory landscape from concept to market with expert guidance at every stage."
  },
  {
    icon: FolderKanban,
    title: "PMO Setup & Project Leadership",
    description: "Establish governance structures and lead complex cross-functional initiatives to successful completion."
  },
  {
    icon: Workflow,
    title: "Workflow Optimization & Documentation",
    description: "Create scalable processes, dashboards, and SOPs that reduce friction and improve outcomes."
  },
  {
    icon: Users,
    title: "Cross-Functional Alignment",
    description: "Bridge teams for audits, product launches, and strategic initiatives with clear communication and coordination."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">
            What I Deliver
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 tracking-wide">
            Comprehensive Consulting Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From tactical filing support to strategic operational transformation—
            tailored solutions for your regulatory and compliance challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/20 shadow-soft hover:shadow-card transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5 group-hover:bg-accent/25 transition-colors duration-500">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-3 tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
