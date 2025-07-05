"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function PricingSection() {
  const pricingTiers = [
    { rank: "Grand Master", price: "4.000", color: "from-blue-500 to-cyan-500" },
    { rank: "Epic", price: "5.000", color: "from-purple-500 to-blue-500" },
    { rank: "Legend", price: "7.000", color: "from-pink-500 to-purple-500" },
    { rank: "Mythic", price: "8.000", color: "from-red-500 to-pink-500" },
    { rank: "Honor", price: "10.000", color: "from-yellow-500 to-red-500" },
    { rank: "Glory", price: "15.000", color: "from-green-500 to-yellow-500" },
    { rank: "Immortal", price: "20.000", color: "from-purple-600 to-pink-600", popular: true },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Daftar Harga
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Harga terjangkau untuk semua rank, khusus pelajar dan mahasiswa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative bg-gray-800/50 border-gray-700 hover:border-purple-500/40 transition-all duration-300 group ${
                tier.popular ? "ring-2 ring-purple-500/50 scale-105" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Paling Populer
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">{tier.rank}</CardTitle>
                <CardDescription className="text-gray-400">Per bintang</CardDescription>
              </CardHeader>

              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">Rp. {tier.price}</span>
                  <span className="text-gray-400">/⭐</span>
                </div>

                <div className="space-y-2 mb-6 text-sm text-gray-300">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>Proses 1-2 hari</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>100% aman</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>Update rutin</span>
                  </div>
                </div>

                <Button
                  className={`w-full bg-gradient-to-r ${tier.color} hover:opacity-90 transition-opacity`}
                  onClick={() =>
                    window.open(
                      `https://wa.me/6281234567890?text=Halo%20VictoryJoki,%20saya%20mau%20pesan%20joki%20rank%20${tier.rank}`,
                      "_blank",
                    )
                  }
                >
                  Pesan Sekarang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Butuh joki dalam jumlah besar atau berlangganan?</p>
          <Button
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-transparent"
            onClick={() =>
              window.open(
                "https://wa.me/6281234567890?text=Halo%20VictoryJoki,%20saya%20mau%20nego%20harga%20untuk%20joki%20dalam%20jumlah%20besar",
                "_blank",
              )
            }
          >
            Chat untuk Nego Harga
          </Button>
        </div>
      </div>
    </section>
  )
}
