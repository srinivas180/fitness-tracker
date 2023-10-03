import { Routes, Route } from "react-router";

import { Dashboard, Exercises, Food, Goals } from "./components/";

import "./App.css";
import { NavLink } from "react-router-dom";

function App() {
    return (
        <div
            className="App"
            style={{ display: "flex", gap: "24px", margin: "24px" }}
        >
            <nav
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/exercises">Exercises</NavLink>
                <NavLink to="/food">Food</NavLink>
                <NavLink to="Goals">Goals</NavLink>
            </nav>
            <div>
                <h1 style={{ marginTop: "0" }}>Fitness Tracker</h1>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/exercises" element={<Exercises />} />
                    <Route path="/food" element={<Food />} />
                    <Route path="/goals" element={<Goals />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
