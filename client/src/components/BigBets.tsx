import { ArrowRight } from 'lucide-react';

export default function BigBets() {
  const bets = [
    {
      number: '1',
      title: 'Research & Evaluation',
      description: 'Impact evaluations, household surveys, and program assessments using LQAS and cluster sampling methodologies',
      link: '#research'
    },
    {
      number: '2',
      title: 'Third-Party Monitoring',
      description: 'Independent verification of humanitarian and development program implementation across all 34 governorates',
      link: '#monitoring'
    },
    {
      number: '3',
      title: 'Strategy & Governance',
      description: 'Institutional strengthening, policy analysis, and governance assessments for public and civil society organizations',
      link: '#strategy'
    },
    {
      number: '4',
      title: 'Capacity Building',
      description: 'Training, mentoring, and organizational development for local NGOs, government bodies, and community groups',
      link: '#capacity'
    }
  ];

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Comprehensive research, monitoring, and strategy solutions for complex environments
          </p>
          <div className="w-16 h-1 bg-green-600" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {bets.map((bet, index) => (
            <div
              key={index}
              className="group p-8 border-l-4 border-green-600 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl font-bold font-bold text-green-600 mb-4">
                {bet.number}
              </div>
              <h3 className="text-2xl font-bold font-bold text-slate-900 mb-4">
                {bet.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {bet.description}
              </p>
              <a
                href={bet.link}
                className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-green-600 transition-colors group-hover:translate-x-2 transition-transform"
              >
                Learn More
                <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-slate-50 p-6 md:p-12 rounded-lg mb-12">
          <div className="text-center animate-slide-up" style={{ animationDelay: '0s' }}>
            <div className="text-3xl md:text-5xl font-bold font-bold text-green-600 mb-2">300+</div>
            <div className="text-sm md:text-base text-slate-900 font-semibold">Field Staff</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl md:text-5xl font-bold font-bold text-green-600 mb-2">34</div>
            <div className="text-sm md:text-base text-slate-900 font-semibold">Governorates</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl md:text-5xl font-bold font-bold text-green-600 mb-2">20+</div>
            <div className="text-sm md:text-base text-slate-900 font-semibold">Projects</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl md:text-5xl font-bold font-bold text-green-600 mb-2">10</div>
            <div className="text-sm md:text-base text-slate-900 font-semibold">Years</div>
          </div>
        </div>
      </div>
    </section>
  );
}
