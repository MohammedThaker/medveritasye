import { ArrowRight } from 'lucide-react';

export default function RecentNews() {
  const news = [
    {
      type: 'Case Study',
      date: 'JUN 2026',
      title: 'Reaching the Unreachable: 119-District Vaccination Survey',
      description: 'How we delivered high-quality data across 119 hard-to-reach districts using adaptive field strategies and real-time monitoring.',
      link: '#insights-1'
    },
    {
      type: 'Methodology',
      date: 'MAY 2026',
      title: 'LQAS in Practice: Rapid Quality Assessment in Conflict Zones',
      description: 'Inside our LQAS approach to generate actionable evidence quickly—when decisions can\'t wait.',
      link: '#insights-2'
    },
    {
      type: 'Sector Update',
      date: 'APR 2026',
      title: 'Beyond Health: Medveritas Expands into Education and Governance',
      description: 'Strengthening systems and outcomes through evidence, analytics, and local partnerships.',
      link: '#insights-3'
    }
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-bold text-slate-900 mb-4">
            Insights & Thought Leadership
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Research briefs, methodology spotlights, and sector analysis from our team
          </p>
          <div className="w-16 h-1 bg-green-600" />
        </div>

        {/* News List */}
        <div className="space-y-6 mb-12">
          {news.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group block p-6 bg-white rounded-lg border border-gray-200 hover:border-green-600 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-bold font-bold text-green-600 mb-2">
                    {item.type} • {item.date}
                  </p>
                  <h3 className="text-xl font-bold font-bold text-slate-900 group-hover:text-green-600 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
                <ArrowRight className="flex-shrink-0 text-slate-900 group-hover:text-green-600 transition-colors mt-1" size={20} />
              </div>
            </a>
          ))}
        </div>

        {/* More News Button */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-slate-900 text-slate-900 font-bold font-bold rounded hover:bg-slate-900 hover:text-white transition-all duration-200">
            View All Insights
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
