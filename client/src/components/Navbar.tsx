import { Search, Bell, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-500 ${isScrolled ? "bg-[#141414]" : "bg-gradient-to-b from-black/80 to-transparent"} px-[4%] py-4 flex items-center justify-between`}>
      <div className="flex items-center gap-8">
         <h2 className="text-[#E50914] text-3xl font-bold cursor-pointer" onClick={() => navigate("/home")}>NETFLIX</h2>
         <ul className="hidden md:flex gap-4 text-sm text-[#e5e5e5]">
             <li className="font-bold cursor-pointer">Home</li>
             <li className="cursor-pointer hover:text-[#b3b3b3] transition">Series</li>
             <li className="cursor-pointer hover:text-[#b3b3b3] transition">Films</li>
             <li className="cursor-pointer hover:text-[#b3b3b3] transition">New & Popular</li>
             <li className="cursor-pointer hover:text-[#b3b3b3] transition">My List</li>
         </ul>
      </div>
      
      <div className="flex items-center gap-6 text-white">
        <Search className="w-5 h-5 cursor-pointer" />
        <Bell className="w-5 h-5 cursor-pointer" />
        <div className="group relative">
            <div className="flex items-center gap-2 cursor-pointer">
                 <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
                    <User className="w-5 h-5" />
                 </div>
            </div>
             {/* Dropdown */}
            <div className="hidden group-hover:block absolute right-0 top-full mt-2 w-32 bg-black/90 border border-[#333] rounded shadow-lg p-2">
                 <button onClick={() => navigate("/login")} className="text-white text-sm hover:underline w-full text-left">Sign out</button>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
