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
              Prominent Outsource <span className="gradient-text">Bookkeeping Provider</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              As a leading outsourced bookkeeping provider, we support clients globally with accurate books, insightful reports, and seamless compliance—combining technical expertise with strong business understanding to support growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;