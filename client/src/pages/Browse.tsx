import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

interface Movie {
  _id: string;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
}

// ===== Text formatter (UI only) =====
const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

const capitalizeWords = (text: string) =>
  text
    .split(" ")
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");

const formatRegion = (region: string) => {
  if (region === "uk") return "UK";
  if (region === "usa") return "USA";
  return capitalize(region);
};


function Browse() {
  const [content, setContent] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  // === Loklok-style UI state (UI only) ===
  const [region, setRegion] = useState("all");
  const [category, setCategory] = useState("all");
  const [period, setPeriod] = useState("all");
  const [sort, setSort] = useState("popularity");

  // === Filter options ===
  const regions = [
  "all",

  // Amerika & Eropa
  "america",        
  "canada",
  "uk",
  "france",
  "germany",
  "italy",
  "spain",

  // Asia
  "korea",
  "japan",
  "china",
  "hongkong",
  "taiwan",
  "india",          
  "indonesia",
  "thailand",
  "philippines",

  // Timur Tengah & Afrika
  "turkey",
  "iran",
  "egypt",
  "south africa",

  // Amerika Latin
  "mexico",
  "brazil",
  "argentina",

  // Oceania
  "australia",
  "new zealand"
];

const categories = [
  "all",

  // Utama
  "action",
  "adventure",
  "animation",
  "comedy",
  "crime",
  "documentary",
  "drama",
  "family",
  "fantasy",
  "history",
  "horror",
  "music",
  "mystery",
  "romance",
  "science fiction",
  "thriller",
  "war",
  "western",

  // Tambahan populer
  "biography",
  "sport",
  "musical",
  "superhero",
  "psychological",
  "slice of life",
  "survival",
  "teen",
  "dark",
  "political",
  "religion",

  "other"
];

const periods = [
  "all",

  "2026",
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2010",
  "2005",
  "2000",

  "before"
];

const sorts = [
  "popularity",
  "trending",
  "recent",
  "high rating",
  "most watched",
  "alphabetical",
  "editor pick"
];


  const filterBtn = (active: boolean) =>
    `px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition
     ${
       active
         ? "bg-white text-black font-semibold"
         : "bg-[#2a2a2a] text-gray-300 hover:bg-[#3a3a3a]"
     }`;

  // === Dummy content ===
  const dummyContent: Movie[] = [
    {
      _id: "1",
      title: "Breaking Bad",
      backdrop_path: "",
      poster_path: "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      overview: "",
      vote_average: 8.2,
      release_date: "2017",
    },
    {
      _id: "2",
      title: "Avengers: Endgame",
      backdrop_path: "",
      poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      overview: "",
      vote_average: 8.4,
      release_date: "2019",
    },
    {
      _id: "3",
      title: "The Dark Knight",
      backdrop_path: "",
      poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      overview: "",
      vote_average: 9.0,
      release_date: "2008",
    },
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setContent(dummyContent);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navbar />

      <div className="pt-24 px-[4%]">

        {/* ===== Loklok Filter Bar ===== */}
        <div className="space-y-3 mb-6">

          {/* Regions */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={filterBtn(region === r)}
              >
                {r === "all" ? "All regions" : formatRegion(r)}
              </button>
            ))}
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={filterBtn(category === c)}
              >
                {c === "all" ? "All Categories" : capitalize(c)}
              </button>
            ))}
          </div>

          {/* Time Periods */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {periods.map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={filterBtn(period === p)}
              >
                {p === "all" ? "All Time Periods" : p}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {sorts.map((s) => (
              <button
                key={s}
                onClick={() => setSort(s)}
                className={filterBtn(sort === s)}
              >
                {capitalizeWords(s)}
              </button>
            ))}
          </div>

        </div>
        {/* ===== END Loklok Filter Bar ===== */}

        {/* ===== GRID ===== */}
        {loading ? (
          <div className="text-center py-20">
            <p className="text-xl">Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 pb-20">
            {content.map((item) => (
              <div
                key={item._id}
                className="group relative cursor-pointer transition transform hover:scale-105"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-auto rounded"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/300x450?text=No+Image";
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-sm font-bold mb-1">{item.title}</h3>
                  <p className="text-xs text-green-500">
                    ★ {item.vote_average.toFixed(1)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* ===== END GRID ===== */}

      </div>
    </div>
  );
}

export default Browse;
