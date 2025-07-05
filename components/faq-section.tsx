"use client"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Apakah akun saya aman?",
      answer: "Ya, kami tidak menyalahgunakan data atau akun Anda. Proses joki dilakukan secara profesional.",
    },
    {
      question: "Berapa lama proses joki?",
      answer: "Tergantung jumlah bintang, rata-rata 1–3 hari tergantung antrean.",
    },
    {
      question: "Apakah saya bisa tetap main saat proses joki?",
      answer: "Disarankan tidak, untuk menghindari bentrok saat proses joki berjalan.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">FAQ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pertanyaan yang sering ditanyakan tentang jasa joki kami
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full bg-white border-2 border-gray-200 hover:border-blue-300 rounded-lg p-6 text-left transition-all duration-300 shadow-sm hover:shadow-md"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  )}
                </div>
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Masih ada pertanyaan lain?</p>
          <Button
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 font-semibold shadow-lg"
            onClick={() =>
              window.open(
                "https://wa.me/621224086200?text=Halo%20VictoryJoki,%20saya%20mau%20tanya%20tentang%20jasa%20joki",
                "_blank",
              )
            }
          >
            Chat WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
