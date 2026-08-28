const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

// Test route
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Search route
app.get("/search", async (req, res) => {
    const { q } = req.query;

    if (!q) {
        return res.status(400).json({
            error: "Search query is required",
        });
    }

    try {
        const url = `https://serpapi.com/search.json?engine=google_shopping&q=${encodeURIComponent(q)}&gl=in&hl=en&api_key=${process.env.SERPAPI_KEY}`;

        const response = await fetch(url);

        const data = await response.json();

        // Print the complete SerpAPI response in the terminal
        console.log(data);

        // Send the complete response to the browser
        res.json(data);

    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Failed to fetch products",
            message: err.message,
        });
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`✅ Backend running at http://localhost:${PORT}`);
});