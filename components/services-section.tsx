"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Target } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Trophy,
      title: "Rank Boost",
      description: "Naikkan rank kamu dari Grand Master sampai Immortal dengan aman dan cepat",
      features: ["Proses 1-2 hari", "Akun 100% aman", "Update progress rutin", "Garansi rank tidak turun"],
    },
    {
      icon: Target,
      title: "Win Streak",
      description: "Dapatkan win streak panjang untuk boost MMR dan performa akun kamu",
      features: ["Win rate tinggi", "Boost MMR maksimal", "Statistik bagus", "Harga per match"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Layanan Kami
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Pilih layanan joki yang sesuai dengan kebutuhan kamu
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                <CardDescription className="text-gray-300 text-lg">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  onClick={() =>
                    window.open(
                      `https://wa.me/6281234567890?text=Halo%20VictoryJoki,%20saya%20mau%20pesan%20layanan%20${service.title}`,
                      "_blank",
                    )
                  }
                >
                  Pesan {service.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
