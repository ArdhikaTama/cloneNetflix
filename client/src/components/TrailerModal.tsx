function TrailerModal({ videoKey, onClose }: { videoKey: string | null, onClose: () => void }) {
  if (!videoKey) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative w-full max-w-4xl bg-[#141414] rounded-lg overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex justify-end p-2 absolute top-0 right-0 z-10">
            <button onClick={onClose} className="text-white bg-black/50 rounded-full p-2 hover:bg-black w-10 h-10 flex items-center justify-center">✖</button>
        </div>
        <div className="aspect-video w-full">
            <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
            title="Trailer"
            style={{ border: "none" }}
            allowFullScreen
            allow="autoplay; encrypted-media"
            ></iframe>
        </div>
      </div>
    </div>
  );
}

export default TrailerModal;
