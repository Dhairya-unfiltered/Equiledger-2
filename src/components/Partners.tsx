const Partners = () => {
  const partners = [
    { name: 'QuickBooks' },
    { name: 'Xero' },
    { name: 'Sage' },
    { name: 'FreshBooks' },
  ];

  return (
    <section className="py-12 lg:py-16 bg-dark-bg">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-2xl lg:text-3xl font-bold text-white/40 hover:text-cyan transition-colors cursor-pointer"
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;