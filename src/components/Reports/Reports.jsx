import { useSelector } from "react-redux";

export function Reports() {
    const items = useSelector((state) => state.items);
    const sales = useSelector((state) => state.sales);

    return (
        <div>
            <h2>Inventory Report</h2>
            <ul>
                {items.map((item) => (
                    <li>
                        Item Name: {item.name} | Quantity: {item.quantity} |
                        Price: {item.price} | Category: {item.category}
                    </li>
                ))}
            </ul>

            <h2>Sale Report</h2>
            <ul>
                {sales.map((sale) => (
                    <li>
                        Item Name: {sale.name} | Quantity: {sale.quantity} |
                        Price: {sale.price} | Amount:{" "}
                        {sale.price * sale.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}
