import React from 'react'

function Header() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Sri Lanka Travel Tours</h1>
        <nav className="space-x-2 sm:space-x-4">
          <a href="#places" className="hover:text-gray-200">Places</a>
          <a href="#itineraries" className="hover:text-gray-200">Itineraries</a>
          <a href="#transportation" className="hover:text-gray-200">Transportation</a>
          <a href="#accommodations" className="hover:text-gray-200">Accommodations</a>
          <a href="#activities" className="hover:text-gray-200">Activities</a>
        </nav>
      </header>
    </div>

  )
}

export default Header