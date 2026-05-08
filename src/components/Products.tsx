import { Shield, Heart, TrendingUp } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Uhuy Shield',
    subtitle: 'Term Life Insurance',
    tagline: 'Your family\'s safety net.',
    description: 'Flexible premiums, instant approval, and coverage up to $2M.',
    icon: Shield,
    color: 'from-blue-500 to-uhuy-blue',
  },
  {
    id: 2,
    name: 'Uhuy Pulse',
    subtitle: 'Health & Wellness',
    tagline: 'Live better, pay less.',
    description: 'Telemedicine access, fitness tracking rewards, and mental health coverage.',
    icon: Heart,
    color: 'from-uhuy-green to-emerald-500',
  },
  {
    id: 3,
    name: 'Uhuy Horizon',
    subtitle: 'Future Savings',
    tagline: 'Wealth that grows with you.',
    description: 'Long-term protection, education fund options, and tax-efficient growth.',
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-500',
  },
]

export function Products() {
  return (
    <section id="products" className="section-padding bg-uhuy-light-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-uhuy-dark mb-4">
            The Uhuy Trio
          </h2>
          <p className="text-lg text-gray-600">
            Three powerful plans designed for every stage of your life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => {
            const IconComponent = product.icon
            return (
              <div
                key={product.id}
                className="bg-uhuy-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}>
                  <IconComponent size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-uhuy-dark mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{product.subtitle}</p>

                <p className="text-lg font-semibold text-uhuy-blue mb-4">
                  {product.tagline}
                </p>

                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>

                <button className="btn-secondary w-full">
                  Learn More
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
