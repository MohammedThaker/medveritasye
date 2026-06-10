import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 md:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how Medveritas can provide the rigorous evidence you need to ensure your next intervention in Yemen is a success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <button className="px-8 py-3 bg-green-600 text-slate-900 font-bold font-bold rounded hover:bg-green-700 transition-all duration-200 hover:shadow-lg active:scale-95">
              Request a Proposal
            </button>
            <button className="px-8 py-3 border-2 border-green-600 text-green-600 font-bold font-bold rounded hover:bg-green-600 hover:text-slate-900 transition-all duration-200">
              Get in Touch
            </button>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 text-gray-300">
            <p className="flex items-center justify-center gap-2">
              <span></span>
              <span>Sana'a, Yemen</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span>📧</span>
              <span>info@medveritas.com</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span>📱</span>
              <span>+967 (0) XXX XXX XXX</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
