import { useParams, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Share2 } from 'lucide-react';

export default function UpdateDetail() {
  const { updateId } = useParams<{ updateId: string }>();
  const { t, i18n } = useTranslation();
  const [, navigate] = useLocation();

  const updateDetails: Record<string, any> = {
    'health-initiative': {
      title: t('updates.healthInitiative.title'),
      description: t('updates.healthInitiative.description'),
      date: 'June 8, 2026',
      category: 'News',
      categoryColor: 'bg-blue-100 text-blue-800',
    },
    'partnership-announcement': {
      title: t('updates.partnership.title'),
      description: t('updates.partnership.description'),
      date: 'June 1, 2026',
      category: 'Partnership',
      categoryColor: 'bg-purple-100 text-purple-800',
    },
    'research-report': {
      title: t('updates.researchReport.title'),
      description: t('updates.researchReport.description'),
      date: 'May 25, 2026',
      category: 'Research',
      categoryColor: 'bg-green-100 text-green-800',
    },
    'field-expansion': {
      title: t('updates.fieldExpansion.title'),
      description: t('updates.fieldExpansion.description'),
      date: 'May 18, 2026',
      category: 'Expansion',
      categoryColor: 'bg-orange-100 text-orange-800',
    },
  };

  const update = updateId ? updateDetails[updateId] : null;

  if (!update) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{t('common.notFound')}</h1>
          <Button onClick={() => navigate('/updates')}>{t('common.backToUpdates')}</Button>
        </div>
      </div>
    );
  }

  const isArabic = i18n.language === 'ar';

  const relatedUpdates = [
    {
      title: t('updates.related1.title'),
      date: 'May 10, 2026',
      category: 'News',
    },
    {
      title: t('updates.related2.title'),
      date: 'April 28, 2026',
      category: 'Partnership',
    },
    {
      title: t('updates.related3.title'),
      date: 'April 15, 2026',
      category: 'Research',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`mb-6 flex items-center gap-2 text-green-400 text-sm font-semibold ${isArabic ? 'flex-row-reverse' : ''}`}>
            <span>{t('updateDetail.breadcrumb')}</span>
            <ArrowRight size={16} />
          </div>
          <h1 className={`text-5xl font-bold mb-6 leading-tight ${isArabic ? 'text-right' : ''}`}>
            {update.title}
          </h1>
          <div className="w-24 h-1 bg-green-500 mb-6"></div>
          <div className={`flex items-center gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${update.categoryColor}`}>
              {update.category}
            </span>
            <span className="text-gray-300">{update.date}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Article Content */}
        <div className={`mb-16 ${isArabic ? 'text-right' : ''}`}>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {update.description}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t('updateDetail.content')}
          </p>
        </div>

        {/* Share Section */}
        <div className={`border-t border-b border-gray-200 py-8 mb-16 flex items-center gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
          <span className="font-semibold text-slate-900">{t('updateDetail.share')}</span>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 size={16} />
              Facebook
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 size={16} />
              Twitter
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 size={16} />
              LinkedIn
            </Button>
          </div>
        </div>

        {/* Related Updates */}
        <div className={`mb-16 ${isArabic ? 'text-right' : ''}`}>
          <h2 className="text-3xl font-bold mb-8 text-slate-900">{t('updateDetail.relatedUpdates')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedUpdates.map((related, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-sm text-gray-500 mb-2">{related.date}</div>
                <h3 className="font-semibold text-slate-900 mb-3 line-clamp-2">{related.title}</h3>
                <span className="text-xs font-semibold text-green-600">{related.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className={`bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-12 text-center ${isArabic ? 'text-right' : ''}`}>
          <h2 className="text-3xl font-bold mb-4 text-slate-900">{t('updateDetail.subscribe')}</h2>
          <p className="text-lg text-gray-700 mb-8">{t('updateDetail.subscribeDescription')}</p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            {t('common.subscribe')}
          </Button>
        </div>
      </div>
    </div>
  );
}
