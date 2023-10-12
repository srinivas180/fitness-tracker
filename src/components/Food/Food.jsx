import { useReducer, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { foodReducer, foodInitialState } from "../../reducers/foodReducer";
import { addFood, removeFood, getFoods } from "../../actions";

export function FoodItems() {
    const food = useSelector((state) => state.food);
    const loading = useSelector((state) => state.loading);
    const trackerDispatch = useDispatch();

    function handleRemoveFood(food) {
        trackerDispatch(removeFood(food._id));
    }

    useEffect(() => {
        trackerDispatch(getFoods());
    }, []);

    return (
        <div>
            <h2>Food</h2>
            <ul>
                {loading
                    ? "Loading..."
                    : food.map((foodItem) => (
                          <div style={{ display: "flex" }} key={foodItem._id}>
                              <li>
                                  Name: {foodItem.name} Calories:{" "}
                                  {foodItem.calories} Protein:{" "}
                                  {foodItem.protein} Carbohydrates:{" "}
                                  {foodItem.carbohydrates} Fat: {foodItem.fat}
                              </li>
                              <button
                                  onClick={() => {
                                      handleRemoveFood(foodItem);
                                  }}
                              >
                                  Remove Food
                              </button>
                          </div>
                      ))}
            </ul>
        </div>
    );
}

export function Food() {
    const [food, dispatch] = useReducer(foodReducer, foodInitialState);
    const trackerDispatch = useDispatch();

    function handleAddFood(e) {
        e.preventDefault();
        trackerDispatch(addFood(food));
    }

    return (
        <div>
            <h2>Food Tracking</h2>
            <form
                onSubmit={(e) => handleAddFood(e)}
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
                        value={food.name}
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
                    Calories{"  "}
                    <input
                        required
                        name="calories"
                        type="number"
                        value={food.calories}
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
                    Protein{"  "}
                    <input
                        required
                        name="protein"
                        type="number"
                        value={food.protein}
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
                    Carbohydrates{"  "}
                    <input
                        required
                        name="carbohydrates"
                        type="number"
                        value={food.carbohydrates}
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
                    Fat{"  "}
                    <input
                        required
                        name="fat"
                        type="number"
                        value={food.fat}
                        onChange={(e) =>
                            dispatch({
                                type: "HANDLE_INPUT",
                                field: e.target.name,
                                payload: e.target.value,
                            })
                        }
                    />
                </label>
                <button type="submit">Add Food</button>
            </form>
            <FoodItems />
        </div>
    );
}
