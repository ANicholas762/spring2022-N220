//types of things
//hamburgers, fries, hotdogs
//different cost for each 

let mealCost = estimateMealCost("fries", 10)
document.write(mealCost);

/* This function takes in: the kind of meal and how many were ordered. It returns the cost of that meal(including tax?)*/

function estimateMealCost(type, count) {
   
    //assume the cost of the transaction starts at zero
    let cost = 0;
    // set a base price for meals at zero
    let basePrice = 0;

    //change base price based on order kind
    if(type == "fries") {
        baseprice = 3.50;
    }

    if(type == "burger") {
        basePrice = 6.25;
    }

    //calculate total cost 
    cost = basePrice * count;

    //tax?
    let tax = cost * .09;

    //add tax on
    cost = cost + tax;

    //final total 
    return cost;
 }