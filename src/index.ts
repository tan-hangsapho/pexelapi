import express from "express";
import dotenv from "dotenv";
import { getPhoto } from "./server";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/photo", async (req, res) => {
  const searchQuery = req.query.search;

  if (!searchQuery) {
    return res.status(400).send("Please provide a search query.");
  }

  try {
    const photoData = await getPhoto(searchQuery as string);
    res.json(photoData);
  } catch (error) {
    console.error("Error fetching photo:", error);
    res.status(500).send("Error fetching photo");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
