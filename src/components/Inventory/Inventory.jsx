import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    inventoryFormReducer,
    inventoryFormInitialState,
} from "../../reducers/inventoryFormReducer";

import {
    addItemToInventory,
    deleteItem,
    editItem,
    fetchItemsFromInventory,
} from "../../actions";

function UpdateItemModal({ item, dispatch, setShowUpdateItemModal }) {
    const { name, quantity, price, category } = item;
    const [formState, setFormState] = useState({
        name,
        quantity,
        price,
        category,
    });

    function handleInputChange(e) {
        setFormState((formState) => ({
            ...formState,
            [e.target.name]: e.target.value,
        }));
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        dispatch(editItem(item._id, formState));
        setShowUpdateItemModal(false);
    }

    return (
        <div
            style={{
                position: "fixed",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
            }}
        >
            <form
                onSubmit={handleFormSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "24px",

                    backgroundColor: "#fefefe",
                    margin: "15% auto",
                    padding: "20px",
                    border: "1px solid #888",
                    width: "80%",
                }}
            >
                <label>
                    Name{"  "}
                    <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Quantity{"  "}
                    <input
                        type="number"
                        name="quantity"
                        required
                        value={formState.quantity}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Price{"  "}
                    <input
                        type="number"
                        name="price"
                        required
                        value={formState.price}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Category{"  "}
                    <input
                        type="text"
                        name="category"
                        required
                        value={formState.category}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Update Item</button>
                <button
                    type="button"
                    onClick={() => setShowUpdateItemModal(false)}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}

function InventoryItems() {
    const items = useSelector((state) => state.items);
    const isLoading = useSelector((state) => state.loading);
    const [showUpdateItemModal, setShowUpdateItemModal] = useState(false);
    const [updateItem, setUpdateItem] = useState(null);
    const dispatch = useDispatch();

    function handleItemDelete(itemId) {
        dispatch(deleteItem(itemId));
    }

    function handleUpdateItem(item) {
        setUpdateItem(item);
        setShowUpdateItemModal(true);
    }

    useEffect(() => {
        dispatch(fetchItemsFromInventory());
    }, []);

    return (
        <div>
            <h2>Inventory Items</h2>
            <ul>
                {isLoading
                    ? "Loading"
                    : items.map((item) => (
                          <div
                              key={item._id}
                              style={{ display: "flex", gap: "16px" }}
                          >
                              <li>
                                  <span>
                                      Name: {item.name}
                                      {"  "}
                                  </span>
                                  <span>Price: {item.price}</span>
                                  <span>Quantity: {item.quantity}</span>
                                  <span>Category: {item.category}</span>
                              </li>
                              <div>
                                  <button
                                      onClick={() => handleUpdateItem(item)}
                                  >
                                      Edit
                                  </button>
                                  <button
                                      onClick={() => handleItemDelete(item._id)}
                                  >
                                      Delete
                                  </button>
                              </div>
                          </div>
                      ))}
            </ul>
            {showUpdateItemModal && (
                <UpdateItemModal
                    item={updateItem}
                    dispatch={dispatch}
                    setShowUpdateItemModal={setShowUpdateItemModal}
                />
            )}
        </div>
    );
}

export function Inventory() {
    const [inventoryFormState, inventoryFormDispatch] = useReducer(
        inventoryFormReducer,
        inventoryFormInitialState
    );

    const dispatch = useDispatch();

    function handleInputChange(e) {
        inventoryFormDispatch({
            type: "HANDLE_INPUT",
            field: e.target.name,
            payload: e.target.value,
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        dispatch(addItemToInventory(inventoryFormState));
    }

    return (
        <>
            <form
                onSubmit={handleFormSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "24px",
                }}
            >
                <label>
                    Name{"  "}
                    <input
                        type="text"
                        name="name"
                        required
                        value={inventoryFormState.name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Quantity{"  "}
                    <input
                        type="number"
                        name="quantity"
                        required
                        value={inventoryFormState.quantity}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Price{"  "}
                    <input
                        type="number"
                        name="price"
                        required
                        value={inventoryFormState.price}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Category{"  "}
                    <input
                        type="text"
                        name="category"
                        required
                        value={inventoryFormState.category}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Add Item</button>
            </form>
            <InventoryItems />
        </>
    );
}
