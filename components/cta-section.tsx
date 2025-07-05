"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Langsung Chat WhatsApp untuk Order!</h2>
          <p className="text-xl text-blue-100 mb-8">
            Konsultasi gratis dan dapatkan penawaran terbaik untuk joki Mobile Legends kamu
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl"
            onClick={() =>
              window.open(
                "https://wa.me/621224086200?text=Halo%20VictoryJoki,%20saya%20mau%20order%20jasa%20joki%20Mobile%20Legends",
                "_blank",
              )
            }
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Chat WhatsApp Sekarang
          </Button>
        </div>
      </div>
    </section>
  )
}
