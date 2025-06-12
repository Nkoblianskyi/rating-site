"use client"

import { CheckCircle } from "lucide-react"
import { testingSteps } from "@/lib/data"

export function TestingProcess() {
  return (
    <section className="py-12 section-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Our Testing Process</h2>
            <p className="text-gray-300">
              How we evaluate and rank each betting site to ensure quality and reliability
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>

            {testingSteps.map((step, index) => (
              <div key={index} className="relative flex items-start mb-8 last:mb-0">
                {/* Step Number */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full font-bold text-lg mr-6">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-red-500 transition-colors">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 text-red-500 mr-2" />
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
