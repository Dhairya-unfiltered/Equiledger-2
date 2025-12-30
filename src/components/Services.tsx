import { useState } from 'react';
import { BookOpen, Calculator, RefreshCw, TrendingUp, FileSearch, Receipt, ChevronDown, ChevronUp, Check } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Bookkeeping',
    shortDesc: 'Need help managing your day-to-day accounting tasks? We\'re here to make it simple.',
    fullDesc: `Our bookkeeping experts handle everything — from recording bank transactions and managing Accounts Payable and Receivable to processing payroll — all in real time and with complete accuracy.

We ensure your books stay clean, current, and compliant, so you can focus on running your business while we take care of the numbers.`,
  },
  {
    icon: Calculator,
    title: 'End-to-end Accounting',
    shortDesc: 'Struggling to stay on top of your accounting tasks? You\'re not alone — and we\'re here to help.',
    fullDesc: `Leave the accounting to us so you can stay focused on what truly matters — growing your business.

Our accounting professionals handle all aspects of management accounting, from recording transactions to preparing and reporting Cash Flow Statements, Profit & Loss Statements, and Balance Sheets — on a monthly, quarterly, or annual basis.

Our services cover every bookkeeping and management activity, including:`,
    features: [
      'Inventory management',
      'Payroll processing',
      'Prepayment schedules and accruals',
      'Depreciation and asset tracking',
      'Loan and EMI management',
    ],
    closing: 'With our structured month-end and year-end closing process, you\'ll have accurate, timely financial reports that give you full control and confidence over your business performance.',
  },
  {
    icon: RefreshCw,
    title: 'One time Cleanup & Catchup',
    shortDesc: 'Are your books messy, outdated, or full of inconsistencies — making it hard to make timely, accurate business decisions?',
    fullDesc: `Well, Action speaks louder than words! In the same way, a well recorded book shows the true picture of your business helping you to take accurate decisions in real time with confidence!

Take the help of our expert team to clear the mess under one time cleanup and catchup program designed to bring order and accuracy back to your financial records within a defined timeline. This service includes:`,
    features: [
      'Recording or reclassifying bank and credit card transactions',
      'Reconciliation of all accounts',
      'Identifying and removing duplicate or incorrect entries',
      'Posting adjusting entries for accuracy',
      'Ensuring consistency with accounting standards',
      'Migrating books to updated systems or formats',
    ],
    closing: 'Every business is unique, so the scope varies based on your books — but the goal remains the same: To bring your books fully up to date and ready for the latest closing date with complete accuracy and confidence.',
  },
  {
    icon: TrendingUp,
    title: 'Budgeting & Forecasting',
    shortDesc: 'Are you struggling to understand your business performance or project future growth with confidence?',
    fullDesc: `Do financial reports feel complicated or time-consuming to prepare and interpret?

Your worry ends here!

Our expert team helps you analyze and showcase your business growth clearly and systematically. We prepare customized financial reports — monthly, quarterly, half-yearly, and annually — designed to meet your business needs and provide actionable insights.

With accurate data and meaningful analysis, you'll gain a clear picture of your company's current position and future potential — empowering you to make smarter, faster decisions.`,
  },
  {
    icon: FileSearch,
    title: 'Audit Packages',
    shortDesc: 'Our Audit Package Service is a comprehensive solution designed to make your audit process smooth and stress-free.',
    fullDesc: `We prepare everything your auditors need — including trial balance and general ledger reviews, account reconciliations, financial statements, and all supporting schedules and documents.

With well-organized, accurate, and audit-ready records, you'll save valuable time and ensure a seamless review process.

Get in touch with us to learn how we can help you prepare a complete, compliant, and professional audit package.`,
  },
  {
    icon: Receipt,
    title: 'Sales Tax/Prompt Tax Filing',
    shortDesc: 'Not able to manage the deadlines of paying taxes? Who would want to pay hefty penalties on missing deadlines?',
    fullDesc: `Our experts will help you manage your deadlines. We track every deadline, handle all filings with precision and thereby saving your hard earned money spending on paying huge penalties.`,
  },
];

interface ServiceCardProps {
  service: typeof services[0];
  isExpanded: boolean;
  onToggle: () => void;
}

const ServiceCard = ({ service, isExpanded, onToggle }: ServiceCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 group border border-border/50 flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 flex items-center justify-center gradient-bg rounded-xl shrink-0">
          <service.icon className="w-7 h-7 text-white stroke-[1.5]" />
        </div>
        <h3 className="text-lg font-semibold text-foreground leading-tight pt-2">
          {service.title}
        </h3>
      </div>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {service.shortDesc}
      </p>

      {isExpanded && (
        <div className="animate-fade-in">
          <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line mb-4">
            {service.fullDesc}
          </p>
          
          {service.features && (
            <ul className="space-y-2 mb-4">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
          
          {service.closing && (
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.closing}
            </p>
          )}
        </div>
      )}

      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-cyan text-sm font-medium hover:text-indigo mt-auto pt-2 transition-colors"
      >
        {isExpanded ? (
          <>
            Show Less <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            Read More <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
};

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-secondary">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
          Services We <span className="gradient-text">Offer</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;