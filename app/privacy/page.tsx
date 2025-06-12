import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
              <p className="text-gray-300">Last updated: December 2024</p>
            </div>

            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                At IE Best Betting Sites, we take your privacy seriously. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our website.
              </p>
              <div className="space-y-3">
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-lg font-semibold text-white mb-1">Personal Data</h3>
                  <p className="text-gray-300 text-sm">
                    Information such as your name, email address, and telephone number that you voluntarily provide.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-white mb-1">Usage Data</h3>
                  <p className="text-gray-300 text-sm">
                    Information our servers automatically collect when you access the website, such as your IP address
                    and browser type.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-lg font-semibold text-white mb-1">Device Data</h3>
                  <p className="text-gray-300 text-sm">
                    Device information such as your mobile device ID, model, and manufacturer.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized
                experience. We may use information collected about you to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Create and manage your account</li>
                  <li>• Process transactions and payments</li>
                  <li>• Send you updates and newsletters</li>
                  <li>• Improve our website functionality</li>
                  <li>• Provide customer support</li>
                </ul>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Monitor website usage and trends</li>
                  <li>• Prevent fraudulent activities</li>
                  <li>• Comply with legal obligations</li>
                  <li>• Offer personalized content</li>
                  <li>• Respond to your inquiries</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We may share information we have collected about you in certain situations:
              </p>
              <div className="space-y-3">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">🔒 Legal Requirements</h3>
                  <p className="text-gray-300 text-sm">
                    We may disclose your information if required by law or to protect rights, property, and safety.
                  </p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">🤝 Service Providers</h3>
                  <p className="text-gray-300 text-sm">
                    We may share information with third parties that perform services for us, such as payment processing
                    and analytics.
                  </p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">📢 Marketing (with consent)</h3>
                  <p className="text-gray-300 text-sm">
                    With your consent, we may share information with third parties for marketing purposes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We use administrative, technical, and physical security measures to help protect your personal
                information. While we have taken reasonable steps to secure your information, please be aware that no
                security measures are perfect or impenetrable.
              </p>
            </div>

            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <span className="text-red-500 mr-2">✓</span>
                    <span className="text-sm">Access your personal data</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-red-500 mr-2">✓</span>
                    <span className="text-sm">Correct inaccurate data</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-red-500 mr-2">✓</span>
                    <span className="text-sm">Request data deletion</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <span className="text-red-500 mr-2">✓</span>
                    <span className="text-sm">Object to data processing</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-red-500 mr-2">✓</span>
                    <span className="text-sm">Data portability</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-red-500 mr-2">✓</span>
                    <span className="text-sm">Withdraw consent</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-600/90 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-2">⚠️ Age Restriction</h2>
              <p className="text-gray-100 text-sm leading-relaxed">
                We do not knowingly collect information from or market to children under the age of 18. This website is
                intended for users aged 18 and over only.
              </p>
            </div>

            <div className="bg-red-600/90 backdrop-blur-sm rounded-lg p-6 text-center">
              <h2 className="text-xl font-bold text-white mb-2">Contact Us</h2>
              <p className="text-gray-100 text-sm">
                If you have questions or comments about this Privacy Policy, please contact us through our website.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
