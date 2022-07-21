const mobiles = [
    { model: 'Narzo 50', ram: '4gb', rom: '64gb', price: 16000 },
    { model: 'Redmi Note 11', ram: '4gb', rom: '64gb', price: 16600 },
    { model: 'Narzo 50i', ram: '4gb', rom: '64gb', price: 12000 },
    { model: 'Z55', ram: '4gb', rom: '64gb', price: 11000 }
]
let cheapMobile = mobiles[0];
for (const element of mobiles) {
    if (element.price < cheapMobile.price) {
        cheapMobile = element;
    }
}
console.log(cheapMobile)