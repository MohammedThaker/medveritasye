import { useEffect, useState } from 'react';

export default function OurResults() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('results-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '300+', unit: 'Field Staff', label: 'deployed across all governorates of Yemen' },
    { value: '34', unit: 'Governorates', label: 'comprehensive coverage nationwide' },
    { value: '20+', unit: 'Projects', label: 'completed in 2023–2025' },
    { value: '10', unit: 'Years', label: 'of operational excellence' }
  ];

  return (
    <section id="results-section" className="bg-white py-20 md:py-32">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold font-bold mb-4 text-center text-slate-900 animate-fade-in">
          Why Choose Medveritas
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Trusted by leading international organizations for rigorous research and monitoring in Yemen's most challenging contexts
        </p>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg bg-slate-50 border border-gray-200 hover:border-green-600 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                {isVisible && (
                  <div className="text-5xl md:text-6xl font-bold font-bold text-green-600 mb-2">
                    {stat.value}
                  </div>
                )}
                <div className="text-lg text-slate-900 font-semibold">
                  {stat.unit}
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="bg-slate-50 rounded-lg p-12 text-center animate-slide-up">
          <h3 className="text-sm font-bold font-bold text-green-600 mb-6 tracking-widest">
            TRUSTED BY LEADING ORGANIZATIONS
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-gray-600 font-semibold">WHO</div>
            <div className="text-gray-600 font-semibold">UNICEF</div>
            <div className="text-gray-600 font-semibold">CARE</div>
            <div className="text-gray-600 font-semibold">FAO</div>
            <div className="text-gray-600 font-semibold">EMPHNET</div>
          </div>
        </div>
      </div>
    </section>
  );
}
