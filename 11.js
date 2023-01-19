let drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10},
    {name: "coffee", price: 5},
    {name: "tea", price: 5},
    {name: "horchata", price: 75},
    {name: "milk", price: 25},
  ];
  
  console.log(drinks.sort((a, b) => (a.name > b.name) ? 1 : -1));