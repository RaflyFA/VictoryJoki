"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              VictoryJoki
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Harga
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              FAQ
            </button>
            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              onClick={() =>
                window.open(
                  "https://wa.me/6281234567890?text=Halo%20VictoryJoki,%20saya%20mau%20konsultasi%20jasa%20joki",
                  "_blank",
                )
              }
            >
              Chat WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-purple-500/20">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-purple-400 transition-colors text-left"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-300 hover:text-purple-400 transition-colors text-left"
              >
                Harga
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-300 hover:text-purple-400 transition-colors text-left"
              >
                FAQ
              </button>
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-full"
                onClick={() =>
                  window.open(
                    "https://wa.me/6281234567890?text=Halo%20VictoryJoki,%20saya%20mau%20konsultasi%20jasa%20joki",
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
