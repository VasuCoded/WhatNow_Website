import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-100 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-xl font-extrabold tracking-tight text-neutral-900 mb-4 block transition-opacity hover:opacity-80">
              WhatNow
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              You have options. We help you find the right one through unbiased, structured guidance.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold text-neutral-900 mb-4 text-sm tracking-wide uppercase">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/careers" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Careers</Link></li>
              <li><Link href="/exams" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Exams</Link></li>
              <li><Link href="/reads" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Editorial Reads</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 mb-4 text-sm tracking-wide uppercase">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 mb-4 text-sm tracking-wide uppercase">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-400">
            &copy; {currentYear} WhatNow. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="https://youtube.com" className="text-neutral-400 hover:text-neutral-900 transition-colors" aria-label="YouTube">
              <Icon icon="ri:youtube-line" className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com" className="text-neutral-400 hover:text-neutral-900 transition-colors" aria-label="Instagram">
              <Icon icon="ri:instagram-line" className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" className="text-neutral-400 hover:text-neutral-900 transition-colors" aria-label="X (Twitter)">
              <Icon icon="ri:twitter-x-line" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
