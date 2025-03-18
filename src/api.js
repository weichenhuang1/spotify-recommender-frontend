import axios from "axios";

const API_BASE_URL = "http://localhost:8000"; // FastAPI backend

export const fetchClusterPlot = async () => {
    try {
        const plotResponse = await axios.get("http://localhost:8000/plot_clusters");
        const plotData = typeof plotResponse.data === "string" ? JSON.parse(plotResponse.data) : plotResponse.data;
        return plotData;  //
    } catch (error) {
        console.error("🚨 Error fetching cluster plot:", error);
        return null;
    }
};

export const loginToSpotify = () => {
    window.location.href = `${API_BASE_URL}/`;
};

export const fetchRecentlyPlayed = async () => {
    const response = await axios.get(`${API_BASE_URL}/recently_played`);
    return response.data;
};

export const fetchRecommendations = async (createPlaylist = false) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/recommendations`, {
            timeout: 60000,  // Set timeout to 60 seconds
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching recommendations:", error);
    }
};
