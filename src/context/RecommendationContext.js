import React, { createContext, useState, useContext } from "react";

// Create the context
const RecommendationContext = createContext();

// Custom hook for easy access
export const useRecommendations = () => {
    const context = useContext(RecommendationContext);
    if (!context) {
        throw new Error("useRecommendations must be used inside a <RecommendationProvider>");
    }
    return context;
};


// Context Provider
export const RecommendationProvider = ({ children }) => {
    const [recommendations, setRecommendations] = useState([]);
    const [showPlot, setShowPlot] = useState(false);  // Track if plot should be shown

    return (
        <RecommendationContext.Provider value={{ recommendations, setRecommendations, showPlot, setShowPlot }}>
            {children}
        </RecommendationContext.Provider>
    );
};
