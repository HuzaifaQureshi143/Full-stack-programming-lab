const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;
const API_KEY = process.env.WEATHER_API_KEY;

// GET /api/weather/:city
app.get("/api/weather/:city", async (req, res) => {
    const city = req.params.city;

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await axios.get(url);
        const data = response.data;

        res.json({
            city: data.name,
            temperature: data.main.temp,
            condition: data.weather[0].description,
            humidity: data.main.humidity
        });

    } catch (error) {

        console.log("FULL ERROR:");
        console.log(error.response?.data || error.message);

        res.status(500).json({
            error: error.response?.data || error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Weather API running on http://localhost:${PORT}`);
});