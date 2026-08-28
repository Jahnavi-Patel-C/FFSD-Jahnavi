export async function searchProducts(query) {
    const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    const endpoint = isLocalhost
        ? `http://localhost:5000/search?q=${encodeURIComponent(query)}`
        : `/api/search?q=${encodeURIComponent(query)}`;

    const response = await fetch(endpoint);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    return await response.json();
}