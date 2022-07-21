const mobiles = [
    { model: 'Narzo 50', ram: '4gb', rom: '64gb', price: 16000, quantity: 1 },
    { model: 'Redmi Note 11', ram: '4gb', rom: '64gb', price: 16600, quantity: 1 },
    { model: 'Narzo 50i', ram: '4gb', rom: '64gb', price: 12000, quantity: 2 },
    { model: 'Z55', ram: '4gb', rom: '64gb', price: 11000, quantity: 2 }
]
let totalPrice = 0;
for (const element of mobiles) {
    const productTotal = element.price * element.quantity;
    totalPrice = totalPrice + productTotal;
}
console.log(totalPrice)