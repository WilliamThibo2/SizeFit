import React from 'react';
import HomePage from './components/HomePage';
import MorphologyQuestionnaire from './components/MorphologyQuestionnaire';
import RecommendationResults from './components/RecommendationResults';

function App() {
    return (
        <div className="App">
            <HomePage />
            <MorphologyQuestionnaire />
            <RecommendationResults />
        </div>
    );
}

export default App;
