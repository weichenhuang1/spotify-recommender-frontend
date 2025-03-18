import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import RecentlyPlayed from "./components/RecentlyPlayed";
import Recommendations from "./components/Recommendations";
import ClusterPlot from "./components/ClusterPlot";


function App() {
    return (
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/recently_played" element={<RecentlyPlayed />} />
              <Route path="/recommendations" element={<Recommendations />} />
              <Route path="/cluster_plot" element={<ClusterPlot />} />
          </Routes>
    );
}

export default App;

