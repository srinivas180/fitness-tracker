import { useReducer, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    exerciseInitialState,
    exerciseReducer,
} from "../../reducers/exerciseReducer";

import { addExercise, getExercises, removeExercise } from "../../actions";

function ExercisesList() {
    const exercises = useSelector((state) => state.exercises);
    const loading = useSelector((state) => state.loading);
    const trackerDispatch = useDispatch();

    function handleRemoveExercise(exercise) {
        trackerDispatch(removeExercise(exercise._id));
    }

    useEffect(() => {
        trackerDispatch(getExercises());
    }, []);

    return (
        <div>
            <h2>Exercises</h2>
            <ul>
                {loading
                    ? "Loading"
                    : exercises.map((exercise) => (
                          <div style={{ display: "flex" }} key={exercise._id}>
                              <li>
                                  Name: {exercise.name} Duration:{" "}
                                  {exercise.duration} Calories:{" "}
                                  {exercise.calories}
                              </li>
                              <button
                                  onClick={() => {
                                      handleRemoveExercise(exercise);
                                  }}
                              >
                                  Remove Exercise
                              </button>
                          </div>
                      ))}
            </ul>
        </div>
    );
}

export function Exercises() {
    const calories = {
        walking: 100,
        cycling: 200,
        streches: 300,
        pullUps: 500,
    };

    const [exercise, dispatch] = useReducer(
        exerciseReducer,
        exerciseInitialState
    );

    const trackerDispatch = useDispatch();

    function handleAddExercise(e) {
        e.preventDefault();
        trackerDispatch(addExercise(exercise));
    }

    return (
        <div>
            <h2>Exercise Tracking</h2>
            <form
                onSubmit={(e) => handleAddExercise(e)}
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
                        value={exercise.name}
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
                    Duration{"  "}
                    <input
                        required
                        name="duration"
                        type="number"
                        value={exercise.duration}
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
                    <span>Exercise Type</span>
                    {"  "}
                    <select
                        name="calories"
                        onChange={(e) =>
                            dispatch({
                                type: "HANDLE_INPUT",
                                field: e.target.name,
                                payload: calories[e.target.value],
                            })
                        }
                    >
                        <option>Select</option>
                        <option value="cycling">Cycling</option>
                        <option value="walking">Walking</option>
                        <option value="pullUps">Pull Ups</option>
                        <option value="streches">Streches</option>
                    </select>
                </div>
                <div>Calories: {exercise.calories}</div>

                <button type="submit">Add Exercise</button>
            </form>
            <ExercisesList />
        </div>
    );
}
