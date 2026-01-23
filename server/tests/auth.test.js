import { jest, describe, it, expect, beforeEach } from '@jest/globals';

// Define the mock before importing the app
jest.unstable_mockModule("../src/services/authService.js", () => ({
  default: {
    login: jest.fn(),
  },
}));

// Dynamic imports are required so that the mock is applied before the modules are loaded
const { default: request } = await import("supertest");
const { default: app } = await import("../src/app.js");
const { default: authService } = await import("../src/services/authService.js");

describe("POST /api/auth/login", () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 200 and token on successful login", async () => {
    // Arrange: Mock the service to return a user and token
    const mockUser = { _id: "123", email: "test@example.com" };
    const mockToken = "fake-jwt-token";
    authService.login.mockResolvedValue({ user: mockUser, token: mockToken });

    // Act
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "test@example.com", password: "password123" });

    // Assert
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      message: "Login successful",
      token: mockToken,
      user: { id: "123", email: "test@example.com" },
    });
    expect(authService.login).toHaveBeenCalledWith("test@example.com", "password123");
  });

  it("should return 400 if email or password is missing", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "test@example.com" }); // Missing password

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Email and password are required");
    expect(authService.login).not.toHaveBeenCalled();
  });

  it("should return 401 on invalid credentials", async () => {
    // Arrange: Mock the service to throw an error
    authService.login.mockRejectedValue(new Error("Invalid credentials"));

    // Act
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "wrong@example.com", password: "wrongpassword" });

    // Assert
    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe("Invalid credentials");
  });

  it("should return 500 on server error", async () => {
    // Suppress console.error for this test case
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    // Arrange: Mock the service to throw an unexpected error
    authService.login.mockRejectedValue(new Error("Database connection failed"));

    // Act
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "test@example.com", password: "password123" });

    // Assert
    expect(res.statusCode).toBe(500);
    expect(res.body.message).toBe("Server error");

    // Restore console.error
    consoleSpy.mockRestore();
  });
});
