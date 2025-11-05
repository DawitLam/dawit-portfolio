"use client"

import { useState, useEffect } from 'react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Back to Top
          </span>
        </button>
      )}
    </>
  )
}

export default BackToTop
