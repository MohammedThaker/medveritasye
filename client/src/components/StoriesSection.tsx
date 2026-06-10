import { useState } from 'react';
import { Play } from 'lucide-react';

export default function StoriesSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 'LowNJXh0EyE',
      title: 'Financing Building Efficiency to Help Bolster Communities',
      thumbnail: 'https://img.youtube.com/vi/LowNJXh0EyE/maxresdefault.jpg'
    },
    {
      id: 'ZCl528s0eGk',
      title: 'Mission 300 is Powering Africa\'s Future',
      thumbnail: 'https://img.youtube.com/vi/ZCl528s0eGk/maxresdefault.jpg'
    },
    {
      id: 'm34bqezIVG4',
      title: 'BEHIND THE SCENES - How We Built a Kitchen in MrBeast\'s School in 2 Weeks',
      thumbnail: 'https://img.youtube.com/vi/m34bqezIVG4/maxresdefault.jpg'
    }
  ];

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-bold text-slate-900 mb-4">
            Stories Behind the Data
          </h2>
          <p className="text-lg text-gray-600">
            Discover the real stories that drive our impact
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center group-hover:bg-yellow-300 transition-all duration-300 transform group-hover:scale-110">
                    <Play size={32} className="text-slate-900 fill-slate-900 ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4 bg-slate-50 group-hover:bg-slate-100 transition-colors">
                <h3 className="font-bold font-bold text-slate-900 line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-green-400 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
