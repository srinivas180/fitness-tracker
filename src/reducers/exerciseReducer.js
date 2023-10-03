export const exerciseInitialState = {
    name: "",
    duration: "",
    calories: 0,
};

export function exerciseReducer(state = exerciseInitialState, action) {
    switch (action.type) {
        case "HANDLE_INPUT":
            return { ...state, [action.field]: action.payload };
        default:
            return state;
    }
}
