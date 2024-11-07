let car1 = new Vehicle("Honda", "White", "2013", "UK");
let car2 = new Vehicle("Toyota", "black", "2024", "AS");
console.log('car1: ',car1);
console.log('car2: ',car2);

function Vehicle(model, color, year, country){
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country
}

/*
 The function declared after the " new Vehicle() " is created so the function is hoisted while execution time.
 so we can call the fucntion anywhere. 
*/