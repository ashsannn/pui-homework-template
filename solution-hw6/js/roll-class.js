

/*-------------------------------------ROLL CLASS--------------------------------*/

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

        this.element = null;
    }

    getGlazingPrice() {
        for (let i = 0; i < allGlazings.length; i++) {
            if (allGlazings[i].glazing === this.glazing) {
                return parseFloat(allGlazings[i].glazingPrice);
            }
        }
        return 0;
    }

    getPackPriceAdaptation() {
        for (let i = 0; i < packSizes.length; i++) {
            if (packSizes[i].packSize === this.size) {
                return parseFloat(packSizes[i].priceAdaptation);
            }
        }
        return 1;
    }

    calculateRollTotal() {
        const glazingPrice = this.getGlazingPrice();
        const packPriceAdaptation = this.getPackPriceAdaptation();
        const totalPrice = (this.basePrice + glazingPrice) * packPriceAdaptation;

        console.log("Roll class debugging vvv");
        console.log(`Calculating total for ~${this.type}~ roll:`);
        console.log(`Base Price: $${this.basePrice}`);
        console.log(`Glazing Price (${this.glazing}): $${glazingPrice}`);
        console.log(`Pack Price Adaptation: ${packPriceAdaptation}`);
        console.log(`Total Price (roll class): $${totalPrice.toFixed(2)}`);

        return totalPrice;
    }
}