import { useParams, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

export default function ResearchDetail() {
  const { researchId } = useParams<{ researchId: string }>();
  const { t, i18n } = useTranslation();
  const [, navigate] = useLocation();

  const researchDetails: Record<string, any> = {
    'health-systems': {
      title: t('research.health.title'),
      description: t('research.health.description'),
      date: 'June 2026',
      category: 'Health & Nutrition',
    },
    'education-outcomes': {
      title: t('research.education.title'),
      description: t('research.education.description'),
      date: 'May 2026',
      category: 'Education & Skills',
    },
    'economic-livelihoods': {
      title: t('research.economic.title'),
      description: t('research.economic.description'),
      date: 'April 2026',
      category: 'Economic Resilience',
    },
  };

  const research = researchId ? researchDetails[researchId] : null;

  if (!research) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{t('common.notFound')}</h1>
          <Button onClick={() => navigate('/research')}>{t('common.backToResearch')}</Button>
        </div>
      </div>
    );
  }

  const isArabic = i18n.language === 'ar';

  const findings = [
    {
      title: t('researchDetail.finding1.title'),
      description: t('researchDetail.finding1.description'),
      stat: '65%',
    },
    {
      title: t('researchDetail.finding2.title'),
      description: t('researchDetail.finding2.description'),
      stat: '40%',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`mb-6 flex items-center gap-2 text-green-400 text-sm font-semibold ${isArabic ? 'flex-row-reverse' : ''}`}>
            <span>{t('researchDetail.breadcrumb')}</span>
            <ArrowRight size={16} />
          </div>
          <h1 className={`text-5xl font-bold mb-6 leading-tight ${isArabic ? 'text-right' : ''}`}>
            {research.title}
          </h1>
          <div className="w-24 h-1 bg-green-500 mb-6"></div>
          <div className={`flex gap-6 text-gray-300 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <span>{research.date}</span>
            <span>•</span>
            <span>{research.category}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Abstract */}
        <div className={`mb-16 ${isArabic ? 'text-right' : ''}`}>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">{t('researchDetail.abstract')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {research.description}
          </p>
        </div>

        {/* Key Findings */}
        <div className={`mb-16 ${isArabic ? 'text-right' : ''}`}>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">{t('researchDetail.keyFindings')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {findings.map((finding, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-6">
                <div className="text-4xl font-bold text-green-600 mb-2">{finding.stat}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{finding.title}</h3>
                <p className="text-gray-700">{finding.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className={`mb-16 ${isArabic ? 'text-right' : ''}`}>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">{t('researchDetail.methodology')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {t('researchDetail.methodologyContent')}
          </p>
        </div>

        {/* Download Section */}
        <div className={`bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-12 text-center ${isArabic ? 'text-right' : ''}`}>
          <h2 className="text-3xl font-bold mb-4 text-slate-900">{t('researchDetail.downloadReport')}</h2>
          <p className="text-lg text-gray-700 mb-8">{t('researchDetail.downloadDescription')}</p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white gap-2"
          >
            <Download size={20} />
            {t('researchDetail.downloadPDF')}
          </Button>
        </div>
      </div>
    </div>
  );
}
