import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="section-padding bg-gradient-to-b from-uhuy-light-gray to-uhuy-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-uhuy-dark leading-tight">
              Insurance that actually keeps up with you.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Uhuy Life combines cutting-edge technology with human-centric protection. No jargon, no hidden fees—just pure peace of mind for the modern world.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary">View My Plans</button>
              <button className="flex items-center gap-2 px-6 py-3 border-2 border-uhuy-blue text-uhuy-blue font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200">
                <Play size={20} />
                How it Works
              </button>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-uhuy-blue to-uhuy-green rounded-2xl overflow-hidden shadow-lg aspect-square md:aspect-auto">
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-20 h-20 bg-white/40 rounded-full flex items-center justify-center">
                      <Play size={48} className="text-white ml-2" />
                    </div>
                  </div>
                  <p className="text-white font-semibold">Modern lifestyle imagery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
