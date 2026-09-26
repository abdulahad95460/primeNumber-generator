const express = require("express");
const primeRoutes = require("./routes/primeRoutes");

const app = express();

app.use(express.json());

app.use("/api", primeRoutes);


app.get("/", (req, res) => {
  res.json({
    message: "Prime Number Generator API is running",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});