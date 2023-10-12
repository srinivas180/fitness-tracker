import { useReducer, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    saleFormInitialState,
    saleFormReducer,
} from "../../reducers/saleFormReducer";

import { addSaleTransaction, fetchSaleTransactions } from "../../actions";

function SaleTransactions() {
    const sales = useSelector((state) => state.sales);
    const isLoading = useSelector((state) => state.loading);
    const [filters, setFilters] = useState({
        fromDate: "",
        toDate: "",
        showAllSales: true,
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSaleTransactions());
    }, []);

    const filteredSales = filters.showAllSales
        ? sales
        : sales.filter((sale) => {
              const saleRecordedDate = new Date(sale.recordedDate);
              return (
                  saleRecordedDate >= new Date(filters.fromDate) &&
                  saleRecordedDate <= new Date(filters.toDate)
              );
          });
    return (
        <div>
            <h2>Transactions</h2>
            <div>
                <h3>Filters</h3>
                <div>
                    <span>
                        From Date:
                        <input
                            type="date"
                            name="from-date"
                            required
                            value={filters.fromDate}
                            onChange={(e) =>
                                setFilters((filters) => ({
                                    ...filters,
                                    fromDate: e.target.value,
                                }))
                            }
                        />
                    </span>
                    <span>
                        To Date:
                        <input
                            type="date"
                            name="to-date"
                            required
                            value={filters.toDate}
                            onChange={(e) =>
                                setFilters((filters) => ({
                                    ...filters,
                                    toDate: e.target.value,
                                }))
                            }
                        />
                    </span>
                    <button
                        onClick={() =>
                            setFilters((filters) => ({
                                ...filters,
                                showAllSales: false,
                            }))
                        }
                    >
                        Filter Sales
                    </button>
                </div>
                <button
                    onClick={() =>
                        setFilters((filters) => ({
                            ...filters,
                            showAllSales: true,
                        }))
                    }
                >
                    Get All Sales
                </button>
            </div>
            <ul>
                {isLoading
                    ? "Loading"
                    : filteredSales.map((sale) => (
                          <li key={sale._id}>
                              <span>
                                  Item Name: {sale.name}
                                  {"  "}
                              </span>
                              <span>
                                  Quantity: {sale.quantity} {"  "}
                              </span>
                              <span>
                                  Price: {sale.price} {"  "}
                              </span>
                              <span>
                                  Total Amount: {sale.quantity * sale.price}{" "}
                                  {"  "}
                              </span>
                              <span>Recorded Date: {sale.recordedDate}</span>
                          </li>
                      ))}
            </ul>
        </div>
    );
}

export function Sales() {
    const [saleFormState, saleFormDispatch] = useReducer(
        saleFormReducer,
        saleFormInitialState
    );

    const dispatch = useDispatch();

    function handleInputChange(e) {
        saleFormDispatch({
            type: "HANDLE_INPUT",
            field: e.target.name,
            payload: e.target.value,
        });
    }

    function handleSaleFormSubmit(e) {
        e.preventDefault();

        saleFormDispatch({
            type: "RECORD_DATE",
            payload: new Date(),
        });

        dispatch(addSaleTransaction(saleFormState));
    }

    return (
        <>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    alignItems: "flex-start",
                }}
                onSubmit={handleSaleFormSubmit}
            >
                <label>
                    Item Name: {"  "}
                    <input
                        type="text"
                        name="name"
                        required
                        value={saleFormState.name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Quantity: {"  "}
                    <input
                        type="number"
                        name="quantity"
                        required
                        value={saleFormState.quantity}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Price: {"  "}
                    <input
                        type="number"
                        name="price"
                        required
                        value={saleFormState.price}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Record Transaction</button>
            </form>
            <SaleTransactions />
        </>
    );
}
