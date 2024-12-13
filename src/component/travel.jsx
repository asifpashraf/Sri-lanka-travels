import React from 'react';
import heritage from '../assets/heritage.png';
// import placesImage from '../assets/places.png';

const TravelTourismWebsite = () => {
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

      {/* Hero Section */}
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

      {/* Places Section */}
      <section id="places" className="py-8 sm:py-16 bg-gray-100">
        <div className="text-center mb-6 sm:mb-8">
          <img src={heritage} alt="Top Places" className="mx-auto w-3/4 sm:w-1/2 lg:w-1/3 mb-4" />
          <h3 className="text-xl sm:text-3xl font-bold">Top Destinations in Sri Lanka</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6">
          {[
            "Nuwara Eliya",
            "Colombo",
            "Kandy",
            "Ella",
            "Negombo",
            "Galle",
            "Mirissa",
            "Hikkaduwa",
            "Trincomalee",
            "Anuradhapura",
            "Bentota",
          ].map((place) => (
            <div
              key={place}
              className="relative h-32 sm:h-48 bg-cover bg-center rounded shadow-md text-blue-600"
              style={{ backgroundImage: `url(/images/${place.toLowerCase().replace(/ /g, '-')}.jpg)` }}
            >
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-1 sm:p-2 rounded-b">
                {place}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Itinerary Section */}
      <section id="itineraries" className="py-8 sm:py-16">
        <h3 className="text-center text-xl sm:text-3xl font-bold mb-6 sm:mb-8">Customizable Itineraries</h3>
        <div className="max-w-4xl mx-auto space-y-4 px-4 sm:px-6">
          {[
            { day: 1, activity: "Arrival in Colombo & City Tour" },
            { day: 2, activity: "Travel to Nuwara Eliya (Tea Factory, Gregory Lake)" },
            { day: 3, activity: "Ella (Nine Arches Bridge, Little Adam's Peak)" },
          ].map(({ day, activity }) => (
            <div key={day} className="p-4 bg-gray-100 rounded shadow">
              <h4 className="font-bold">Day {day}</h4>
              <p>{activity}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transportation Section */}
      <section id="transportation" className="py-8 sm:py-16 bg-gray-100">
        <h3 className="text-center text-xl sm:text-3xl font-bold mb-6 sm:mb-8">Travel in Comfort</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 px-4 sm:px-6">
          {["Bike Rental", "Hatchback", "Sedan", "9-Seater Van", "14-Seater Van", "29-Seater Bus"].map((option) => (
            <div key={option} className="p-4 bg-white rounded shadow text-center">
              <h4 className="font-bold mb-2">{option}</h4>
              <button className="bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-blue-600">Book Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="accommodations" className="py-8 sm:py-16">
        <h3 className="text-center text-xl sm:text-3xl font-bold mb-6 sm:mb-8">Stay Your Way</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6">
          {["2-Star Hotel", "3-Star Hotel", "4-Star Hotel", "5-Star Hotel", "Hostel", "Villas", "Cottages", "Shared Villas"].map((accommodation) => (
            <div key={accommodation} className="p-4 bg-gray-100 rounded shadow text-center">
              <h4 className="font-bold mb-2">{accommodation}</h4>
              <button className="bg-green-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-green-600">View Options</button>
            </div>
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-8 sm:py-16 bg-gray-100">
        <h3 className="text-center text-xl sm:text-3xl font-bold mb-6 sm:mb-8">Adventure Awaits!</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6">
          {["Scuba Diving", "Fun Diving", "Snorkeling", "Boat Ride", "Sunset Cruise", "Jet Ski", "Banana Boat Ride", "Whale Watching", "Trekking", "Rock Climbing"].map((activity) => (
            <div key={activity} className="p-4 bg-white rounded shadow text-center">
              <h4 className="font-bold mb-2">{activity}</h4>
              <button className="bg-orange-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-orange-600">Add to Package</button>
            </div>
          ))}
        </div>
      </section>

      
      {/* Footer */}
        <footer className="bg-blue-600 text-white p-4 text-center">
        <p className="mb-2">&copy; 2024 Sri Lanka Travel Tours. All rights reserved.</p>
        <p>Email: <a href="mailto:info@srilankatravels.com" className="underline hover:text-gray-200">info@srilankatravels.com</a></p>
        <p>Instagram: <a href="https://instagram.com/srilankatravels" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-200">@srilankatravels</a></p>
        <p>Phone: +94 123 456 789</p>
        <p>good</p>
        </footer>

    </div>
  );
};

export default TravelTourismWebsite;
