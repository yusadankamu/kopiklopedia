import { Link, Outlet } from "react-router-dom";
import { Coffee as CoffeeIcon, Globe, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-amber-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <CoffeeIcon className="w-8 h-8" />
              <span className="font-bungee text-2xl">Kopiklopedia</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className="flex items-center space-x-2 hover:text-amber-200 transition-colors"
              >
                <CoffeeIcon className="w-5 h-5" />
                <span>Coffees</span>
              </Link>
              <Link
                to="/origins"
                className="flex items-center space-x-2 hover:text-amber-200 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>Origins</span>
              </Link>
              <Link
                to="/consumption"
                className="flex items-center space-x-2 hover:text-amber-200 transition-colors"
              >
                <BarChart3 className="w-5 h-5" />
                <span>Consumption</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-grow"
      >
        <Outlet />
      </motion.div>

      <Footer />
    </div>
  );
};
