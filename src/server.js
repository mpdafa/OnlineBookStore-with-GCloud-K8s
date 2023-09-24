const express = require("express");
const path = require("path");
const db = require("./database");
const morgan = require("morgan");
// const bcrypt = require("bcrypt");
const crypto = require("crypto");

const app = express();
const port = process.env.PORT || 3000;

// Use morgan for logging HTTP requests
app.use(morgan("combined"));

// Add this line to parse JSON request bodies
app.use(express.json());

// Serve the login page at the root URL
app.get("/", (req, res) => {
  console.log("Serving login page...");
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Serve static files and index.html
// app.get("/:file", (req, res) => {
//   const requestedFile = req.params.file;
//   const allowedFiles = ["style.css", "login.js", "index.html", "main.js"];
//
//   if (allowedFiles.includes(requestedFile)) {
//     res.sendFile(path.join(__dirname, "public", requestedFile));
//   } else {
//     res.status(404).send("File not found");
//   }
// });

// API route for login verification
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Fetch the user's hashed password from the database
    const user = await db.executeQuery("SELECT * FROM users WHERE username = ?", [username]);

    if (user.length === 0) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    // Compare the provided password with the hashed password in the database
    // const passwordMatch = await bcrypt.compare(password, user[0].password);
    const hashedPassword = crypto.createHash("md5").update(password).digest("hex");

    // if (passwordMatch) {
    //   res.status(200).json({ message: "Login successful" });
    // } else {
    //   res.status(401).json({ message: "Invalid credentials" });
    // }
    if (hashedPassword === user[0].password) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API route to fetch books from the database
app.get("/api/books", async (req, res) => {
  try {
    const result = await db.executeQuery("SELECT * FROM books");
    res.json(result);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
