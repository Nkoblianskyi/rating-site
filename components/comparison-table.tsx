"use client"

export function ComparisonTable() {
  const valuedFactors = [
    {
      title: "Trusted Irish License",
      description: "All recommended sites are fully licensed and regulated in Ireland for safe play.",
    },
    {
      title: "Fast & Secure Payments",
      description: "Fast withdrawals and a wide range of secure deposit options are key for Irish players.",
    },
    {
      title: "Local Sports Focus",
      description: "Coverage of popular Irish sports — GAA, horse racing, rugby, and football is highly valued.",
    },
    {
      title: "Seamless Mobile Experience",
      description: "Irish players often bet on mobile — apps and mobile-optimised sites are essential.",
    },
    {
      title: "Valuable Bonuses",
      description: "Quality welcome offers and loyalty rewards attract many new and repeat bettors.",
    },
    {
      title: "Strong Responsible Gambling Policies",
      description: "Irish bettors value clear tools for self-exclusion and support from trusted organisations.",
    },
  ]

  return (
    <section id="comparison" className="py-12 section-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">What Irish Bettors Value Most</h2>
            <p className="text-gray-300">The key factors Irish punters care about when choosing a betting site</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {valuedFactors.map((factor, index) => (
            <div
              key={index}
              className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-red-500 transition-all duration-300"
            >
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-2">{factor.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{factor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
