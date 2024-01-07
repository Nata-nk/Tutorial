function calculateTotalPrice(order) {
  let totalPrice = 0; 
  for (const total of order) {
     totalPrice += total;
}
   return totalPrice;
}


console.log(calculateTotalPrice([12, 85, 37, 4]))
console.log(calculateTotalPrice([164, 48, 291]))
console.log(calculateTotalPrice([]))
console.log(calculateTotalPrice([412, 371, 94, 63, 176]))
