import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-8">
          Privacy Policy
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-3">
              Information We Collect
            </h2>
            <p>
              I-Snack collects minimal personal information. This may include your name, email, and phone number if you contact us directly or make an order.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-3">
              How We Use Your Information
            </h2>
            <p>
              We use your information solely to respond to inquiries, process orders, and improve our service. We do not sell or share your data with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-3">
              Cookies
            </h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can disable cookies in your browser settings if desired.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-3">
              Contact Us
            </h2>
            <p>
              If you have questions about this privacy policy, contact us at hello@isnack.com or (830) 406-2372.
            </p>
          </section>

          <p className="text-sm text-gray-600 pt-6 border-t border-gray-200">
            Last updated: February 2026
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
