"use client"

export function SafeGambling() {
  return (
    <section className="py-12 section-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Responsible Gambling</h2>
            <p className="text-gray-300 mb-6">
              We promote safe and responsible gambling. Your wellbeing is our priority.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Gambling Should Be Fun */}
          <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-500 mb-3">Gambling Should Be Fun</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Betting should always be an enjoyable form of entertainment, not a way to make money or solve financial
              problems. If gambling stops being fun or becomes stressful, it may be time to take a break or seek help.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Remember that the house always has an edge, and losses are part of the game. Never bet more than you can
              afford to lose, and always view any money you wager as the cost of entertainment.
            </p>
          </div>

          {/* Set Limits */}
          <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-500 mb-3">Set Your Limits</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Before you start betting, decide how much money and time you can afford to spend. Stick to these limits
              regardless of whether you're winning or losing. Most reputable Irish betting sites offer tools to help you
              set:
            </p>
            <ul className="text-gray-300 text-sm space-y-1 mb-3">
              <li>
                • <strong className="text-white">Deposit limits:</strong> Control how much you can deposit daily,
                weekly, or monthly
              </li>
              <li>
                • <strong className="text-white">Loss limits:</strong> Set maximum amounts you're willing to lose in a
                given period
              </li>
              <li>
                • <strong className="text-white">Time limits:</strong> Restrict how long you spend on betting sites
              </li>
              <li>
                • <strong className="text-white">Bet limits:</strong> Cap the size of individual bets you can place
              </li>
            </ul>
            <p className="text-gray-300 text-sm leading-relaxed">
              These tools are designed to help you maintain control and ensure gambling remains a fun activity rather
              than a problem.
            </p>
          </div>

          {/* Warning Signs */}
          <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-500 mb-3">Warning Signs to Watch For</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              It's important to recognize when gambling might be becoming a problem. Be aware of these warning signs:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Spending more money than planned</li>
                <li>• Chasing losses with bigger bets</li>
                <li>• Lying about gambling activities</li>
                <li>• Neglecting work, family, or social activities</li>
                <li>• Borrowing money to gamble</li>
              </ul>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Feeling anxious when not gambling</li>
                <li>• Using gambling to escape problems</li>
                <li>• Inability to stop despite wanting to</li>
                <li>• Mood swings related to wins/losses</li>
                <li>• Gambling with money needed for essentials</li>
              </ul>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              If you recognize any of these signs in yourself or someone you know, it's important to seek help
              immediately.
            </p>
          </div>

          {/* Getting Help */}
          <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-500 mb-3">Getting Help and Support</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              If you're struggling with gambling, remember that help is available. Professional support services offer:
            </p>
            <ul className="text-gray-300 text-sm space-y-1 mb-3">
              <li>• Free, confidential counseling and support</li>
              <li>• Online chat services and helplines</li>
              <li>• Face-to-face counseling sessions</li>
              <li>• Support groups and peer networks</li>
              <li>• Financial advice and debt management</li>
              <li>• Family support services</li>
            </ul>
            <p className="text-gray-300 text-sm leading-relaxed">
              Organizations like GambleAware, GamCare, and Gambling Therapy provide comprehensive support for problem
              gambling. In Ireland, you can also contact Gamblers Anonymous Ireland for local support groups and
              meetings.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="bg-red-600/90 backdrop-blur-sm text-white px-6 py-3 rounded-lg inline-block font-semibold mb-3">
            18+ | Gambling can be addictive — Play safe
          </div>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            This site is intended for users aged 18 and over. If you're concerned about your gambling or that of someone
            you know, please contact a gambling support organization for help and advice.
          </p>
        </div>
      </div>
    </section>
  )
}
