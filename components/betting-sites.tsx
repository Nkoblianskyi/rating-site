"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { bettingSites } from "@/lib/data"

export function BettingSites() {
  const getBadgeForSite = (index: number) => {
    if (index === 0) return { text: "PLAYER'S CHOICE", class: "badge-gold" }
    if (index === 1) return { text: "EXCLUSIVE OFFER", class: "badge-orange" }
    if (index === 2) return { text: "MOST POPULAR", class: "badge-orange" }
    return null
  }

  return (
    <section id="betting-sites" className="py-2 section-transparent">
      <div className="container mx-auto px-4">
        <div className="mb-3">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 text-center max-w-md mx-auto">
            <h2 className="text-xl font-bold text-white mb-1">Top Betting Sites</h2>
            <p className="text-gray-300 text-xs">Expert reviewed and ranked for Irish players</p>
          </div>
        </div>

        <div className="space-y-3 max-w-5xl mx-auto">
          {bettingSites.slice(0, 3).map((site, index) => {
            const badge = getBadgeForSite(index)
            return (
              <div key={site.id} className="betting-card p-3">
                {/* Badge */}
                {badge && (
                  <div className="flex justify-start mb-2">
                    <span className={badge.class}>{badge.text}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
                  {/* Logo Section */}
                  <div className="text-center">
                    <Image
                      src={site.logo || "/placeholder.svg"}
                      alt={`${site.name} logo`}
                      width={120}
                      height={60}
                      className="mx-auto mb-1"
                    />
                    <div className="flex justify-center space-x-1">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-green-500 rounded-full"></div>
                      ))}
                    </div>
                  </div>

                  {/* Bonus Section */}
                  <div className="text-center">
                    <div className="bonus-text text-sm mb-0">
                      {site.bonus.split(" ")[0]} {site.bonus.split(" ")[1]}
                    </div>
                    <div className="bonus-subtext text-base">{site.bonus.split(" ").slice(2).join(" ")}</div>
                    <div className="text-xs text-gray-400 mt-1">{site.claimed.toLocaleString()} claimed</div>
                  </div>

                  {/* Rating Section */}
                  <div className="text-center">
                    <div className="rating-large text-3xl">{site.rating}</div>
                    <div className="flex justify-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(site.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-xs text-gray-300">User Rating</div>
                  </div>

                  {/* CTA Section */}
                  <div className="text-center">
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-2 px-4 rounded-full text-sm mb-1">
                      GET BONUS
                    </Button>
                    <div className="text-xs text-gray-300 mb-1">Visit Site</div>
                    <div className="flex justify-center space-x-1">
                      <div className="w-6 h-4 bg-blue-600 rounded text-white text-[8px] flex items-center justify-center">
                        VISA
                      </div>
                      <div className="w-6 h-4 bg-red-600 rounded text-white text-[8px] flex items-center justify-center">
                        MC
                      </div>
                      <div className="w-6 h-4 bg-blue-800 rounded text-white text-[8px] flex items-center justify-center">
                        PP
                      </div>
                      <div className="w-6 h-4 bg-green-600 rounded text-white text-[8px] flex items-center justify-center">
                        +
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="mt-2 pt-1 border-t border-gray-700">
                  <p className="text-[10px] text-gray-400 text-center">
                    18+ | GambleAware.org | New customers only | Min deposit required | T&C Apply
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
