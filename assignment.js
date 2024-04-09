const items = [
    { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 100 },
    { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
    { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
    { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 100 },
    { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
    { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
    { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
    { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 100 },
  ];
  
  const cart = [];
  
  
   items.forEach ((n) =>  {
    //TODO: use the .forEach() method to log out the name of each item
    console.log(n)
  })
 
  /**
   * @param {number} id
   * @returns {{id: number, name: string, price: number, category: string, inventory: number}} item
   */

  const found = items.find((id) => {
    return id=1
  })
  console.log(found)


    // TODO: Use the .find() method to return the item who's id matches the passed in id
  
  
  /**
   * @returns {items[]} Returns a new array with capitalized names
   */

    // TODO:  Use the .map() and possibly .slice() methods and return a new items array with the item names capitalized
    // DO NOT MUTATE THE ORIGINAL ARRAY IN YOU LOGIC

function capitalize(){
  return items.map(item => ({
    ...item, name: item.name.toUpperCase()
  }))
}
  
 capitalize()
  /**
   * @returns {number} the sum of all inventory items
   */
  
  function calculateTotalInventory() {
    // TODO Use the .reduce() method to return the total number of items in inventory
  }
  
  /**
   * @returns {number} the total price of all inventory items combined
   */ 


    const sum = Object.values(items, "price")((accumulator , currentValue) => {
      return accumulator + currentValue;
    }, 0 )
    console.log(sum)
    // TODO Use the .reduce() method to return the total price of all the items in inventory
  
  
  /**
   * @param {string} name
   * @returns {number} the price of the item passed in
   */
  function getItemPriceByName(name) {
    // TODO: Use your knowledge of objects and arrays to get the price of the item passed in
  }
  
  
