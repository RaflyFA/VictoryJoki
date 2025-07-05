"use client"

import { Button } from "@/components/ui/button"
import { Shield, Zap, Trophy } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-6 py-2 mb-8">
            <Trophy className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-700 font-medium">Jasa Joki Terpercaya #1</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Auto Mythic
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Dalam Hitungan Hari!
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Jasa joki Mobile Legends aman, cepat, dan terpercaya
            <br />
            <span className="text-blue-600 font-semibold">Khusus untuk Pelajar & Mahasiswa</span>
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">100% Aman</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700 font-medium">Proses Cepat</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Trophy className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700 font-medium">Harga Terjangkau</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-xl"
              onClick={() =>
                window.open(
                  "https://wa.me/621224086200?text=Halo%20VictoryJoki,%20saya%20mau%20pesan%20jasa%20joki%20Mobile%20Legends",
                  "_blank",
                )
              }
            >
              Pesan Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg bg-white/80 backdrop-blur-sm"
              onClick={() => document.getElementById("harga")?.scrollIntoView({ behavior: "smooth" })}
            >
              Lihat Harga
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
