import { useParams, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { t, i18n } = useTranslation();
  const [, navigate] = useLocation();

  const serviceDetails: Record<string, any> = {
    'research-evaluation': {
      title: t('services.research.title'),
      description: t('services.research.description'),
      icon: '📊',
    },
    'third-party-monitoring': {
      title: t('services.monitoring.title'),
      description: t('services.monitoring.description'),
      icon: '🔍',
    },
    'data-analysis': {
      title: t('services.dataAnalysis.title'),
      description: t('services.dataAnalysis.description'),
      icon: '📈',
    },
    'capacity-building': {
      title: t('services.capacityBuilding.title'),
      description: t('services.capacityBuilding.description'),
      icon: '🤝',
    },
  };

  const service = serviceId ? serviceDetails[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center px-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{t('common.notFound')}</h1>
            <Button onClick={() => navigate('/services')}>{t('common.backToServices')}</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const isArabic = i18n.language === 'ar';

  const benefits = [
    {
      title: t('serviceDetail.benefit1.title'),
      description: t('serviceDetail.benefit1.description'),
    },
    {
      title: t('serviceDetail.benefit2.title'),
      description: t('serviceDetail.benefit2.description'),
    },
    {
      title: t('serviceDetail.benefit3.title'),
      description: t('serviceDetail.benefit3.description'),
    },
    {
      title: t('serviceDetail.benefit4.title'),
      description: t('serviceDetail.benefit4.description'),
    },
  ];

  const methodology = [
    {
      title: t('serviceDetail.step1.title'),
      description: t('serviceDetail.step1.description'),
    },
    {
      title: t('serviceDetail.step2.title'),
      description: t('serviceDetail.step2.description'),
    },
    {
      title: t('serviceDetail.step3.title'),
      description: t('serviceDetail.step3.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-32 pb-12 md:pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`mb-4 md:mb-6 flex items-center gap-2 text-green-400 text-xs md:text-sm font-semibold ${isArabic ? 'flex-row-reverse' : ''}`}>
            <span>{t('serviceDetail.breadcrumb')}</span>
            <ArrowRight size={16} />
          </div>
          <h1 className={`text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight ${isArabic ? 'text-right' : ''}`}>
            {service.title}
          </h1>
          <div className={`w-16 md:w-24 h-1 bg-green-500 mb-4 md:mb-6 ${isArabic ? 'ml-auto' : ''}`}></div>
          <p className={`text-base md:text-xl text-gray-300 leading-relaxed ${isArabic ? 'text-right' : ''}`}>
            {service.description}
          </p>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-6 md:pt-8">
        <button
          onClick={() => navigate('/services')}
          className={`inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors mb-6 md:mb-8 ${isArabic ? 'flex-row-reverse' : ''}`}
        >
          <ArrowLeft size={20} />
          {t('common.back')}
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Overview Section */}
        <div className={`mb-12 md:mb-16 ${isArabic ? 'text-right' : ''}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-slate-900">{t('serviceDetail.overview')}</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            {t('serviceDetail.overviewContent')}
          </p>
        </div>

        {/* Key Benefits */}
        <div className={`mb-12 md:mb-16 ${isArabic ? 'text-right' : ''}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-slate-900">{t('serviceDetail.keyBenefits')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-200">
                <div className={`flex items-start gap-3 md:gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm md:text-base">
                    {index + 1}
                  </div>
                  <div className={isArabic ? 'text-right' : ''}>
                    <h3 className="font-semibold text-slate-900 mb-1 md:mb-2 text-sm md:text-base">{benefit.title}</h3>
                    <p className="text-gray-700 text-xs md:text-sm">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className={`mb-12 md:mb-16 ${isArabic ? 'text-right' : ''}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-slate-900">{t('serviceDetail.methodology')}</h2>
          <div className="space-y-4 md:space-y-6">
            {methodology.map((step, index) => (
              <div key={index} className={`flex gap-4 md:gap-6 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-md bg-green-500 text-white font-bold text-sm md:text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className={isArabic ? 'text-right' : ''}>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-sm md:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 md:p-12 text-center ${isArabic ? 'text-right' : ''}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-slate-900">{t('serviceDetail.ready')}</h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">{t('serviceDetail.readyDescription')}</p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white w-full md:w-auto"
            onClick={() => navigate('/contact')}
          >
            {t('common.contactUs')}
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
