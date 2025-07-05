"use client"

import { Button } from "@/components/ui/button"
import { Star, Shield, Zap } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Jasa Joki Terpercaya #1</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Auto Naik Rank
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tanpa Ribet
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Jasa Joki Mobile Legends Aman, Cepat, dan Terpercaya
            <br />
            <span className="text-purple-400">Khusus untuk Pelajar & Mahasiswa</span>
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">100% Aman</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300">Proses Cepat</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">Harga Terjangkau</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-purple-500/25"
              onClick={() =>
                window.open(
                  "https://wa.me/6281234567890?text=Halo%20VictoryJoki,%20saya%20mau%20pesan%20jasa%20joki%20Mobile%20Legends",
                  "_blank",
                )
              }
            >
              Pesan Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 text-lg bg-transparent"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              Lihat Harga
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
