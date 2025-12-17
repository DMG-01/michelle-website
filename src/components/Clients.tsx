import { Building, Users, Lightbulb, FileText, Scale } from "lucide-react";

const clientTypes = [
  { icon: Building, label: "Insurance Carriers" },
  { icon: Users, label: "MGAs & TPAs" },
  { icon: Lightbulb, label: "Insurtech Companies" },
  { icon: FileText, label: "Compliance & Product Development Teams" },
  { icon: Scale, label: "Legal Operations Groups" },
];

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-soft-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">
            Who I Help
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 tracking-wide">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg">
            I partner with organizations across the insurance value chain who need
            expert guidance to navigate regulatory complexity.
          </p>
        </div>

        {/* Mobile = grid | Desktop = flex (unchanged) */}
        <div
          className="
            grid grid-cols-2 gap-4
            md:flex md:flex-wrap md:justify-center
            max-w-4xl mx-auto
          "
        >
          {clientTypes.map((client, index) => (
            <div
              key={index}
              className="
                flex items-center gap-3 px-6 py-4
                bg-card rounded-full
                border border-border/50 shadow-soft
                hover:shadow-card hover:border-primary/20
                transition-all duration-500 hover:-translate-y-0.5
              "
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <client.icon className="h-4 w-4 text-primary" />
              </div>
              <span className="font-medium text-foreground">
                {client.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
