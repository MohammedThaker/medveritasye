import { ArrowRight } from 'lucide-react';

export default function ImpactReport() {
  return (
    <section className="bg-slate-50 py-20 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h3 className="text-sm font-bold font-bold text-green-600 mb-4 tracking-widest">
              FEATURED CASE STUDY
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold font-bold text-slate-900 mb-6">
              Reaching the Unreachable
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>119-District Polio Vaccination Coverage Survey</strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Medveritas conducted a comprehensive polio vaccination coverage survey across 119 districts in Yemen, including high-risk and hard-to-reach areas. Our nationwide field network and robust methodology delivered high-quality, actionable data that informed microplanning and strengthened immunization programs.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-bold font-bold rounded hover:bg-green-700 transition-all duration-200 hover:shadow-lg active:scale-95">
              Read Full Case Study
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Card with Border */}
          <div 
            className="relative p-8 border-4 border-green-600 bg-white rounded-lg shadow-lg animate-slide-in-left"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="text-center mb-6">
              <div className="text-6xl font-bold font-bold text-green-600 mb-2">119</div>
              <div className="text-xl text-slate-900 font-semibold">Districts Surveyed</div>
            </div>
            <img
              src="surveyor.png"
              alt="Case Study"
              className="w-full h-64 object-cover rounded mb-6"
            />
            <h3 className="text-2xl font-bold font-bold text-slate-900 mb-3">
              Polio Vaccination Coverage Survey
            </h3>
            <p className="text-gray-600 leading-relaxed">
              High-quality data collection across hard-to-reach areas using adaptive field strategies and real-time monitoring to strengthen immunization programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
