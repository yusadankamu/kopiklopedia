export const coffeeData = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    origin: "Yirgacheffe, Ethiopia",
    roast: "Light",
    description:
      "A bright and complex coffee with floral notes, citrus undertones, and a wine-like acidity. Known for its clean, distinctive flavor and aroma.",
    flavor_profile: ["Floral", "Citrus", "Bergamot", "Honey"],
    brewing_methods: ["Pour Over", "Drip", "Aeropress", "Cold Brew"],
    image_url:
      "https://125358891.cdn6.editmysite.com/uploads/1/2/5/3/125358891/s838318542243118434_p511_i1_w1672.jpeg",
    altitude: "1,750-2,200 meters",
    processing_method: "Washed",
    harvest_season: "October to December",
  },
  {
    id: 2,
    name: "Colombian Supremo",
    origin: "Huila, Colombia",
    roast: "Medium",
    description:
      "Well-balanced with a smooth, caramel sweetness, medium body, and clean finish. Notes of tropical fruit and citrus brighten the cup.",
    flavor_profile: ["Caramel", "Citrus", "Nutty", "Chocolate"],
    brewing_methods: ["Espresso", "French Press", "Pour Over", "Drip"],
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdhxeuIIxQgdEuSnJWW-JwA-iS3jlQV5hjkQ&s",
    altitude: "1,500-2,000 meters",
    processing_method: "Washed",
    harvest_season: "April to June",
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    origin: "Sumatra, Indonesia",
    roast: "Dark",
    description:
      "Full-bodied with a rich, complex flavor profile. Notes of dark chocolate, earth, and warm spices with a syrupy body.",
    flavor_profile: ["Earthy", "Spicy", "Dark Chocolate", "Cedar"],
    brewing_methods: ["French Press", "Espresso", "Cold Brew"],
    image_url:
      "https://coffeeroasters.com.hk/cdn/shop/products/Sumatra_Mandheling.jpg?v=1674195059",
    altitude: "900-1,500 meters",
    processing_method: "Wet-Hulled",
    harvest_season: "Year-round",
  },
  {
    id: 4,
    name: "Jamaican Blue Mountain",
    origin: "Blue Mountains, Jamaica",
    roast: "Medium",
    description:
      "Smooth and clean with virtually no bitterness. Known for its balanced flavor with sweet herbal and floral notes.",
    flavor_profile: ["Floral", "Creamy", "Sweet", "Herbal"],
    brewing_methods: ["Pour Over", "Drip", "French Press"],
    image_url:
      "https://www.haymancoffee.com/cdn/shop/articles/blue_mountain_coffee_jamaican_blue_mountain_coffee_jamaican_coffee_blue_mountain_coffee_beans.jpg?v=1521120894",
    altitude: "1,500-1,800 meters",
    processing_method: "Washed",
    harvest_season: "August to December",
  },
  {
    id: 5,
    name: "Kenya AA",
    origin: "Central Kenya",
    roast: "Medium-Light",
    description:
      "Bold and bright with a wine-like acidity. Complex flavor profile with berry and citrus notes.",
    flavor_profile: ["Berry", "Citrus", "Wine", "Black Currant"],
    brewing_methods: ["Pour Over", "Aeropress", "Drip"],
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rVdGgUey6iJ_doF9KQL8tgf_u4nBtFjD7A&s",
    altitude: "1,700-1,800 meters",
    processing_method: "Washed",
    harvest_season: "October to December",
  },
  {
    id: 6,
    name: "Guatemala Antigua",
    origin: "Antigua Valley, Guatemala",
    roast: "Medium",
    description:
      "Complex and sophisticated with a full body and spicy flavor. Notes of chocolate, caramel, and subtle fruit undertones.",
    flavor_profile: ["Chocolate", "Spicy", "Caramel", "Fruit"],
    brewing_methods: ["Pour Over", "Espresso", "French Press"],
    image_url:
      "https://blog.suvie.com/wp-content/uploads/2020/02/Guatemala-Antigua-fruit.jpg",
    altitude: "1,500-1,700 meters",
    processing_method: "Washed",
    harvest_season: "December to March",
  },
];

