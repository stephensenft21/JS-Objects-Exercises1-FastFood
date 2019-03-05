const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function(meal){
    this.order.push(meal)

    },

    order:[],
    getOrder: function() {
        return this.order
    }

}
const chickenComboMeal = {
    sandwhichType: "Chicken Sandwhich",  
    fries: true,
    drink: "small"

}
const porkComboMeal = {
    sandwhichType: "Pork Sandwhich",  
    fries: true,
    drink: "small"

}

const burgerComboMeal = {
    sandwhichType: "Burger Sandwhich",  
    fries: false,
    drink: "large"

}
// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(porkComboMeal)
restaurant.placeOrder(burgerComboMeal)
console.table(restaurant.getOrder())

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()