import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Coffee as CoffeeIcon,
  Search,
  Loader,
  ChevronDown,
} from "lucide-react";
import { Coffee } from "./types";
import { CoffeeCard } from "./components/CoffeeCard";
import { CoffeeModal } from "./components/CofeeModal";

function App() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCoffee, setSelectedCoffee] = useState<Coffee | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await axios.get(
          "https://api.sampleapis.com/coffee/hot"
        );
        const formattedCoffees: Coffee[] = response.data.map((coffee: any) => ({
          id: coffee.id,
          name: coffee.title,
          origin: coffee.ingredients?.[0] || "Various",
          roast:
            coffee.id % 3 === 0
              ? "Light"
              : coffee.id % 3 === 1
              ? "Medium"
              : "Dark",
          description: coffee.description,
          flavor_profile: [
            "Rich",
            coffee.id % 2 === 0 ? "Nutty" : "Fruity",
            coffee.id % 3 === 0
              ? "Chocolate"
              : coffee.id % 3 === 1
              ? "Caramel"
              : "Floral",
          ],
          brewing_methods: [
            "Espresso",
            "French Press",
            coffee.id % 2 === 0 ? "Pour Over" : "Drip",
            coffee.id % 3 === 0 ? "Cold Brew" : "Aeropress",
          ],
          image_url: `https://source.unsplash.com/featured/800x600/?coffee-beans-${coffee.id}`,
        }));
        setCoffees(formattedCoffees);
      } catch (error) {
        console.error("Error fetching coffees:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoffees();
  }, []);

  const filteredCoffees = coffees.filter((coffee) =>
    coffee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/featured/1920x1080/?coffee-shop")',
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
              <div className="flex items-center justify-center mb-6">
                <CoffeeIcon className="w-12 h-12 mr-4 text-amber-400" />
                <h1 className="font-bungee text-5xl md:text-7xl text-white">
                  Kopiklopedia
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-amber-100 mb-8 font-light">
                Discover the world's finest coffee varieties, brewing methods,
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Coffee Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From light to dark roasts, discover unique flavors and brewing
            methods that will elevate your coffee experience
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <Loader className="w-8 h-8 animate-spin text-amber-600" />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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
        )}
      </main>

      {selectedCoffee && (
        <CoffeeModal
          coffee={selectedCoffee}
          isOpen={!!selectedCoffee}
          onClose={() => setSelectedCoffee(null)}
        />
      )}
    </div>
  );
}

export default App;
