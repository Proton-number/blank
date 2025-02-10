import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BLANK</h3>
            <p className="text-gray-400">Redefining minimalist fashion</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:cursor-pointer">Men's Collection</li>
              <li className="hover:cursor-pointer">Women's Collection</li>
              <li className="hover:cursor-pointer">Accessories</li>
              <li className="hover:cursor-pointer">New Arrivals</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:cursor-pointer">About Us</li>
              <li className="hover:cursor-pointer">Sustainability</li>
              <li className="hover:cursor-pointer">Careers</li>
              <li className="hover:cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:cursor-pointer">Instagram</li>
              <li className="hover:cursor-pointer">Twitter</li>
              <li className="hover:cursor-pointer">Facebook</li>
              <li className="hover:cursor-pointer">Pinterest</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 BLANK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
