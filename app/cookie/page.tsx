import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
              <p className="text-gray-300">Last updated: December 2024</p>
            </div>

            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">What are cookies?</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website.
                Cookies are widely used by website owners in order to make their websites work, or to work more
                efficiently, as well as to provide reporting information.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Cookies set by the website owner (in this case, IE Best Betting Sites) are called "first-party cookies".
                Cookies set by parties other than the website owner are called "third-party cookies". Third-party
                cookies enable third-party features or functionality to be provided on or through the website.
              </p>
            </div>

            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Why do we use cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical
                reasons in order for our website to operate, and we refer to these as "essential" or "strictly
                necessary" cookies. Other cookies also enable us to track and target the interests of our users to
                enhance the experience on our website.
              </p>
            </div>

            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Types of cookies we use</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Essential cookies</h3>
                  <p className="text-gray-300 text-sm">
                    These cookies are strictly necessary to provide you with services available through our website and
                    to use some of its features, such as access to secure areas.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Performance cookies</h3>
                  <p className="text-gray-300 text-sm">
                    These cookies are used to enhance the performance and functionality of our website but are
                    non-essential to their use.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Analytics cookies</h3>
                  <p className="text-gray-300 text-sm">
                    These cookies collect information that is used either in aggregate form to help us understand how
                    our website is being used.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Advertising cookies</h3>
                  <p className="text-gray-300 text-sm">
                    These cookies are used to make advertising messages more relevant to you and your interests.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">How can you control cookies?</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie
                preferences by clicking on the appropriate opt-out links provided in the cookie banner on our website.
              </p>
              <p className="text-gray-300 leading-relaxed">
                You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject
                cookies, you may still use our website though your access to some functionality and areas of our website
                may be restricted.
              </p>
            </div>

            <div className="bg-red-600/90 backdrop-blur-sm rounded-lg p-6 text-center">
              <h2 className="text-xl font-bold text-white mb-2">Questions about our Cookie Policy?</h2>
              <p className="text-gray-100 text-sm">
                If you have any questions about our use of cookies or other technologies, please contact us through our
                website.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
