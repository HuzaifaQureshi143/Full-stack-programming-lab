const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5002;
const NEWS_API_KEY = process.env.NEWS_API_KEY;

// Valid 2-letter country codes for reference
const validCountries = [
  "us","gb","pk","in","au","ca","de","fr","jp","ae","sa","eg"
];

// GET /api/news/:country
app.get("/api/news/:country", async (req, res) => {
  const country = req.params.country.toLowerCase();

  if (!validCountries.includes(country)) {
    return res.status(400).json({
      error: `Invalid country code: '${country}'. Use 2-letter codes like 'us', 'pk', 'gb'.`
    });
  }

  try {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${NEWS_API_KEY}&pageSize=5`;
    const response = await axios.get(url);
    const articles = response.data.articles;

    if (!articles || articles.length === 0) {
      return res.status(404).json({ error: "No headlines found for this country." });
    }

    const headlines = articles.map(article => ({
      title: article.title,
      source: article.source.name,
      url: article.url,
      publishedAt: article.publishedAt
    }));

    res.json({
      country: country.toUpperCase(),
      totalResults: headlines.length,
      headlines
    });

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news. Please try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`News API running on http://localhost:${PORT}`);
});