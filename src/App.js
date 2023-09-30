import { Routes, Route } from "react-router";

import {
    Dashboard,
    ExerciseTracking,
    FoodTracking,
    GoalTracking,
} from "./components/";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default App;
