import React from "react";

import {
  RiInstagramLine,
  RiFacebookFill,
  RiYoutubeFill,
  RiTwitterXFill,
  RiArrowRightFill,
  RiMapLine,
  RiPhoneFill,
  RiMailFill,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="mt-20 bg-[#102d16] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-[2px] text-green-300">
                Stay in style
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Get 10% off your first order
              </h2>

              <p className="mt-2 max-w-lg text-sm text-white/60">
                Subscribe to get exclusive offers, new arrivals and fashion
                updates directly in your inbox.
              </p>
            </div>

            <div className="flex w-full max-w-md rounded-xl bg-white p-1">
              <input
                type="email"
                placeholder="Enter your email address"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm
                text-black outline-none placeholder:text-gray-400"
              />

              <button
                className="flex items-center gap-2 rounded-lg bg-[#174d22]
                px-5 py-3 text-sm font-medium text-white transition
                hover:bg-[#21632d]"
              >
                Subscribe
                <RiArrowRightFill size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight">
              We<span className="text-green-400">-mart</span>
              <span className="ml-1">🛒</span>
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
              Style. Comfort. You.
              <br />
              Discover premium fashion and everyday essentials designed for your
              lifestyle.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <RiMapLine size={17} className="text-green-400" />
                <span>USA, New Yourk</span>
              </div>

              <div className="flex items-center gap-3">
                <RiPhoneFill size={17} className="text-green-400" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <RiMailFill size={17} className="text-green-400" />
                <span>support@wemart.com</span>
              </div>
            </div>

            {/* Social */}
            <div className="mt-7 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center
                rounded-full border border-white/15 text-white/70
                transition hover:border-green-400 hover:bg-green-400
                hover:text-black"
              >
                <RiInstagramLine size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center
                rounded-full border border-white/15 text-white/70
                transition hover:border-green-400 hover:bg-green-400
                hover:text-black"
              >
                <RiFacebookFill size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center
                rounded-full border border-white/15 text-white/70
                transition hover:border-green-400 hover:bg-green-400
                hover:text-black"
              >
                <RiYoutubeFill size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center
                rounded-full border border-white/15 text-white/70
                transition hover:border-green-400 hover:bg-green-400
                hover:text-black"
              >
                <RiTwitterXFill size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Shop
            </h3>

            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="/category/men"
                  className="transition hover:text-green-400"
                >
                  Men
                </a>
              </li>

              <li>
                <a
                  href="/category/women"
                  className="transition hover:text-green-400"
                >
                  Women
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-400">
                  New Arrivals
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-400">
                  Trending
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-400">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Help
            </h3>

            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="#" className="transition hover:text-green-400">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-400">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-400">
                  Shipping
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-400">
                  Returns
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-400">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="#" className="transition hover:text-green-400">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-400">
                  Our Story
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-400">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-400">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-400">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-12 flex flex-col gap-4 border-t border-white/10
        pt-7 text-xs text-white/45 sm:flex-row sm:items-center
        sm:justify-between"
        >
          <p>© 2026 We-mart. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Privacy
            </a>

            <a href="#" className="hover:text-white">
              Terms
            </a>

            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
