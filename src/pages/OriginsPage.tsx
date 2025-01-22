import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";
import { originData } from "../data/mockData";
import type { CoffeeOrigin } from "../types";

export const OriginsPage = () => {
  const [selectedOrigin, setSelectedOrigin] = useState<CoffeeOrigin | null>(
    null
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Globe className="w-8 h-8 text-amber-600 mr-3" />
          <h1 className="font-bungee text-4xl text-gray-900">Coffee Origins</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the world's most renowned coffee-growing regions and their
          unique characteristics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {originData.map((origin, index) => (
          <motion.div
            key={origin.country}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => setSelectedOrigin(origin)}
          >
            <div className="relative h-64">
              <img
                src={origin.image_url}
                alt={origin.country}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-amber-400 mr-2" />
                  <h2 className="text-2xl font-bold text-white">
                    {origin.country}
                  </h2>
                </div>
                <p className="text-amber-200">{origin.region}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Origin Modal */}
      {selectedOrigin && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedOrigin(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold mb-4">
              {selectedOrigin.country}
            </h2>
            <p className="text-gray-600 mb-6">{selectedOrigin.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold mb-2">Famous Beans</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {selectedOrigin.famous_beans.map((bean) => (
                    <li key={bean}>{bean}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Climate</h3>
                <p className="text-gray-600">{selectedOrigin.climate}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
