import { Search, Bell, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
             <li className="font-bold cursor-pointer" onClick={() => navigate("/home")}>Home</li>
             <li className="cursor-pointer hover:text-[#b3b3b3] transition" onClick={() => navigate("/series")}>Series</li>
             <li className="cursor-pointer hover:text-[#b3b3b3] transition" onClick={() => navigate("/films")}>Films</li>
             <li className="cursor-pointer hover:text-[#b3b3b3] transition" onClick={() => navigate("/new")}>New & Popular</li>
             <li className="cursor-pointer hover:text-[#b3b3b3] transition" onClick={() => navigate("/mylist")}>My List</li>
         </ul>
      </div>
      
      <div className="flex items-center gap-6 text-white">
        <Search className="w-5 h-5 cursor-pointer" onClick={() => navigate("/browse")} />
        <Bell className="w-5 h-5 cursor-pointer" />
        <div className="group relative">
            <div className="flex items-center gap-2 cursor-pointer">
                 <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
                    <User className="w-5 h-5" />
                 </div>
            </div>
             {/* Dropdown */}
            <div className="hidden group-hover:block absolute right-0 top-full mt-2 w-48 bg-black/90 border border-[#333] rounded shadow-lg p-3">
                 <p className="text-white text-sm mb-2 border-b border-gray-700 pb-2">{user?.email || "Guest"}</p>
                 <button onClick={handleLogout} className="text-white text-sm hover:underline w-full text-left">Sign out</button>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;