import { Routes, Route } from "react-router";
import { NavLink } from "react-router-dom";

import { Inventory, Sales, Reports } from "./components";
import "./App.css";

function App() {
    return (
        <div>
            <nav style={{ display: "flex", gap: "16px" }}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/sales">Sales</NavLink>
                <NavLink to="/reports">Reports</NavLink>
                <a
                    href="https://github.com/srinivas180/inventory-management"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github Link
                </a>
                <a
                    href="https://replit.com/@srinivas365/Assignment-18-Inventory-Management-Backend"
                    target="_blank"
                    rel="noreferrer"
                >
                    Backend Code Link
                </a>
            </nav>
            <h1>Inventory Management</h1>
            <Routes>
                <Route path="/" element={<Inventory />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/reports" element={<Reports />} />
            </Routes>
        </div>
    );
}

export default App;
