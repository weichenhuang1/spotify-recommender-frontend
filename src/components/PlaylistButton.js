import React, { useState } from "react";
import { fetchRecommendations } from "../api";

const PlaylistButton = () => {
    const [playlistUrl, setPlaylistUrl] = useState(null);

    const createPlaylist = async () => {
        const data = await fetchRecommendations(true);
        setPlaylistUrl(data.playlist_url);
    };

    return (
        <div>
            <button onClick={createPlaylist} style={styles.button}>
                Save as Playlist
            </button>
            {playlistUrl && (
                <p>
                    Playlist created! <a href={playlistUrl} target="_blank" rel="noopener noreferrer">View Playlist</a>
                </p>
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
};

export default PlaylistButton;
