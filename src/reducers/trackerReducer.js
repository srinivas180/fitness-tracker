const initialState = {
    exercises: [],
    food: [],
    goals: [],
    loading: false,
    error: null,
};

export function trackerReducer(state = initialState, action) {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true,
            };

        case "GET_EXERCISES":
            return {
                ...state,
                exercises: action.payload,
                loading: false,
                error: null,
            };

        case "ADD_EXERCISE":
            return {
                ...state,
                exercises: [...state.exercises, action.payload],
                loading: false,
                error: null,
            };

        case "REMOVE_EXERCISE":
            return {
                ...state,
                exercises: state.exercises.filter(
                    (exercise) => exercise._id !== action.payload
                ),
                loading: false,
                error: null,
            };

        case "GET_FOODS":
            return {
                ...state,
                food: action.payload,
                loading: false,
                error: null,
            };

        case "ADD_FOOD":
            return {
                ...state,
                food: [...state.food, action.payload],
                loading: false,
                error: null,
            };

        case "REMOVE_FOOD":
            return {
                ...state,
                food: state.food.filter(
                    (foodItem) => foodItem._id !== action.payload
                ),
                loading: false,
                error: null,
            };

        case "GET_GOALS":
            return {
                ...state,
                goals: action.payload,
                loading: false,
                error: null,
            };

        case "ADD_GOAL":
            return {
                ...state,
                goals: [...state.goals, action.payload],
                loading: false,
                error: null,
            };

        case "REMOVE_GOAL":
            return {
                ...state,
                goals: state.goals.filter(
                    (goal) => goal._id !== action.payload
                ),
                loading: false,
                error: null,
            };
        default:
            return state;
    }
}
