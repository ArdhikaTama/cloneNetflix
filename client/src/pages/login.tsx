import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login logic here
    if (email && password) {
       navigate("/home");
    }
  };

  return (
    <div className="min-h-screen bg-black bg-cover bg-center flex items-center justify-center relative shadow-lg" style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/6122d256-5573-4f9e-a0e2-638706d8a7c2/ID-en-20230918-popsignuptwoweeks-perspective_alpha_website_medium.jpg')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Login Card */}
      <div className="relative z-10 w-full max-w-[450px] bg-black/75 p-16 rounded-md shadow-lg text-white">
        <h2 className="text-3xl font-bold mb-8">Sign In</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
            type="text"
            placeholder="Email or phone number"
            className="p-4 rounded bg-[#333] placeholder-gray-400 focus:outline-none focus:bg-[#444] text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input
            type="password"
            placeholder="Password"
            className="p-4 rounded bg-[#333] placeholder-gray-400 focus:outline-none focus:bg-[#444] text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <button
            type="submit"
            className="mt-6 bg-[#e50914] text-white font-bold py-3 px-6 rounded hover:bg-[#c11119] transition duration-200"
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
