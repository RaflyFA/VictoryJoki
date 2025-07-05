"use client"

import { MessageCircle, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-purple-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                VictoryJoki
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Jasa joki Mobile Legends terpercaya untuk pelajar dan mahasiswa. Aman, cepat, dan harga terjangkau.
            </p>
            <div className="flex space-x-4">
              <button
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Rank Boost
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Win Streak
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Placement Match
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Duo Queue
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">WhatsApp: +62 812-3456-7890</li>
              <li className="text-gray-400">Email: info@victoryjoki.com</li>
              <li className="text-gray-400">Jam Operasional: 24/7</li>
              <li className="text-gray-400">Response: {"<"} 5 menit</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 VictoryJoki. All rights reserved. |
            <span className="text-purple-400"> Jasa Joki Mobile Legends Terpercaya</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
