export function getExercises() {
    return async function (dispatch) {
        try {
            dispatch({ type: "LOADING" });
            const response = await fetch(
                "https://assignment-17-fitness-tracker-backend.srinivas365.repl.co/exercises"
            );

            const data = await response.json();
            dispatch({ type: "GET_EXERCISES", payload: data.exercises });
        } catch (error) {
            console.log("Error retrieving exercises.");
        }
    };
}

export function addExercise(exercise) {
    return async function (dispatch) {
        try {
            const response = await fetch(
                "https://assignment-17-fitness-tracker-backend.srinivas365.repl.co/exercises",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify(exercise),
                }
            );
            const data = await response.json();
            dispatch({ type: "ADD_EXERCISE", payload: data.addedExercise });
        } catch (error) {
            console.log("error adding exercise.");
        }
    };
}

export function removeExercise(exerciseId) {
    return async function (dispatch) {
        try {
            const response = await fetch(
                `https://assignment-17-fitness-tracker-backend.srinivas365.repl.co/exercises/${exerciseId}`,
                {
                    method: "DELETE",
                }
            );
            const status = response.status;
            if (status === 204) {
                dispatch({
                    type: "REMOVE_EXERCISE",
                    payload: exerciseId,
                });
            }
        } catch (error) {
            console.log("error removing exercise.");
        }
    };
}

export function getFoods() {
    return async function (dispatch) {
        try {
            dispatch({ type: "LOADING" });
            const response = await fetch(
                "https://assignment-17-fitness-tracker-backend.srinivas365.repl.co/food"
            );

            const data = await response.json();
            dispatch({ type: "GET_FOODS", payload: data.foods });
        } catch (error) {
            console.log("Error retrieving food items.");
        }
    };
}

export function addFood(food) {
    return async function (dispatch) {
        try {
            const response = await fetch(
                "https://assignment-17-fitness-tracker-backend.srinivas365.repl.co/food",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify(food),
                }
            );

            const data = await response.json();
            dispatch({ type: "ADD_FOOD", payload: data.addedFood });
        } catch (error) {
            console.log("Error adding food.");
        }
    };
}

export function removeFood(foodId) {
    return async function (dispatch) {
        try {
            const response = await fetch(
                `https://assignment-17-fitness-tracker-backend.srinivas365.repl.co/food/${foodId}`,
                {
                    method: "DELETE",
                }
            );
            const status = response.status;
            if (status === 204) {
                dispatch({
                    type: "REMOVE_FOOD",
                    payload: foodId,
                });
            }
        } catch (error) {
            console.log("error removing food.");
        }
    };
}

export function getGoals() {
    return async function (dispatch) {
        try {
            dispatch({ type: "LOADING" });
            const response = await fetch(
                "https://assignment-17-fitness-tracker-backend.srinivas365.repl.co/goals"
            );

            const data = await response.json();
            dispatch({ type: "GET_GOALS", payload: data.goals });
        } catch (error) {
            console.log("Error retrieving goals.");
        }
    };
}

export function addGoal(goal) {
    return async function (dispatch) {
        try {
            const response = await fetch(
                "https://assignment-17-fitness-tracker-backend.srinivas365.repl.co/goals",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify(goal),
                }
            );

            const data = await response.json();
            dispatch({ type: "ADD_GOAL", payload: data.addedGoal });
        } catch (error) {
            console.log("Error adding goal.");
        }
    };
}

export function removeGoal(goalId) {
    return async function (dispatch) {
        try {
            const response = await fetch(
                `https://assignment-17-fitness-tracker-backend.srinivas365.repl.co/goals/${goalId}`,
                {
                    method: "DELETE",
                }
            );
            const status = response.status;
            if (status === 204) {
                dispatch({
                    type: "REMOVE_GOAL",
                    payload: goalId,
                });
            }
        } catch (error) {
            console.log("error removing goal.");
        }
    };
}
