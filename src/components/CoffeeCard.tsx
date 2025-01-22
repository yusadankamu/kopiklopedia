import { motion } from "framer-motion";
import { Coffee } from "../types";
import { Coffee as CoffeeIcon } from "lucide-react";

interface CoffeeCardProps {
  coffee: Coffee;
  onClick: () => void;
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl"
      onClick={onClick}
    >
      <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96">
        {coffee.image_url ? (
          <img
            src={coffee.image_url}
            alt={coffee.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <CoffeeIcon className="w-12 h-12 text-gray-400" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-semibold text-white mb-1">
            {coffee.name}
          </h3>
          <p className="text-amber-200 text-sm">{coffee.origin}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
            {coffee.roast} Roast
          </span>
          <span className="text-gray-600 text-sm">
            {coffee.brewing_methods.length} brewing methods
          </span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2">
          {coffee.description}
        </p>
      </div>
    </motion.div>
  );
};
