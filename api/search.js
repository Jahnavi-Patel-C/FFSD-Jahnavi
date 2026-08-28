export default async function handler(req, res) {
    // Allow CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    const { q } = req.query;

    if (!q) {
        return res.status(400).json({
            error: "Search query is required",
        });
    }

    // Use environment variable first, fall back to hardcoded key
    const apiKey =
        process.env.SERPAPI_KEY ||
        process.env.VITE_SERPAPI_KEY ||
        "ee3e9a1351aac00c2911f66198e5dc74b83e2a65d21fe6dc32d4bd3fea8ea98a";

    if (!apiKey) {
        return res.status(500).json({
            error: "SerpAPI key is not configured",
        });
    }

    const url = `https://serpapi.com/search.json?engine=google_shopping&q=${encodeURIComponent(q)}&gl=in&hl=en&api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            console.error("SerpAPI error:", data.error);
            return res.status(502).json({
                error: "SerpAPI returned an error",
                details: data.error,
            });
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error("Fetch error:", error);

        return res.status(500).json({
            error: "Failed to fetch from SerpAPI",
            message: error.message,
        });
    }
}