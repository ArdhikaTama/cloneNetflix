# API Specification

This document serves as the contract between the Frontend and Backend teams.

## Base URL
`http://localhost:5000/api`

## Authentication

### 1. Login User
Authenticates a user and returns a JWT token.

- **Endpoint:** `/auth/login`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`

#### Request Body
| Field    | Type   | Required | Description |
|----------|--------|----------|-------------|
| email    | String | Yes      | User's email address |
| password | String | Yes      | User's password |

**Example Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Responses

**200 OK (Success)**
Returns the JWT token and user info.
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR...",
  "user": {
    "id": "65b21c4...",
    "email": "user@example.com"
  }
}
```

**400 Bad Request**
Missing required fields.
```json
{
  "message": "Email and password are required"
}
```

**401 Unauthorized**
Invalid email or password.
```json
{
  "message": "Invalid credentials"
}
```

**500 Internal Server Error**
Unexpected server-side error.
```json
{
  "message": "Server error"
}
```
