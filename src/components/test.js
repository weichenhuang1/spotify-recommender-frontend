import { useRecommendations } from "../context/RecommendationContext";

const MyComponent = () => {
    const recommendationsContext = useRecommendations();

    console.log("✅ Recommendations Context:", recommendationsContext);

    if (!recommendationsContext) {
        return <p>Error: No context found!</p>;
    }

    const { recommendations, setRecommendations } = recommendationsContext;

    return (
        <div>
            {recommendations.length > 0 ? (
                recommendations.map((rec, index) => <p key={index}>{rec.track}</p>)
            ) : (
                <p>No recommendations yet.</p>
            )}
        </div>
    );
};

export default MyComponent;
