
import React from "react";
import lanka from '../src/assets/srilanka.webp'

const App = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-green-600">Sri Lanka Tours</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:text-blue-600">Home</a></li>
              <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#tours" className="hover:text-blue-600">Tours</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="h-screen bg-c bg-center" style={{ backgroundImage: `url(${lanka})` }}>
        <div className="h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          <h2 className="text-4xl font-bold">Discover the Beauty and Warmth of Sri Lanka</h2>
          <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Explore Now</button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src="https://via.placeholder.com/600x400" alt="Sri Lankan hospitality" className="rounded shadow" />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="mb-4">We are dedicated to showcasing the culture, heritage, and beauty of Sri Lanka. Our mission is to provide authentic travel experiences with warm hospitality.</p>
            <ul className="list-disc ml-6">
              <li>Expert local guides</li>
              <li>Customized tours</li>
              <li>Eco-friendly travel options</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded shadow hover:shadow-lg">
              <img src="https://via.placeholder.com/400x250" alt="Nature and Wildlife" className="w-full rounded-t" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Nature and Wildlife</h3>
                <p>Explore the lush landscapes and diverse wildlife of Sri Lanka.</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Details</button>
              </div>
            </div>
            <div className="border rounded shadow hover:shadow-lg">
              <img src="https://via.placeholder.com/400x250" alt="Cultural Heritage" className="w-full rounded-t" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Cultural Heritage</h3>
                <p>Discover ancient temples and historic landmarks.</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Details</button>
              </div>
            </div>
            <div className="border rounded shadow hover:shadow-lg">
              <img src="https://via.placeholder.com/400x250" alt="Beach Escapes" className="w-full rounded-t" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Beach Escapes</h3>
                <p>Relax on pristine beaches and enjoy the coastal breeze.</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="max-w-lg mx-auto bg-white shadow-md rounded p-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
              <input type="text" id="name" className="w-full border rounded px-3 py-2" placeholder="Your name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" className="w-full border rounded px-3 py-2" placeholder="Your email" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-bold mb-2">Message</label>
              <textarea id="message" className="w-full border rounded px-3 py-2" placeholder="Your message" rows="4"></textarea>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Sri Lanka Tours. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;