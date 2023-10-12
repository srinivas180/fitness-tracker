export const saleFormInitialState = {
    name: "",
    quantity: 0,
    price: 0,
    recordedDate: "",
};

export function saleFormReducer(state = saleFormInitialState, action) {
    switch (action.type) {
        case "HANDLE_INPUT":
            return {
                ...state,
                [action.field]: action.payload,
            };
        case "RECORD_DATE":
            return {
                ...state,
                recordedDate: action.payload,
            };
        default:
            return state;
    }
}
