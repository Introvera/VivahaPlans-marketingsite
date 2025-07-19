import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiGoogleplay, SiAppstore } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#FFF9EF] text-black px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Venue */}
        <div>
          <h3 className="mb-5 font-bold text-lg">Venue</h3>
          <ul className="space-y-2 text-sm">
            <li>Matara</li>
            <li>Galle</li>
            <li>Colombo</li>
            <li>Kaluthara</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-5 font-bold text-lg">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Wedding Halls</li>
            <li>Photographers</li>
            <li>Decorations</li>
            <li>Makeup Artists</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-5 font-bold text-lg">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Help</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* App Downloads & Newsletter */}
        <div className="space-y-5">
          <h3 className="font-bold text-lg">Get the Vivaha Plans App</h3>

          {/* App store buttons */}
          <div className="flex gap-3 flex-wrap">
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:opacity-90"
            >
              <SiGoogleplay className="text-xl" />
              <span className="text-sm">Google Play</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:opacity-90"
            >
              <SiAppstore className="text-xl" />
              <span className="text-sm">App Store</span>
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Subscribe to our newsletter
            </label>
            <div className="flex">
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md border border-gray-300 focus:outline-none flex-1"
              />
              <button className="bg-[#005B4C] text-white px-4 py-2 rounded-r-md hover:bg-[#004c3f]">
                Submit
              </button>
            </div>
          </div>

          {/* Social media */}
          <div className="flex gap-4 pt-4 text-xl text-[#005B4C]">
            <a href="#" className="hover:text-black"><FaFacebookF /></a>
            <a href="#" className="hover:text-black"><FaTwitter /></a>
            <a href="#" className="hover:text-black"><FaInstagram /></a>
            <a href="#" className="hover:text-black"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
