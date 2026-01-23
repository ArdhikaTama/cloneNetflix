import authService from "../services/authService.js";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const { user, token } = await authService.login(email, password);

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    if (error.message === "Invalid credentials") {
      return res.status(401).json({ message: error.message });
    }
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export default {
  login,
};
