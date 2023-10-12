import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getExercises, getFoods, getGoals } from "../../actions";

export function Dashboard() {
    const trackerDispatch = useDispatch();
    const [exercises, food, goals] = useSelector((state) => [
        state.exercises,
        state.food,
        state.goals,
    ]);

    const caloriesBurnt = exercises.reduce(
        (totalCalories, currentExercise) =>
            totalCalories + currentExercise.calories,
        0
    );

    const caloriesConsumed = food.reduce(
        (totalCalories, currentFood) => totalCalories + currentFood.calories,
        0
    );

    const caloriesGoal = goals.reduce(
        (totalCalories, currentGoal) =>
            totalCalories + currentGoal.targetCalories,
        0
    );

    useEffect(() => {
        trackerDispatch(getExercises());
        trackerDispatch(getFoods());
        trackerDispatch(getGoals());
    }, []);

    return (
        <>
            <h2>Dashboard</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Total Calories Burned: {caloriesBurnt}</span>
                <span>Total Calories Consumed: {caloriesConsumed}</span>
                <span>Total Calories Goal: {caloriesGoal}</span>
                <span>
                    Remaining Calories to Goal: {caloriesGoal - caloriesBurnt}
                </span>
            </div>
        </>
    );
}
