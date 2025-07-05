"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Apakah akun saya aman?",
      answer: "Ya, akun kamu 100% aman. Kami tidak pernah mengubah informasi login atau menggunakan VPN aneh-aneh.",
    },
    {
      question: "Berapa lama proses joki?",
      answer: "Tergantung jumlah bintang dan rank kamu. Tapi rata-rata 1–2 hari.",
    },
    {
      question: "Apakah saya bisa tetap login saat dijoki?",
      answer: "Sebaiknya tidak, karena bisa bentrok koneksi. Tapi kami kasih update rutin.",
    },
    {
      question: "Apakah bisa nego harga?",
      answer: "Untuk jumlah besar atau langganan, bisa nego. Chat aja dulu.",
    },
    {
      question: "Bagaimana cara pembayaran?",
      answer:
        "Pembayaran bisa via transfer bank, e-wallet (OVO, DANA, GoPay), atau pulsa. Pembayaran setelah deal harga.",
    },
    {
      question: "Apakah ada garansi?",
      answer: "Ada garansi rank tidak turun dalam 7 hari setelah joki selesai. Kalau turun, kami joki ulang gratis.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">FAQ</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Pertanyaan yang sering ditanyakan tentang jasa joki kami
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full bg-gray-900/50 border border-gray-700 hover:border-purple-500/40 rounded-lg p-6 text-left transition-all duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  )}
                </div>
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Masih ada pertanyaan lain?</p>
          <button
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            onClick={() =>
              window.open(
                "https://wa.me/6281234567890?text=Halo%20VictoryJoki,%20saya%20mau%20tanya%20tentang%20jasa%20joki",
                "_blank",
              )
            }
          >
            Chat WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}
