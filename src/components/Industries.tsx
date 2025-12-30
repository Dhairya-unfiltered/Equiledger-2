import saasImage from '@/assets/industry-saas.jpg';
import ecommerceImage from '@/assets/industry-ecommerce.jpg';
import realestateImage from '@/assets/industry-realestate.jpg';
import cosmeticsImage from '@/assets/industry-cosmetics.jpg';
import clinicsImage from '@/assets/industry-clinics.jpg';
import hospitalityImage from '@/assets/industry-hospitality.jpg';
import restaurantsImage from '@/assets/industry-restaurants.jpg';
import nonprofitImage from '@/assets/industry-nonprofit.jpg';

const industries = [
  {
    title: 'Retail and E-commerce Industry',
    image: ecommerceImage,
  },
  {
    title: 'Cosmetics',
    image: cosmeticsImage,
  },
  {
    title: 'SaaS Companies',
    image: saasImage,
  },
  {
    title: 'Real Estate Industry',
    image: realestateImage,
  },
  {
    title: 'Clinics',
    image: clinicsImage,
  },
  {
    title: 'Hospitality Industry',
    image: hospitalityImage,
  },
  {
    title: 'Restaurants, Cafés & Catering',
    image: restaurantsImage,
  },
  {
    title: 'Non-Profit Organizations',
    image: nonprofitImage,
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-16 lg:py-24 bg-secondary">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
          Industries We <span className="gradient-text">Serve</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden mb-4 shadow-lg">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-cyan transition-colors">
                {industry.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;