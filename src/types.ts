export interface Coffee {
  id: number;
  name: string;
  origin: string;
  roast: string;
  description: string;
  flavor_profile: string[];
  brewing_methods: string[];
  image_url: string;
  altitude?: string;
  processing_method?: string;
  harvest_season?: string;
}

export interface CoffeeOrigin {
  country: string;
  region: string;
  description: string;
  famous_beans: string[];
  climate: string;
  image_url: string;
}

export interface ConsumptionStat {
  country: string;
  consumption_per_capita: number;
  total_consumption: number;
  preferred_type: string;
  trend: "increasing" | "decreasing" | "stable";
  image_url: string;
}
