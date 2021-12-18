/*
We want you to write a function, organizeItems, that organizes items by category. The argument to the function is an array of item objects. Each item object has 3 properties, category (string), itemName (string), and onSale (Boolean).
Here's an example:

var itemData = [
  { category: 'fruit',  itemName: 'apple', onSale: false },
  { category: 'canned', itemName: 'beans', onSale: false },
  { category: 'canned', itemName: 'corn',  onSale: true  },
  { category: 'frozen', itemName: 'pizza', onSale: false },
  { category: 'fruit',  itemName: 'melon', onSale: true  },
  { category: 'canned', itemName: 'soup',  onSale: false },
];
The return value should be an object with category properties. Each property value is an array of items that belong to that category.
Here's an example return object based on our example input:

{
  fruit:  ['apple', 'melon($)'],
  canned: ['beans', 'corn($)', 'soup'],
  frozen: ['pizza']
};
Note that items having onSale set to true should have '($)' appended to their item name.

Please complete the function organizeItems and validate it is working by running the tests.Your function should work for any similarly formatted input data, not just the example data we've provided.

If you find yourself struggling with this problem for more than 20 minutes or so, you might need to study more before taking the Technical Admissions Assessment (TAA).
*/
function organizeItems(items) {
    var output = {}; // create an empty object
    for(let i = 0;i<items.length;i++){ //iterate over the items list
      var category = items[i].category; //get the category and name
      var name = items[i].itemName; 
      if(category in output){ //if the category is already in output
      if(items[i].onSale){ //if the item is on sale
      name += '($)'; //add the dollar sign
      }
        output[category].push(name); //add the new value name to the category
      }
      else{
      if(items[i].onSale){
      name += '($)';
      }
        output[category] = [];
        output[category].push(name);
      }
    }
    return output;
  }
  //input data
      var itemArray =[
      {category:'herbivore', itemName: 'rabbits', onSale:false},
      {category:'carnivore', itemName: 'bears', onSale:false},
      {category:'carnivore', itemName: 'cougar', onSale:true},
      {category:'omnivore', itemName: 'monkey', onSale:false},
      {category:'herbivore', itemName: 'cows', onSale:true},
      {category:'carnivore', itemName: 'wolf', onSale:false},
      ];
      //call the function
      console.log(organizeItems(itemArray));