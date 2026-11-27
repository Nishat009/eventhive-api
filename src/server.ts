import "dotenv/config";
import express from "express";

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.get("/", (_req, res) => {
  res.send("EventHive API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
