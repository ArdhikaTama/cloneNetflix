import { useEffect, useState } from "react";
import MovieCard from "../components/Moviecard";
import TrailerModal from "../components/TrailerModal";
import Navbar from "../components/Navbar";

// Mock Data
const MOCK_MOVIES = [
  { id: 1, title: "Stranger Things", poster_path: "/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg", backdrop_path: "/56v2KjBlU4XaOv9rVYkJu64MILo.jpg", overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl." },
  { id: 2, title: "The Witcher", poster_path: "/7vjaCdMWasJWbwizlTEvS873JoE.jpg", backdrop_path: "/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg", overview: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts." },
  { id: 3, title: "Inception", poster_path: "/9gk7admal4zl23kO5pluymeaxUR.jpg", backdrop_path: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg", overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life." },
  { id: 4, title: "Breaking Bad", poster_path: "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", backdrop_path: "/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg", overview: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future." },
  { id: 5, title: "Avengers: Endgame", poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg", backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg", overview: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe." },
];

function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetch
    setMovies(MOCK_MOVIES);
  }, []);

  const playTrailer = async (id: number) => {
    console.log("Play trailer for", id);
    // Mock trailer key for demo
    setTrailerKey("dQw4w9WgXcQ"); 
  };

  return (
    <div className="bg-[#141414] min-h-screen text-white">
      <Navbar />
      
      {/* Hero Banner (First movie) */}
      <div className="relative h-[56.25vw] max-h-[70vh] w-full object-cover">
         <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10"></div>
         {movies.length > 0 && (
             <>
                <img 
                    src={movies[0].backdrop_path.startsWith('http') ? movies[0].backdrop_path : `https://image.tmdb.org/t/p/original${movies[0].backdrop_path}`}
                    alt={movies[0].title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-[30%] left-[4%] z-20 max-w-xl">
                    <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{movies[0].title}</h1>
                    <p className="text-lg mb-6 drop-shadow-md line-clamp-3">{movies[0].overview}</p>
                    <div className="flex gap-3">
                         <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded hover:bg-opacity-80 transition font-bold" onClick={() => playTrailer(movies[0].id)}>
                             <span>▶</span> Play
                         </button>
                         <button className="flex items-center gap-2 bg-[rgba(109,109,110,0.7)] text-white px-6 py-2 rounded hover:bg-[rgba(109,109,110,0.4)] transition font-bold">
                             ℹ More Info
                         </button>
                    </div>
                </div>
             </>
         )}
      </div>

      <div className="px-[4%] pb-10 -mt-24 relative z-20">
        <h3 className="text-xl font-bold mb-4">Trending Now</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onPlay={playTrailer}
            />
          ))}
        </div>
      </div>

      <TrailerModal
        videoKey={trailerKey}
        onClose={() => setTrailerKey(null)}
      />
    </div>
  );
}

export default Home;
