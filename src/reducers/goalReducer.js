export const goalInitialState = {
    name: "",
    description: "",
    targetDate: "",
    targetCalories: 0,
    status: "",
};

export function goalReducer(state = goalInitialState, action) {
    switch (action.type) {
        case "HANDLE_INPUT":
            return { ...state, [action.field]: action.payload };
        default:
            return state;
    }
}
