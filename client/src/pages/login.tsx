import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate("/home");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center bg-cover bg-center" 
         style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/web/A5130E63-8654-4616-BB31-C33C076B03BC/web_tall_panel/XX-en-20250106-TRIFECTA-perspective_46e14c63-96dc-42ee-adc6-a1e8f6c8b9dc_large.jpg')" }}>
      
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 bg-black/75 p-16 rounded w-full max-w-md">
        <h1 className="text-white text-3xl font-bold mb-8">Sign In</h1>
        
        {error && (
          <div className="bg-[#e87c03] text-white p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded bg-[#333] text-white placeholder-gray-400 focus:outline-none focus:bg-[#454545]"
            required
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded bg-[#333] text-white placeholder-gray-400 focus:outline-none focus:bg-[#454545]"
            required
          />
          
          <button
            type="submit"
            className="w-full bg-[#e50914] text-white py-3 rounded font-semibold hover:bg-[#f40612] transition"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-4 flex justify-between text-sm text-[#b3b3b3]">
            <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 w-4 h-4 bg-[#333] border-none rounded focus:ring-0 checked:bg-[#737373]" /> 
                Remember me
            </label>
            <span className="hover:underline cursor-pointer">Need help?</span>
        </div>

        <div className="mt-16 text-[#737373]">
            <p>New to Netflix? <span className="text-white hover:underline cursor-pointer font-medium">Sign up now.</span></p>
            <p className="mt-4 text-xs font-light">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
