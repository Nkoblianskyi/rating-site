"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="section-transparent py-3 border-b border-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-2 md:mb-0">
            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 mb-2">
              <h1 className="text-lg md:text-xl font-bold text-white mb-1">
                Ireland's Top Betting Sites
                <span className="block text-red-500">Expert Tested & Reviewed</span>
              </h1>
              <p className="text-gray-300 text-xs mb-2">
                Trusted rankings of the best Irish-licensed betting platforms with exclusive bonuses.
              </p>
              <div className="flex space-x-3">
                <Button
                  size="sm"
                  className="bg-red-600 hover:bg-red-700 text-white text-xs py-1 h-7"
                  onClick={() => {
                    const element = document.getElementById("betting-sites")
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  View Top Sites
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 hover:bg-gray-800/50 text-xs py-1 h-7 text-slate-600"
                >
                  Compare Features
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-800/80 backdrop-blur-sm px-2 py-0.5 rounded text-xs text-gray-300 border border-gray-700">
                <span className="text-white font-medium">100%</span> Trusted
              </div>
              <div className="bg-gray-800/80 backdrop-blur-sm px-2 py-0.5 rounded text-xs text-gray-300 border border-gray-700">
                <span className="text-white font-medium">18+</span> Only
              </div>
              <div className="bg-gray-800/80 backdrop-blur-sm px-2 py-0.5 rounded text-xs text-gray-300 border border-gray-700">
                <span className="text-white font-medium">🇮🇪</span> Irish
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
