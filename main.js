"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = require("prompt-sync");
const prompt = (0, prompt_sync_1.default)();
let items = [
    { name: "Apple", price: 200, stock: 10 },
    { name: "Chocolate", price: 450, stock: 5 },
    { name: "Banana", price: 300, stock: 15 },
    { name: "Bread", price: 220, stock: 4 }
];
let totalCost = 0;
console.log("Items available:");
items.forEach(item => {
    console.log(`${item.name}: Price ${item.price}, Stock ${item.stock}`);
});
const itemName = prompt("What do you want to buy? ");
const quantityStr = prompt("How many do you want to buy? ");
const quantity = parseInt(quantityStr);
const item = items.find(i => i.name.toLowerCase() === itemName.toLowerCase());
if (!item) {
    console.log("Item not available.");
}
else if (item.stock < quantity) {
    console.log("Not enough stock available.");
}
else {
    totalCost = item.price * quantity;
    console.log(`Total cost: ${totalCost}`);
    const paymentStr = prompt("Proceed to pay: ");
    const payment = parseInt(paymentStr);
    if (payment < totalCost) {
        console.log("Insufficient payment.");
    }
    else {
        const change = payment - totalCost;
        console.log(`Change: ${change}`);
        console.log("Purchase successful!");
        item.stock -= quantity;
        console.log("Updated items:");
        items.forEach(i => {
            console.log(`${i.name}: Price ${i.price}, Stock ${i.stock}`);
        });
    }
}
