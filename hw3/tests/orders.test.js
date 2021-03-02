// Adrian Muth

test('tests that the JSON object is created', () => {
    var orderData = {"data": [{"topping":"cherry", "quantity":"2"},
        {"topping":"plain", "quantity":"6"},
        {"topping":"chocolate", "quantity":"3"}]}; // recreating JSON object
    // strings to compare to
    String firstTopping = "cherry";
    String secondQuantity = "6";

    // check that strings equal json values
    assertEquals(orderData.topping[0], firstTopping);
    assertEquals(orderData.quantity[1], secondQuantity);
});