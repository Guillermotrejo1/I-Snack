import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact" className="bg-linear-to-r from-blue-700 via-teal-600 to-green-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          <div>
            <h3 className="text-3xl font-bold font-poppins mb-3">I-Snack</h3>
            <p className="text-sm text-blue-100 max-w-xs">
              Fresh, fast, and flavorful bites crafted for busy days and easy nights. Experience authentic flavors in every bite.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold font-poppins mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#home"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#menu"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold font-poppins mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li>📧 hello@isnack.com</li>
              <li>📞 (830) 406-2372</li>
              <li>🕐 Mon: Closed</li>
              <li>🕐 Tue-Sun: 2:30pm - 8:30pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row text-sm text-blue-100">
          <span>© 2026 I-Snack. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;