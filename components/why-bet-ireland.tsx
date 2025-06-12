"use client"

import Image from "next/image"
import { CheckCircle, Shield, Zap, Users } from "lucide-react"

export function WhyBetIreland() {
  const advantages = [
    {
      icon: Shield,
      title: "Licensed & Regulated",
      description:
        "All recommended betting sites are licensed by the Irish Revenue Commissioners, ensuring complete safety and legal compliance.",
    },
    {
      icon: Zap,
      title: "Fast Withdrawals",
      description:
        "Irish betting sites offer reliable withdrawal processing, with most payments completed within 24-48 hours.",
    },
    {
      icon: Users,
      title: "Local Support",
      description:
        "Access customer support teams who understand Irish banking systems, sports preferences, and local regulations.",
    },
    {
      icon: CheckCircle,
      title: "Irish Sports Coverage",
      description:
        "Comprehensive betting markets for GAA, Irish horse racing, and all sports popular with Irish punters.",
    },
  ]

  return (
    <section className="py-12 section-transparent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <Image
                src="/placeholder.svg?height=40&width=60&text=Irish+Flag"
                alt="Irish Flag"
                width={60}
                height={40}
                className="mr-3"
              />
              <h2 className="text-2xl md:text-3xl font-bold text-white">Why Choose Irish Betting Sites?</h2>
            </div>
            <p className="text-gray-300">
              Discover the advantages of betting with platforms specifically designed for Irish players.
            </p>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center hover:border-red-500 transition-colors"
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <advantage.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2">{advantage.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center bg-gray-800/90 backdrop-blur-sm rounded-md px-6 py-3 border border-gray-700">
            <CheckCircle className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-gray-300 font-medium">Trusted by 500,000+ Irish players</span>
          </div>
        </div>
      </div>
    </section>
  )
}
