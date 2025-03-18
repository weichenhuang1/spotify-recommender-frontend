import React from "react";
import { loginToSpotify } from "../api";

const Login = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Spotify Recommender</h1>
            <button onClick={loginToSpotify} style={styles.button}>
                Login with Spotify
            </button>
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
    },
};

export default Login;
