import { Lightbulb, DollarSign, Clock, TrendingUp, Building, Zap } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Proactive Approach & Quality of Services',
  },
  {
    icon: DollarSign,
    title: 'Cost Effectiveness',
  },
  {
    icon: Clock,
    title: 'Time Zone Advantage',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
  },
  {
    icon: Building,
    title: 'Industries Expertise',
  },
  {
    icon: Zap,
    title: 'Real Time Handling of Tasks',
  },
];

const WhyChoose = () => {
  return (
    <section className="py-16 lg:py-24 bg-dark-bg text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors duration-300 border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center gradient-bg rounded-lg shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;