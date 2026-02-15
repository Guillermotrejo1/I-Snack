import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-8">
          Terms of Service
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-3">
              Acceptance of Terms
            </h2>
            <p>
              By visiting and using the I-Snack website, you agree to comply with and be bound by these terms and conditions. If you do not agree, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-3">
              Product Information
            </h2>
            <p>
              All product descriptions, pricing, and availability are subject to change without notice. We strive for accuracy but do not guarantee that all information on our website is current or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-3">
              Allergen Information
            </h2>
            <p>
              Please note that our products may contain or come into contact with allergens. We recommend contacting us directly for detailed allergen information before ordering.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-3">
              Limitation of Liability
            </h2>
            <p>
              I-Snack is provided on an &quot;as-is&quot; basis. We are not liable for any indirect, incidental, or consequential damages arising from your use of our website or products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-3">
              Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the website following changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-3">
              Contact Us
            </h2>
            <p>
              For questions regarding these terms, please contact us at hello@isnack.com or (830) 406-2372.
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