export const originData = [
  {
    country: "Ethiopia",
    region: "Yirgacheffe",
    description:
      "The birthplace of coffee, Ethiopia's Yirgacheffe region is known for producing some of the world's most distinctive and prized coffees. The high altitude, rich soil, and perfect climate create ideal growing conditions.",
    famous_beans: ["Yirgacheffe", "Sidamo", "Harrar", "Limu"],
    climate: "Highland tropical climate with moderate rainfall",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTidk4yPXQSBLkh3_SAO81cNraIxrhqZEPGRA&s",
  },
  {
    country: "Colombia",
    region: "Huila",
    description:
      "Colombia's coffee growing region is characterized by its mountainous terrain and rich volcanic soil. The unique geography and climate create perfect conditions for growing high-quality Arabica beans.",
    famous_beans: ["Supremo", "Excelso", "Medellin", "Bucaramanga"],
    climate: "Tropical highland climate with year-round mild temperatures",
    image_url:
      "https://specialtycoffee.stonex.com/cdn/shop/files/colombian-huila-supremo-ep-green-coffee-beans-mercon-specialty-1_1080x.jpg?v=1686238145",
  },
  {
    country: "Indonesia",
    region: "Sumatra",
    description:
      "Indonesia's unique processing methods and volcanic soils contribute to the distinctive flavors of its coffees. The region is famous for its full-bodied, earthy coffees with complex flavor profiles.",
    famous_beans: ["Mandheling", "Gayo", "Lintong", "Java"],
    climate: "Tropical with high humidity and rainfall",
    image_url:
      "https://ketiara.com/wp-content/uploads/2021/04/galeri_img-6-1.jpg?w=750",
  },
  {
    country: "Brazil",
    region: "Minas Gerais",
    description:
      "Brazil is the world's largest coffee producer, with Minas Gerais being the heart of its coffee production. The region produces smooth, medium-bodied coffees with chocolate and nutty notes.",
    famous_beans: ["Santos", "Bourbon", "Catuai", "Mundo Novo"],
    climate: "Tropical highland climate with distinct wet and dry seasons",
    image_url:
      "https://www.atcoffee.co.uk/wp-content/uploads/2024/03/Minas-Gerais-Image-6.jpg",
  },
];

export const consumptionData = [
  {
    country: "Finland",
    consumption_per_capita: 12,
    total_consumption: 66000000,
    preferred_type: "Light Roast",
    trend: "stable" as const,
    image_url:
      "https://cdn-v2.theculturetrip.com/1220x671/wp-content/uploads/2021/03/wpk6x5231-1.webp?quality=1",
  },
  {
    country: "Norway",
    consumption_per_capita: 9.9,
    total_consumption: 53000000,
    preferred_type: "Light to Medium Roast",
    trend: "increasing" as const,
    image_url:
      "https://media.cnn.com/api/v1/images/stellar/prod/160614174248-oslo-steeped-coffee-2.jpg?q=w_1600,h_900,x_0,y_0,c_fill",
  },
  {
    country: "Netherlands",
    consumption_per_capita: 8.4,
    total_consumption: 144000000,
    preferred_type: "Medium Roast",
    trend: "increasing" as const,
    image_url:
      "https://www.dutch-coffee.nl/wp-content/uploads/2014/05/wat-is-dutch-coffee.jpg",
  },
  {
    country: "Sweden",
    consumption_per_capita: 8.2,
    total_consumption: 84000000,
    preferred_type: "Medium-Light Roast",
    trend: "stable" as const,
    image_url:
      "https://www.nordicvisitor.com/images/sweden/outdoor-fika-tina-stafren-imagebank.sweden.se.jpg",
  },
  {
    country: "Denmark",
    consumption_per_capita: 8.7,
    total_consumption: 50000000,
    preferred_type: "Light Roast",
    trend: "increasing" as const,
    image_url:
      "https://media.istockphoto.com/id/516286103/photo/friends-at-cafe.jpg?s=612x612&w=0&k=20&c=Q96YAqmGaJQvNcjYgeS_YX-YfMgMbybED0PUhwZ1h3E=",
  },
];
