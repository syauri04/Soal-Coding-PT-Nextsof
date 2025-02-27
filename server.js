const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Melayani file statis dari folder public

const users = { admin: "password123" };

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (users[username] && users[username] === password) {
    res.json({ success: true, message: "Login berhasil!" });
  } else {
    res.status(401).json({ success: false, message: "Username atau password salah!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
