export const addItemToInventory = (item) => {
    return async function (dispatch) {
        try {
            const response = await fetch(
                "https://assignment-18-inventory-management-backend.srinivas365.repl.co/items",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify(item),
                }
            );
            const result = await response.json();
            dispatch({ type: "items/add", payload: result.addedItem });
        } catch (error) {
            console.log("Error adding item to inventory.");
        }
    };
};

export const fetchItemsFromInventory = () => {
    return async function (dispatch) {
        try {
            dispatch({ type: "loading" });

            const response = await fetch(
                "https://assignment-18-inventory-management-backend.srinivas365.repl.co/items"
            );

            const result = await response.json();
            dispatch({ type: "items/fetch", payload: result.items });
        } catch (error) {
            console.log("Error fetching inventory items.");
        }
    };
};

export const editItem = (itemId, updatedItemData) => {
    return async function (dispatch) {
        try {
            const response = await fetch(
                `https://assignment-18-inventory-management-backend.srinivas365.repl.co/items/${itemId}`,
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify(updatedItemData),
                }
            );
            const result = await response.json();
            dispatch({
                type: "items/edit",
                payload: {
                    updatedItem: result.updatedItem,
                    itemId,
                },
            });
        } catch (error) {
            console.log("Error updating item.");
        }
    };
};

export const deleteItem = (itemId) => {
    return async function (dispatch) {
        try {
            const response = await fetch(
                `https://assignment-18-inventory-management-backend.srinivas365.repl.co/items/${itemId}`,
                {
                    method: "DELETE",
                }
            );
            const result = await response.json();
            dispatch({ type: "items/delete", payload: result.deletedItem._id });
        } catch (error) {
            console.log("Error deleting item.");
        }
    };
};
export const addSaleTransaction = (saleTransactionData) => {
    return async function (dispatch) {
        try {
            const response = await fetch(
                "https://assignment-18-inventory-management-backend.srinivas365.repl.co/sales",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        "Allow-Access-Control-Origin": "*",
                    },
                    body: JSON.stringify(saleTransactionData),
                }
            );
            const data = await response.json();
            dispatch({ type: "sales/add", payload: data.addedSale });
        } catch (error) {
            console.log("Error adding sale transaction.");
        }
    };
};

export const fetchSaleTransactions = () => {
    return async function (dispatch) {
        try {
            dispatch({ type: "loading" });

            const response = await fetch(
                "https://assignment-18-inventory-management-backend.srinivas365.repl.co/sales"
            );

            const data = await response.json();
            dispatch({ type: "sales/fetch", payload: data.sales });
        } catch (error) {
            console.log("Error fetching sale transactions data.");
        }
    };
};
