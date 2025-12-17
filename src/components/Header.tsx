import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
 <a
  href="#"
  className="flex flex-col leading-tight text-foreground tracking-wide font-['cursive']"
>
  <span className="text-3xl font-semibold">Magboo</span>
  <span className="text-base font-medium opacity-80">Consulting</span>
</a>


        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#clients" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Who I Help
          </a>
          <Button size="sm" asChild>
            <a href="#contact">Let's Connect</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
