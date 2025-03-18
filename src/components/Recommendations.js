import React, { useState } from "react";
import { fetchRecommendations, fetchClusterPlot } from "../api"; // ✅ Import both API calls
import PlaylistButton from "./PlaylistButton";
import Plot from "react-plotly.js"; // ✅ Import Plotly for visualization

const Recommendations = () => {
    const [songs, setSongs] = useState([]);
    const [playlistUrl, setPlaylistUrl] = useState(null);
    const [clusterPlot, setClusterPlot] = useState(null);
    const [explanation, setExplanation] = useState("");
    const [showClusters, setShowClusters] = useState(false);

    const getRecommendations = async () => {
        const data = await fetchRecommendations();
        setSongs(data.recommendations);
        setPlaylistUrl(data.playlist_url);
    };

    const getClusterPlot = async () => {
        const data = await fetchClusterPlot();
        if (data) {
            setClusterPlot(data);
            setExplanation( 
                <>
                This spotify recommender uses <a href = "https://en.wikipedia.org/wiki/K-means_clustering" target = "_blank">K-means clustering</a> to recommend similar songs from a dataset.
                After retrieving your most recent songs, we project the feature space to 3 dimensions using <a href = "https://www.geeksforgeeks.org/principal-component-analysis-pca/" target = "_blank">principal component analysis</a> and find the most optimal clustering using <a href = "https://en.wikipedia.org/wiki/Silhouette_(clustering)" target = "_blank">silhouette scores</a> as our metric. 
                After we have obtained the optimal cluster centers, we make a pass through the dataset and we return the closest songs to your cluster centers.
                The circles are the songs in your recently listened that exist in the dataset, the large X is the cluster center, and the diamonds are the songs you are recommended.
                Hover over each element to see the song title and artist name, happy listening!
                </>
                );
            setShowClusters(true);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Recommended Songs</h2>
            <button onClick={getRecommendations} style={styles.button}>
                Get Recommendations
            </button>
            <ul style={styles.list}>
                {songs.map((song, index) => (
                    <li key={index} style={styles.item}>
                        {song.artist} - {song.track} (<a href={song.url} target="_blank" rel="noopener noreferrer">Listen</a>)
                    </li>
                ))}
            </ul>

            {songs.length > 0 && (
                <>
                    <PlaylistButton />
                    <button onClick={getClusterPlot} style={styles.button}>
                        How are these recommendations made?
                    </button>
                </>
            )}

            {playlistUrl && (
                <p>
                    <a href={playlistUrl} target="_blank" rel="noopener noreferrer">
                        View Playlist
                    </a>
                </p>
            )}

            {/* ✅ Show Explanation and Plot after clicking the button */}
            {showClusters && (
                <div style={styles.plotContainer}>
                    <h2>Explanation</h2>
                    <p>{explanation}</p>

                    {clusterPlot && (
                        <Plot
                            data={clusterPlot.data}
                            layout={clusterPlot.layout}
                            style={{ width: "100%", height: "800px" }}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

const styles = {
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#1DB954",
        color: "white",
        border: "none",
        borderRadius: "20px",
        cursor: "pointer",
        margin: "10px",
    },
    list: { listStyle: "none", padding: 0 },
    item: { padding: "10px", fontSize: "18px" },
    plotContainer: {
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
    },
};

export default Recommendations;
