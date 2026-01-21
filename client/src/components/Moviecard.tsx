function MovieCard({ movie, onPlay }: { movie: any, onPlay: (id: number) => void }) {
  // Cek apakah poster_path adalah link lengkap (https) atau kode buntut saja
  const imageUrl = movie.poster_path?.startsWith("http") 
    ? movie.poster_path 
    : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="relative group cursor-pointer transition duration-200 ease-in-out hover:z-20 transform hover:scale-105">
      <img
        src={imageUrl}
        alt={movie.title}
        className="rounded-md w-full h-auto object-cover"
        // Jika gambar error, ganti dengan gambar abu-abu
        onError={(e) => {
            (e.target as HTMLImageElement).src = "https://via.placeholder.com/500x750/111/fff?text=No+Image";
        }}
      />
      
      {/* Hover Info (Simplified) */}
      <div className="absolute inset-x-0 bottom-0 p-2 opacity-0 group-hover:opacity-100 transition duration-200 bg-black/60 rounded-b-md">
         <h4 className="text-sm font-bold text-white truncate">{movie.title}</h4>
         <div className="flex justify-between items-center mt-2">
            <button className="bg-white text-black rounded-full p-1 hover:scale-110 transition" onClick={() => onPlay(movie.id)}>
              <span className="sr-only">Play</span>
              ▶
            </button>
            <span className="text-[10px] text-green-400 font-bold">98% Match</span>
         </div>
      </div>
    </div>
  );
}

export default MovieCard;
