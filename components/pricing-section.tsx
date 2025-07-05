"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function PricingSection() {
  const pricingTiers = [
    { rank: "Grand Master", price: "4.000", gradient: "from-blue-400 to-blue-500" },
    { rank: "Epic", price: "5.000", gradient: "from-blue-500 to-blue-600" },
    { rank: "Legend", price: "7.000", gradient: "from-blue-600 to-blue-700" },
    { rank: "Mythic", price: "8.000", gradient: "from-blue-700 to-blue-800", popular: true },
    { rank: "Honor", price: "10.000", gradient: "from-blue-500 to-cyan-500" },
    { rank: "Glory", price: "15.000", gradient: "from-blue-600 to-cyan-600" },
    { rank: "Immortal", price: "20.000", gradient: "from-blue-800 to-cyan-700" },
  ]

  return (
    <section id="harga" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Harga Joki</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Harga terjangkau untuk semua rank, khusus pelajar dan mahasiswa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative bg-white border-2 hover:border-blue-300 transition-all duration-300 group hover:shadow-xl ${
                tier.popular ? "ring-2 ring-blue-400 scale-105 border-blue-400" : "border-gray-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Paling Populer
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${tier.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">{tier.rank}</CardTitle>
                <CardDescription className="text-gray-500">Per bintang</CardDescription>
              </CardHeader>

              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-800">Rp. {tier.price}</span>
                  <span className="text-gray-500">/⭐</span>
                </div>

                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>Proses 1-3 hari</span>
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
                  className={`w-full bg-gradient-to-r ${tier.gradient} hover:opacity-90 transition-opacity shadow-lg text-white`}
                  onClick={() =>
                    window.open(
                      `https://wa.me/621224086200?text=Halo%20VictoryJoki,%20saya%20mau%20pesan%20joki%20rank%20${tier.rank}`,
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
      </div>
    </section>
  )
}
