import { useState, useEffect } from "react";
import { Play, Info, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
  genres: string[];
}

interface ContentMovie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genres: string[];
}

function Home() {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  // Featured movies untuk hero carousel
  const featuredMovies: Movie[] = [
    {
      id: 1,
      title: "Inception",
      backdrop_path: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      overview:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      vote_average: 8.8,
      release_date: "2010",
      genres: ["Action", "Sci-Fi", "Thriller"],
    },
    {
      id: 2,
      title: "The Dark Knight",
      backdrop_path: "/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
      overview:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
      vote_average: 9.0,
      release_date: "2008",
      genres: ["Action", "Crime", "Drama"],
    },
    {
      id: 3,
      title: "Interstellar",
      backdrop_path: "/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      overview:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      vote_average: 8.6,
      release_date: "2014",
      genres: ["Adventure", "Drama", "Sci-Fi"],
    },
    {
      id: 4,
      title: "The Matrix",
      backdrop_path: "/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
      overview:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      vote_average: 8.7,
      release_date: "1999",
      genres: ["Action", "Sci-Fi"],
    },
    {
      id: 5,
      title: "Avengers: Endgame",
      backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      overview:
        "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
      vote_average: 8.4,
      release_date: "2019",
      genres: ["Action", "Adventure", "Sci-Fi"],
    },
  ];

  // Popular on Netflix
  const popularMovies: ContentMovie[] = [
    {
      id: 1,
      title: "The Dark Knight",
      poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      backdrop_path: "/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
      vote_average: 9.0,
      release_date: "2008",
      genres: ["Action", "Crime"],
    },
    {
      id: 2,
      title: "Inception",
      poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      backdrop_path: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      vote_average: 8.8,
      release_date: "2010",
      genres: ["Action", "Sci-Fi"],
    },
    {
      id: 3,
      title: "Interstellar",
      poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      backdrop_path: "/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      vote_average: 8.6,
      release_date: "2014",
      genres: ["Adventure", "Drama"],
    },
    {
      id: 4,
      title: "The Matrix",
      poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      backdrop_path: "/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
      vote_average: 8.7,
      release_date: "1999",
      genres: ["Action", "Sci-Fi"],
    },
    {
      id: 5,
      title: "Fight Club",
      poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      backdrop_path: "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
      vote_average: 8.8,
      release_date: "1999",
      genres: ["Drama"],
    },
    {
      id: 6,
      title: "Pulp Fiction",
      poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      backdrop_path: "/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg",
      vote_average: 8.9,
      release_date: "1994",
      genres: ["Crime", "Drama"],
    },
  ];

  // Trending Movies
  const trendingMovies: ContentMovie[] = [
    {
      id: 1,
      title: "Breaking Bad",
      poster_path: "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      backdrop_path: "/eSzpy96DwBujGFj0xMbXBcGcfxX.jpg",
      vote_average: 8.2,
      release_date: "2017",
      genres: ["Crime", "Drama"],
    },
    {
      id: 2,
      title: "The Dark Knight",
      poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      backdrop_path: "/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
      vote_average: 9.0,
      release_date: "2008",
      genres: ["Action", "Crime"],
    },
    {
      id: 3,
      title: "Avengers: Endgame",
      poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      vote_average: 8.5,
      release_date: "2019",
      genres: ["Action", "Adventure"],
    },
    {
      id: 4,
      title: "Stranger Things",
      poster_path: "/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
      backdrop_path: "/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      vote_average: 8.7,
      release_date: "2016",
      genres: ["Drama", "Fantasy"],
    },
    {
      id: 5,
      title: "Inception",
      poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      backdrop_path: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      vote_average: 8.8,
      release_date: "2010",
      genres: ["Action", "Sci-Fi"],
    },
  ];

 const actionSelection: ContentMovie[] = [
    {
      id: 1,
      title: "Breaking Bad",
      poster_path: "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      backdrop_path: "/eSzpy96DwBujGFj0xMbXBcGcfxX.jpg",
      vote_average: 8.2,
      release_date: "2017",
      genres: ["Crime", "Drama"],
    },
    {
      id: 2,
      title: "The Dark Knight",
      poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      backdrop_path: "/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
      vote_average: 9.0,
      release_date: "2008",
      genres: ["Action", "Crime"],
    },
    {
      id: 3,
      title: "Avengers: Endgame",
      poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      vote_average: 8.5,
      release_date: "2019",
      genres: ["Action", "Adventure"],
    },
    {
      id: 4,
      title: "Stranger Things",
      poster_path: "/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
      backdrop_path: "/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      vote_average: 8.7,
      release_date: "2016",
      genres: ["Drama", "Fantasy"],
    },
    {
      id: 5,
      title: "Inception",
      poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      backdrop_path: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      vote_average: 8.8,
      release_date: "2010",
      genres: ["Action", "Sci-Fi"],
    },
  ];

 const hororSelection: ContentMovie[] = [
    {
      id: 1,
      title: "Breaking Bad",
      poster_path: "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      backdrop_path: "/eSzpy96DwBujGFj0xMbXBcGcfxX.jpg",
      vote_average: 8.2,
      release_date: "2017",
      genres: ["Crime", "Drama"],
    },
    {
      id: 2,
      title: "The Dark Knight",
      poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      backdrop_path: "/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
      vote_average: 9.0,
      release_date: "2008",
      genres: ["Action", "Crime"],
    },
    {
      id: 3,
      title: "Avengers: Endgame",
      poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      vote_average: 8.5,
      release_date: "2019",
      genres: ["Action", "Adventure"],
    },
    {
      id: 4,
      title: "Stranger Things",
      poster_path: "/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
      backdrop_path: "/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      vote_average: 8.7,
      release_date: "2016",
      genres: ["Drama", "Fantasy"],
    },
    {
      id: 5,
      title: "Inception",
      poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      backdrop_path: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      vote_average: 8.8,
      release_date: "2010",
      genres: ["Action", "Sci-Fi"],
    },
  ];

  // Auto-rotate hero carousel setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) =>
        prevIndex === featuredMovies.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredMovies.length]);

  const currentMovie = featuredMovies[currentMovieIndex];

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navbar />

      {/* Hero Section with Auto-Rotating Backdrop */}
      <div className="relative h-[80vh]">
        <div
          key={currentMovieIndex}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${currentMovie.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
        </div>

        <div className="relative h-full flex items-center px-[4%] pt-20">
          <div className="max-w-2xl">
            <h1
              key={`title-${currentMovieIndex}`}
              className="text-5xl md:text-7xl font-bold mb-4 animate-fadeIn"
            >
              {currentMovie.title}
            </h1>

            <div
              key={`info-${currentMovieIndex}`}
              className="flex items-center gap-4 mb-4 text-sm md:text-base animate-fadeIn"
            >
              <span className="text-green-500 font-bold flex items-center gap-1">
                <span className="text-lg">★</span>
                {currentMovie.vote_average.toFixed(1)} Rating
              </span>
              <span className="text-gray-300">{currentMovie.release_date}</span>
              <div className="flex gap-2">
                {currentMovie.genres.map((genre, index) => (
                  <span key={index} className="text-gray-300">
                    {genre}
                    {index < currentMovie.genres.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>

            <p
              key={`overview-${currentMovieIndex}`}
              className="text-base md:text-lg mb-6 text-gray-300 max-w-xl leading-relaxed animate-fadeIn"
            >
              {currentMovie.overview}
            </p>

            <div
              key={`buttons-${currentMovieIndex}`}
              className="flex gap-4 animate-fadeIn"
            >
              <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition">
                <Play className="w-5 h-5 fill-current" />
                Play
              </button>
              <button className="flex items-center gap-2 bg-gray-500/50 text-white px-8 py-3 rounded font-semibold hover:bg-gray-500/70 transition">
                <Info className="w-5 h-5" />
                More Info
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-[4%] flex gap-2">
          {featuredMovies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMovieIndex(index)}
              className={`h-1 rounded-full transition-all ${
                index === currentMovieIndex
                  ? "bg-white w-8"
                  : "bg-gray-500 w-6 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Popular on Netflix Section - Horizontal Scroll */}
      <div className="px-[4%] py-8 -mt-32 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">
          Popular on Netflix
        </h2>
        <div className="relative group">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 scroll-smooth">
            {popularMovies.map((movie) => (
              <div
                key={movie.id}
                className="flex-shrink-0 w-[200px] relative group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-[400px] object-cover rounded"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/300x170?text=No+Image";
                    }}
                  />

                  {/* Hover Overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 
  bg-gradient-to-t from-black via-black/80 to-transparent
  opacity-0 group-hover:opacity-100 transition-all duration-300
  p-4"
                  >
                    {/* Buttons */}
                    <div className="flex gap-2 mb-2">
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Play className="w-4 h-4 text-black ml-0.5" />
                      </button>

                      <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center">
                        +
                      </button>

                      <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center">
                        👍
                      </button>
                    </div>

                    {/* Match */}
                    <p className="text-green-500 text-xs font-semibold">
                      {(movie.vote_average * 10).toFixed(0)}% Match
                    </p>

                    {/* Meta */}
                    <p className="text-xs text-gray-300">
                      {movie.release_date}
                    </p>

                    <div className="flex gap-1 text-xs text-gray-400 mt-1">
                      {movie.genres.map((genre, idx) => (
                        <span key={idx}>
                          {genre}
                          {idx < movie.genres.length - 1 && " •"}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*  Trending Now*/}
      <div className="px-[4%] py-8 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">
          Trending Now
        </h2>
        <div className="relative group">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 scroll-smooth">
            {trendingMovies.map((movie) => (
              <div
                key={movie.id}
                className="flex-shrink-0 w-[200px] relative group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-[400px] object-cover rounded"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/300x170?text=No+Image";
                    }}
                  />

                  {/* Hover Overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 
  bg-gradient-to-t from-black via-black/80 to-transparent
  opacity-0 group-hover:opacity-100 transition-all duration-300
  p-4"
                  >
                    {/* Buttons */}
                    <div className="flex gap-2 mb-2">
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Play className="w-4 h-4 text-black ml-0.5" />
                      </button>

                      <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center">
                        +
                      </button>

                      <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center">
                        👍
                      </button>
                    </div>

                    {/* Match */}
                    <p className="text-green-500 text-xs font-semibold">
                      {(movie.vote_average * 10).toFixed(0)}% Match
                    </p>

                    {/* Meta */}
                    <p className="text-xs text-gray-300">
                      {movie.release_date}
                    </p>

                    <div className="flex gap-1 text-xs text-gray-400 mt-1">
                      {movie.genres.map((genre, idx) => (
                        <span key={idx}>
                          {genre}
                          {idx < movie.genres.length - 1 && " •"}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    {/* Action Selection*/}
      <div className="px-[4%] py-8 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">
          Action Selection
        </h2>
        <div className="relative group">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 scroll-smooth">
            {actionSelection.map((movie) => (
              <div
                key={movie.id}
                className="flex-shrink-0 w-[200px] relative group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-[400px] object-cover rounded"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/300x170?text=No+Image";
                    }}
                  />

                  {/* Hover Overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 
  bg-gradient-to-t from-black via-black/80 to-transparent
  opacity-0 group-hover:opacity-100 transition-all duration-300
  p-4"
                  >
                    {/* Buttons */}
                    <div className="flex gap-2 mb-2">
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Play className="w-4 h-4 text-black ml-0.5" />
                      </button>

                      <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center">
                        +
                      </button>

                      <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center">
                        👍
                      </button>
                    </div>

                    {/* Match */}
                    <p className="text-green-500 text-xs font-semibold">
                      {(movie.vote_average * 10).toFixed(0)}% Match
                    </p>

                    {/* Meta */}
                    <p className="text-xs text-gray-300">
                      {movie.release_date}
                    </p>

                    <div className="flex gap-1 text-xs text-gray-400 mt-1">
                      {movie.genres.map((genre, idx) => (
                        <span key={idx}>
                          {genre}
                          {idx < movie.genres.length - 1 && " •"}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


 {/* Horror Selection */}
      <div className="px-[4%] py-8 g relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">
          Horor Selection
        </h2>
        <div className="relative group">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 scroll-smooth">
            {hororSelection.map((movie) => (
              <div
                key={movie.id}
                className="flex-shrink-0 w-[200px] relative group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-[400px] object-cover rounded"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/300x170?text=No+Image";
                    }}
                  />

                  {/* Hover Overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 
  bg-gradient-to-t from-black via-black/80 to-transparent
  opacity-0 group-hover:opacity-100 transition-all duration-300
  p-4"
                  >
                    {/* Buttons */}
                    <div className="flex gap-2 mb-2">
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Play className="w-4 h-4 text-black ml-0.5" />
                      </button>

                      <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center">
                        +
                      </button>

                      <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center">
                        👍
                      </button>
                    </div>

                    {/* Match */}
                    <p className="text-green-500 text-xs font-semibold">
                      {(movie.vote_average * 10).toFixed(0)}% Match
                    </p>

                    {/* Meta */}
                    <p className="text-xs text-gray-300">
                      {movie.release_date}
                    </p>

                    <div className="flex gap-1 text-xs text-gray-400 mt-1">
                      {movie.genres.map((genre, idx) => (
                        <span key={idx}>
                          {genre}
                          {idx < movie.genres.length - 1 && " •"}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default Home;
