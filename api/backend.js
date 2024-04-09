import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(PORT, () => console.log(`"Server ready on port ${PORT}`));
