import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { Coffee } from "../types";
import { CoffeeCard } from "../components/CoffeeCard";
import { CoffeeModal } from "../components/CofeeModal";
import { coffeeData } from "../data/mockData";

export const HomePage = () => {
  const [selectedCoffee, setSelectedCoffee] = useState<Coffee | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCoffees = coffeeData.filter((coffee) =>
    coffee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div
        className="relative h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-amber-900/90">
          <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="font-bungee text-5xl md:text-7xl text-white mb-6">
                The Coffee Tales
              </h1>
              <p className="text-xl md:text-2xl text-amber-100 mb-8 font-light">
                Explore the world's finest coffee varieties, brewing methods,
                and the art of coffee making
              </p>

              <div className="max-w-xl mx-auto relative">
                <input
                  type="text"
                  placeholder="Search your favorite coffee..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-14 rounded-full text-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-amber-500/50 shadow-xl"
                />
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-amber-600 w-6 h-6" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8"
            >
              <ChevronDown className="w-8 h-8 text-white animate-bounce" />
            </motion.div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCoffees.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
              onClick={() => setSelectedCoffee(coffee)}
            />
          ))}
        </motion.div>
      </main>

      {selectedCoffee && (
        <CoffeeModal
          coffee={selectedCoffee}
          isOpen={!!selectedCoffee}
          onClose={() => setSelectedCoffee(null)}
        />
      )}
    </>
  );
};
