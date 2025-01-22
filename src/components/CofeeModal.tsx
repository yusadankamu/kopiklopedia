import { motion, AnimatePresence } from "framer-motion";
import { Coffee } from "../types";
import { X } from "lucide-react";

interface CoffeeModalProps {
  coffee: Coffee;
  isOpen: boolean;
  onClose: () => void;
}

export const CoffeeModal: React.FC<CoffeeModalProps> = ({
  coffee,
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-['Bungee_Shade'] text-2xl">{coffee.name}</h2>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <img
                src={coffee.image_url}
                alt={coffee.name}
                className="w-full h-64 object-cover rounded-lg"
              />

              <div>
                <h3 className="font-semibold text-lg mb-2">Origin</h3>
                <p className="text-gray-600">{coffee.origin}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Roast Level</h3>
                <p className="text-gray-600">{coffee.roast}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Description</h3>
                <p className="text-gray-600">{coffee.description}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Flavor Profile</h3>
                <div className="flex flex-wrap gap-2">
                  {coffee.flavor_profile.map((flavor, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                    >
                      {flavor}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Brewing Methods</h3>
                <div className="flex flex-wrap gap-2">
                  {coffee.brewing_methods.map((method, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
