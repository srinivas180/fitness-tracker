export const inventoryFormInitialState = {
    name: "",
    quantity: 0,
    price: 0,
    category: "",
};

export function inventoryFormReducer(
    state = inventoryFormInitialState,
    action
) {
    switch (action.type) {
        case "HANDLE_INPUT":
            return {
                ...state,
                [action.field]: action.payload,
            };
        default:
            return state;
    }
}
