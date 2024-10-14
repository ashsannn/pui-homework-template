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
    }

    getPackPriceAdaptation() {
        for (let i = 0; i < packSizes.length; i++) {
            if (packSizes[i].packSize === this.size) {
                return parseFloat(packSizes[i].priceAdaptation);
            }
        }
    }

    calculateRollTotal() {
        const glazingPrice = this.getGlazingPrice();
        const packPriceAdaptation = this.getPackPriceAdaptation();
        
        const totalPrice = (this.basePrice + glazingPrice) * packPriceAdaptation;
        return totalPrice;
    }
}