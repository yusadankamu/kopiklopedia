import { Coffee, Mail, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Coffee className="w-8 h-8" />
              <span className="font-bungee text-2xl">Kopiklopedia</span>
            </div>
            <p className="text-amber-200 mb-6 max-w-md">
              Your ultimate guide to the world of coffee. Discover unique beans,
              brewing methods, and coffee cultures from around the globe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Coffee Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/origins"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Origins
                </Link>
              </li>
              <li>
                <Link
                  to="/consumption"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Global Consumption
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <a
                href="mailto:info@kopiklopedia.com"
                className="flex items-center space-x-2 text-amber-200 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Us</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-amber-200 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-amber-200 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-200 text-sm">
              © {new Date().getFullYear()} Kopiklopedia. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-amber-200 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-amber-200 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
