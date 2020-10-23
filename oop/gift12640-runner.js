"use strict";

const utilities = require("./utilities")

class Sweets {
    constructor(name, manufacturer, weight, caloriesPer100G) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.weight = weight;
        this.caloriesPer100G = caloriesPer100G;
    }
}


class Lollipop extends Sweets {
    constructor(name, manufacturer, weightGrams, caloriesPer100G, taste) {
        super(name, manufacturer, weightGrams, caloriesPer100G);
        this.taste = taste;
    }
}


class Candy extends Sweets {
    constructor(name, manufacturer, weightGrams, caloriesPer100G, hasFilling) {
        super(name, manufacturer, weightGrams, caloriesPer100G);
        this.hasFilling = hasFilling;
    }
}


class GiftBox {
    constructor(title) {
        this.title = title;
        this.box = [];
    }

    addSweetToGiftBox(sweet) {
        this.box.push(sweet);
    }


    printGiftBoxContent() {
        utilities.printSweetsOf(this.box);
    }


    printTotalWeightOfGift() {
        let totalWeightGrams = 0;

        this.box.forEach(sweet => {
            totalWeightGrams += sweet.weight;
        });

        console.log(`\nTotal weight of sweets in "${this.title}" box: ${totalWeightGrams} g.`);
    }


    sortSweetsByName() {
        this.box.sort((sweetOne, sweetTwo) => {
            if (sweetOne.name > sweetTwo.name) {
                return 1;
            }
            if (sweetOne.name < sweetTwo.name) {
                return -1;
            }
            return 0;
        });
    }


    sortSweetsByManufacturer() {
        this.box.sort((sweetOne, sweetTwo) => {
            if (sweetOne.manufacturer > sweetTwo.manufacturer) {
                return 1;
            }
            if (sweetOne.manufacturer < sweetTwo.manufacturer) {
                return -1;
            }
            return 0;
        });
    }

    
    sortSweetsByWeight() {
        this.box.sort((sweetOne, sweetTwo) => {
            return sweetOne.weight - sweetTwo.weight;
        });
    }


    sortSweetsByCalorieContent() {
        this.box.sort((sweetOne, sweetTwo) => {
            return sweetOne.caloriesPer100G - sweetTwo.caloriesPer100G;
        });
    }


    printSweetsFilteredByManufacturer(manufacturer) {
        let sweetsOfChosenManufacturer = [];

        this.box.filter(sweet => {
            if (String(sweet.manufacturer).includes(manufacturer)) {
                sweetsOfChosenManufacturer.push(sweet);
            }
        });
        utilities.printSweetsOf(sweetsOfChosenManufacturer);
    }


    printSweetsFilteredByWeightRange(lowerBoundOfWeight, upperBoundOfWeight) {
        let sweetsOfChosenWeightRange = [];

        if (upperBoundOfWeight < lowerBoundOfWeight) {
            let permutationValue = lowerBoundOfWeight;
            lowerBoundOfWeight = upperBoundOfWeight;
            upperBoundOfWeight = permutationValue;
        }

        this.box.filter(sweet => {
            if (sweet.weight >= lowerBoundOfWeight && sweet.weight <= upperBoundOfWeight) {
                sweetsOfChosenWeightRange.push(sweet);
            }
        });
        utilities.printSweetsOf(sweetsOfChosenWeightRange);
    }
}


let sweetGift = new GiftBox("Happy New Year!");
const sweets = [
    new Lollipop("Chupa Chups", "Perfetti Van Melle Group B.V.", 123, 380, "yogurt"),
    new Lollipop("Sweetlee", "SweetShop", 100, 377, "grapefruit"), 
    new Candy("Lindor", "Lindt & Sprüngli AG", 250, 625, true), 
    new Candy("Bird's milk", "Kommunarka", 200, 450, false),
    new Candy("Truffles", "Kommunarka", 300, 569, false),
    new Candy("Tornado", "Kommunarka", 200, 441, false),
    new Candy("Duet", "Spartak", 230, 409, true),
    new Candy("Svityaz", "Spartak", 270, 561, false),
]

sweets.forEach(sweet => (sweetGift.addSweetToGiftBox(sweet)));

// common info:
sweetGift.printTotalWeightOfGift();
console.log(`The "${sweetGift.title}" gift box includes sweets below:\n`);
sweetGift.printGiftBoxContent(); // чтение из файла


// sweets can be sorted by various criteria:
sweetGift.sortSweetsByName();
console.log("\n- SWEETS ARE SORTED BY NAME:");
sweetGift.printGiftBoxContent();

sweetGift.sortSweetsByManufacturer();
console.log("\n- SWEETS ARE SORTED BY MANUFACTURER:");
sweetGift.printGiftBoxContent();

sweetGift.sortSweetsByWeight();
console.log("\n- SWEETS ARE SORTED BY WEIGHT:");
sweetGift.printGiftBoxContent();

sweetGift.sortSweetsByCalorieContent();
console.log("\n- SWEETS ARE SORTED BY CALORIE CONTENT PER 100 G:");
sweetGift.printGiftBoxContent();


// Here are some filters:
console.log("\n* SWEETS ARE FILTERED BY CHOSEN MANUFACTURER:")
sweetGift.printSweetsFilteredByManufacturer("Kommunarka");

console.log("\n* SWEETS ARE FILTERED BY CHOSEN WEIGHT RANGE:")
sweetGift.printSweetsFilteredByWeightRange(230, 100);