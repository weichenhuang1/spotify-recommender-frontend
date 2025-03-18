import React, { useState, useEffect } from "react";
import { fetchRecentlyPlayed } from "../api";

const RecentlyPlayed = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchRecentlyPlayed().then(setSongs).catch(console.error);
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Recently Played Songs</h2>
            <ul style={styles.list}>
                {songs.map((song, index) => (
                    <li key={index} style={styles.item}>
                        {song.id}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    list: { listStyle: "none", padding: 0 },
    item: { padding: "10px", fontSize: "18px" },
};

export default RecentlyPlayed;
