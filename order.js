const order = {
    orderId: '123',
    items: [
        { name: 'Unicorn Food', price: 123, quantity: 2 },
        { name: 'Unicorn Fur', price: 342, quantity: 1 },
        { name: 'Unicorn Ball', price: 12, quantity: 36 }
    ]
};



const returnTotalOrder = () => {
    const total = order.items.reduce((value, current) => {
        return value + (current.price * current.quantity);
    }, 0);

    return total;
}
