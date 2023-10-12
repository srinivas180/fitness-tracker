export const inventoryInitialState = {
    items: [],
    sales: [],
    loading: false,
    error: null,
};

export function inventoryReducer(state = inventoryInitialState, action) {
    switch (action.type) {
        case "loading":
            return {
                ...state,
                loading: true,
            };
        case "items/fetch":
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: null,
            };
        case "items/add":
            return {
                ...state,
                items: [...state.items, action.payload],
                loading: false,
                error: null,
            };

        case "items/edit":
            return {
                ...state,
                items: state.items.map((item) =>
                    item._id === action.payload.itemId
                        ? action.payload.updatedItem
                        : item
                ),
                loading: false,
                error: null,
            };
        case "items/delete":
            return {
                ...state,
                items: state.items.filter(
                    (item) => item._id !== action.payload
                ),
                loading: false,
                error: null,
            };
        case "sales/add":
            return {
                ...state,
                sales: [...state.sales, action.payload],
                loading: false,
                error: null,
            };
        case "sales/fetch":
            return {
                ...state,
                sales: action.payload,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
}
