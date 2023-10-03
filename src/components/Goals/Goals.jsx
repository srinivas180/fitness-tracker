import { useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addGoal, getGoals, removeGoal } from "../../actions";
import { goalReducer, goalInitialState } from "../../reducers/goalReducer";

export function GoalsList() {
    const trackerDispatch = useDispatch();
    const goals = useSelector((state) => state.goals);
    const loading = useSelector((state) => state.loading);

    function handleRemoveGoal(goalId) {
        trackerDispatch(removeGoal(goalId));
    }

    useEffect(() => {
        trackerDispatch(getGoals());
    }, []);

    return (
        <div>
            <h2>Goals</h2>
            <ul>
                {loading
                    ? "Loading..."
                    : goals.map((goal) => (
                          <div style={{ display: "flex" }} key={goal._id}>
                              <li>
                                  Name: {goal.name}
                                  Description: {goal.description}
                                  Date: {goal.targetDate}
                                  Target Calories: {goal.targetCalories}
                                  Status: {goal.status}
                              </li>
                              <button
                                  onClick={() => handleRemoveGoal(goal._id)}
                              >
                                  Remove Goal
                              </button>
                          </div>
                      ))}
            </ul>
        </div>
    );
}

export function Goals() {
    const [goal, dispatch] = useReducer(goalReducer, goalInitialState);
    const trackerDispatch = useDispatch();

    function handleAddGoal(e) {
        e.preventDefault();
        trackerDispatch(addGoal(goal));
    }

    return (
        <div>
            <h2>Goal Tracking</h2>
            <form
                onSubmit={(e) => handleAddGoal(e)}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: "20px",
                }}
            >
                <label>
                    Name{"  "}
                    <input
                        required
                        name="name"
                        type="text"
                        value={goal.name}
                        onChange={(e) =>
                            dispatch({
                                type: "HANDLE_INPUT",
                                field: e.target.name,
                                payload: e.target.value,
                            })
                        }
                    />
                </label>

                <label>
                    Description{"  "}
                    <input
                        required
                        name="description"
                        type="text"
                        value={goal.description}
                        onChange={(e) =>
                            dispatch({
                                type: "HANDLE_INPUT",
                                field: e.target.name,
                                payload: e.target.value,
                            })
                        }
                    />
                </label>

                <label>
                    Date{"  "}
                    <input
                        required
                        name="targetDate"
                        type="date"
                        value={goal.date}
                        onChange={(e) =>
                            dispatch({
                                type: "HANDLE_INPUT",
                                field: e.target.name,
                                payload: e.target.value,
                            })
                        }
                    />
                </label>

                <label>
                    Target Calories{"  "}
                    <input
                        required
                        name="targetCalories"
                        type="number"
                        value={goal.targetCalories}
                        onChange={(e) =>
                            dispatch({
                                type: "HANDLE_INPUT",
                                field: e.target.name,
                                payload: e.target.value,
                            })
                        }
                    />
                </label>
                <div>
                    <span>Status {"  "}</span>
                    <select
                        required
                        onChange={(e) =>
                            dispatch({
                                type: "HANDLE_INPUT",
                                field: e.target.name,
                                payload: e.target.value,
                            })
                        }
                        name="status"
                    >
                        <option>Select</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Achieved">Achieved</option>
                        <option value="Abandoned">Abandoned</option>
                    </select>
                </div>

                <button type="submit">Add Goal</button>
            </form>
            <GoalsList />
        </div>
    );
}
