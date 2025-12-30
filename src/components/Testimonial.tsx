import testimonialImage from '@/assets/testimonial.jpg';

const Testimonial = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={testimonialImage}
                alt="Professional accountant"
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan/20 to-indigo/20" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
              Leading Outsource <span className="gradient-text">Bookkeeping Provider</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Being the leading outsource bookkeeping service provider we know our roles & responsibility and Hence assure our clients that they will get quality services with precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;