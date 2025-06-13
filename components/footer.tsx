"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/betting-guide", label: "Betting Guide" },
    { href: "/cookie", label: "Cookie Policy" },
    { href: "/privacy", label: "Privacy Policy" },
  ]

  const organizations = [
    {
      name: "GambleAware",
      logo: "/gamble.webp",
      url: "https://www.gambleaware.org",
    },
    { name: "GamCare", logo: "/gamecare.svg", url: "https://www.gamcare.org.uk" },
    {
      name: "GamblingTherapy",
      logo: "/gordon.png",
      url: "https://www.gamblingtherapy.org",
    },
    {
      name: "Gamblers Anonymous IE",
      logo: "/anonymos.avif",
      url: "https://www.gamblersanonymous.ie",
    },
    { name: "EGBA", logo: "/egba.png", url: "https://www.egba.eu" },
  ]

  return (
    <footer className="bg-black/80 backdrop-blur-sm text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-6">
              <div className="text-xl font-bold text-red-500 mb-3">IE Best Betting Sites</div>
              <p className="text-gray-300 text-sm mb-4 max-w-md">
                Ireland's most trusted source for betting site reviews and comparisons. We help Irish players find the
                best licensed betting platforms.
              </p>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-red-600 px-3 py-1 rounded-full">
                  <span className="text-lg">🇮🇪</span>
                  <span className="text-xs font-medium">Irish Licensed</span>
                </div>
                <div className="bg-gray-700 px-3 py-1 rounded-full">
                  <span className="text-xs font-medium">18+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-300 hover:text-red-500 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Responsible Gambling Organizations */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-center text-white">Responsible Gambling Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-items-center mb-6">
              {organizations.map((org, index) => (
                <div key={index} className="bg-white rounded-lg p-2 hover:scale-105 transition-transform">
                  <Link
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${org.name} website`}
                  >
                    <Image
                      src={org.logo || "/placeholder.svg"}
                      alt={`${org.name} logo`}
                      width={80}
                      height={40}
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-3">© 2024 IE Best Betting Sites. All rights reserved.</p>
            <p className="text-sm text-red-400 font-semibold">
              18+ | Irish players only | Gambling can be addictive — Play safe.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
