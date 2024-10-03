'use client'

import Link from "next/link"
import { Frame, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Frame className="h-10 w-10" />
            <p className="text-gray-400 text-base">
              SafePlate Technologies<br />
              Innovative solutions for food safety and quality control
            </p>
            <div className="flex space-x-6">
              <Link href="https://www.linkedin.com/company/safeplate-technologies" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Features</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-gray-400 hover:text-gray-300">
                      Advanced Safety Protocols
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-400 hover:text-gray-300">
                      Real-time Monitoring
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-400 hover:text-gray-300">
                      Comprehensive Reporting
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="mailto:admin@safeplatetech.com" className="text-base text-gray-400 hover:text-gray-300">
                      admin@safeplatetech.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 SafePlate Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}