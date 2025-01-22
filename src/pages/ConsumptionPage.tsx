import { motion } from "framer-motion";
import { BarChart3, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { consumptionData } from "../data/mockData";

export const ConsumptionPage = () => {
  const getTrendIcon = (trend: "increasing" | "decreasing" | "stable") => {
    switch (trend) {
      case "increasing":
        return <TrendingUp className="w-5 h-5 text-green-500" />;
      case "decreasing":
        return <TrendingDown className="w-5 h-5 text-red-500" />;
      default:
        return <Minus className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <BarChart3 className="w-8 h-8 text-amber-600 mr-3" />
          <h1 className="font-bungee text-4xl text-gray-900">
            Global Coffee Consumption
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover coffee consumption patterns and trends around the world
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {consumptionData.map((stat, index) => (
          <motion.div
            key={stat.country}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={stat.image_url}
                alt={stat.country}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-2xl font-bold text-white">
                  {stat.country}
                </h2>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">
                    Consumption per Capita
                  </p>
                  <p className="text-2xl font-bold text-amber-600">
                    {stat.consumption_per_capita} kg
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Preferred Type</p>
                  <p className="text-lg font-medium">{stat.preferred_type}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Trend</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium capitalize">
                      {stat.trend}
                    </span>
                    {getTrendIcon(stat.trend)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
