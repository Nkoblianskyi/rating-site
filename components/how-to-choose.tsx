"use client"

export function HowToChoose() {
  const steps = [
    {
      number: "1️⃣",
      title: "Understand Your Betting Preferences",
      content:
        "Before choosing a betting platform, it's important to consider what type of bettor you are. Whether you enjoy live betting, prefer specific sports like GAA or football, or seek casino integration — identifying your priorities helps narrow down your options.",
    },
    {
      number: "2️⃣",
      title: "Check for Licensing & Security",
      content:
        "Always ensure the site is fully licensed and regulated in Ireland. This guarantees a safe, secure betting environment where your funds and personal data are protected.",
    },
    {
      number: "3️⃣",
      title: "Look for Competitive Odds",
      content:
        "Odds quality can greatly affect your potential returns. Top Irish betting sites consistently offer competitive odds across a wide range of sports and events — giving you better value with every wager.",
    },
    {
      number: "4️⃣",
      title: "Evaluate Mobile Experience",
      content:
        "Since many Irish players bet on mobile devices, it's crucial to choose a site with an intuitive, responsive mobile app or web interface. A seamless experience ensures you can place bets easily anytime, anywhere.",
    },
    {
      number: "5️⃣",
      title: "Consider Promotions & Loyalty Offers",
      content:
        "While welcome bonuses are attractive, also review ongoing promotions and loyalty programs. The best sites reward regular players with enhanced offers, free bets, and personalised incentives.",
    },
  ]

  return (
    <section className="py-12 section-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              How to Choose the Right Betting Site for You
            </h2>
            <p className="text-gray-300">Step-by-step guide to finding your perfect betting platform</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-red-500 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-red-500 flex-shrink-0">{step.number}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
