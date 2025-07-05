"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-blue-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              VictoryJoki
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("harga")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Harga
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("kontak")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Kontak
            </button>
            <Button
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg"
              onClick={() =>
                window.open(
                  "https://wa.me/621224086200?text=Halo%20VictoryJoki,%20saya%20mau%20konsultasi%20jasa%20joki",
                  "_blank",
                )
              }
            >
              Chat WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-blue-100">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("harga")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium"
              >
                Harga
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("kontak")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium"
              >
                Kontak
              </button>
              <Button
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 w-full shadow-lg"
                onClick={() =>
                  window.open(
                    "https://wa.me/621224086200?text=Halo%20VictoryJoki,%20saya%20mau%20konsultasi%20jasa%20joki",
                    "_blank",
                  )
                }
              >
                Chat WhatsApp
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
