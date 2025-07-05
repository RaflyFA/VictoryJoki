"use client"

import { MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer id="kontak" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-bold text-white">VictoryJoki</span>
            </div>
            <p className="text-gray-300 mb-4">
              Jasa joki Mobile Legends terpercaya untuk pelajar dan mahasiswa. Aman, cepat, dan harga terjangkau.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">WhatsApp: +62 812-2408-6200</li>
              <li className="text-gray-300">Jam Operasional: 24/7</li>
              <li className="text-gray-300">Response: {"<"} 5 menit</li>
            </ul>
          </div>

          {/* WhatsApp */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Hubungi Kami</h3>
            <button
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 font-semibold shadow-lg rounded-lg"
              onClick={() => window.open("https://wa.me/621224086200", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat WhatsApp</span>
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 VictoryJoki. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
