import { CheckCircle, Zap, Users } from 'lucide-react'

const stats = [
  {
    icon: CheckCircle,
    value: '99%',
    label: 'Claim Satisfaction',
  },
  {
    icon: Zap,
    value: '<24h',
    label: 'Claims Paid',
  },
  {
    icon: Users,
    value: '2M+',
    label: 'Active Policyholders',
  },
]

export function Stats() {
  return (
    <section className="section-padding bg-uhuy-blue text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon
            return (
              <div
                key={idx}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <IconComponent size={40} className="mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
