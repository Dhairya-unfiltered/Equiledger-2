import Logo from '@/components/Logo';

const Footer = () => {
  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Get a Quote', href: '#contact' },
  ];

  return (
    <footer className="py-12 lg:py-16 bg-dark-bg text-white">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Testimonial Text */}
          <div>
            <Logo size="lg" className="mb-4" />
            <p className="text-white/60 text-sm leading-relaxed">
             At the heart of everything we do is a promise - to make accounting effortless and meaningful, so you can focus on what truly matters: growing your business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white/60 hover:text-cyan transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <p className="font-semibold text-white">India Office</p>
              <p className="text-white/60">
                Ahmedabad, Gujarat, India
              </p>
              <p className="text-white/60">
                +91 73835 03508
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/40">
            © 2025, Equiledger. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;