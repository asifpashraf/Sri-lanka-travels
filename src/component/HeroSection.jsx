import React from 'react'

function HeroSection() {
  return (
    <div>
        <section
        className="bg-cover bg-center h-64 sm:h-screen flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heritage})` }}
      >
        <div className="text-center px-4">
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">Discover the Wonders of Sri Lanka</h2>
          <p className="text-sm sm:text-lg mb-4 sm:mb-6">Customized tours for unforgettable experiences.</p>
          <div className="space-y-2 sm:space-y-0 sm:space-x-4">
            <button className="bg-orange-500 px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-orange-600">Explore Packages</button>
            <button className="bg-white text-blue-600 px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-gray-200">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection