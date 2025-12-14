import { Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display text-xl text-background tracking-wide">
              Magboo Consulting LLC
            </span>
            <span className="text-background/50 text-sm flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-primary" /> for the insurance industry
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/magboousa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:text-background hover:bg-background/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <span className="text-background/50 text-sm">
              © {currentYear} All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
