import { Check } from 'lucide-react';
import aboutImage from '@/assets/about-calculator.jpg';

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={aboutImage}
              alt="Professional accounting services"
              className="w-full h-[320px] lg:h-[400px] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
              About <span className="gradient-text">Us</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We provide international accounting and financial services, helping businesses manage operations with clarity and confidence. From bookkeeping to financial controlling, we bring the expertise every growing business needs.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-foreground">
                <Check className="w-5 h-5 text-cyan shrink-0" />
                <span>Accuracy that builds trust</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <Check className="w-5 h-5 text-cyan shrink-0" />
                <span>Insights that drive decisions</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <Check className="w-5 h-5 text-cyan shrink-0" />
                <span>Service that feels like part of your team</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
