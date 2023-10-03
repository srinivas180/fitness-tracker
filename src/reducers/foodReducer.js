export const foodInitialState = {
    name: "",
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
};

export function foodReducer(state = foodInitialState, action) {
    switch (action.type) {
        case "HANDLE_INPUT":
            return { ...state, [action.field]: action.payload };
        default:
            return state;
    }
}
