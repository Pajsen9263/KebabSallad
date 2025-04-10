"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Home() {
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Function to create a single salad piece
    const createSaladPiece = () => {
      if (!bodyRef.current) return

      const salad = document.createElement("div")
      salad.classList.add("salad-piece")

      // Random size (smaller for mobile)
      const size = Math.random() * 40 + 15 // Between 15px and 55px
      salad.style.width = `${size}px`
      salad.style.height = `${size}px`

      // Random position
      const position = Math.random() * window.innerWidth
      salad.style.left = `${position}px`

      // Random rotation
      const rotation = Math.random() * 360
      salad.style.setProperty("--rotation", `${rotation}deg`)

      // Random fall duration
      const duration = Math.random() * 4 + 2 // Between 2s and 6s
      salad.style.animation = `fall ${duration}s linear infinite`

      // Append to body
      bodyRef.current.appendChild(salad)

      // Remove the salad piece after it finishes falling
      setTimeout(() => {
        if (bodyRef.current && bodyRef.current.contains(salad)) {
          bodyRef.current.removeChild(salad)
        }
      }, duration * 1000)
    }

    // Modify the saladRain function to be more mobile-friendly
    const saladRain = () => {
      // Adjust the number of salad pieces based on screen width and device performance
      const isMobile = window.innerWidth <= 768
      const maxSaladCount = isMobile ? 50 : 200 // Much fewer pieces on mobile
      let saladCount = 0

      const spawnSalad = () => {
        if (saladCount < maxSaladCount) {
          createSaladPiece()
          saladCount++
        }
        setTimeout(() => {
          saladCount-- // Allow for more to spawn as others are removed
        }, 6000) // Reset count after max duration

        // Slower spawn rate on mobile to prevent performance issues
        const spawnDelay = isMobile ? Math.random() * 200 + 150 : Math.random() * 100 + 50
        setTimeout(spawnSalad, spawnDelay)
      }

      spawnSalad()
    }

    // Start the salad rain
    saladRain()

    // Cleanup function
    return () => {
      // No specific cleanup needed as the timeouts will be cleared when component unmounts
    }
  }, [])

  return (
    <div ref={bodyRef} className="container">
      <div className="content">
        <div className="text">
          <h1>KebabSallad.se, The best website EVER!</h1>
          <h3>When the tech won&apos;t work: Think about kebab sallad!</h3>
        </div>
        <div className="image-container">
          <Image
            src="/kebabsallad.png"
            alt="Spinning Image"
            width={500}
            height={500}
            priority
            className="spinning-image"
          />
        </div>
      </div>
    </div>
  )
}
