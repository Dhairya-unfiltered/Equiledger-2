import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Globe, Users, Star } from 'lucide-react';

const TYPEWRITER_WORDS = ['Control', 'Clarity', 'Confidence', 'Compliance'];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPEWRITER_WORDS[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-40 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-cyan" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Trusted by 500+ Global Enterprises
            </span>
            <div className="flex -space-x-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan to-indigo border-2 border-card" />
              ))}
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            <span className="text-navy">Financial Solutions</span>
            <br />
            <span className="text-muted-foreground font-normal">That Drive</span>{' '}
            <span className="text-cyan inline-block min-w-[180px] sm:min-w-[220px] md:min-w-[280px] text-left">
              {displayedText}
              <span className="animate-blink">|</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            We empower high-growth firms with{' '}
            <span className="font-semibold text-foreground">audit-ready precision</span>{' '}
            and borderless financial clarity across 40+ countries.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
            <a href="#contact" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto rounded-full px-8 py-6 text-base bg-navy hover:bg-navy/90 text-primary-foreground font-semibold shadow-lg shadow-navy/20"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto rounded-full px-8 py-6 text-base border-border text-foreground hover:bg-muted font-semibold"
              >
                Book Free Consultation
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto px-4">
            <TrustCard icon={Shield} label="SOC 2 Certified" />
            <TrustCard icon={Award} label="Award Winning" />
            <TrustCard icon={Users} label="500+ Clients" />
            <TrustCard icon={Globe} label="40+ Countries" />
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-border/50 mx-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 rounded-full border-2 border-card bg-gradient-to-br from-muted to-muted-foreground/20"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground ml-2">
                  <span className="font-semibold text-foreground">4.9/5</span> from 200+ reviews
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustCard = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card hover:shadow-md transition-all duration-300">
    <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center">
      <Icon className="w-5 h-5 text-cyan" />
    </div>
    <span className="text-xs sm:text-sm font-medium text-foreground text-center">{label}</span>
  </div>
);

export default Hero;