console.log('The title', 'The body', 'The Author')

// inexpensive, moderate, pricey
function PriceRange(type, price){
    this.type = type;
    this.price = price;
    this.isSelected = false;
}

let priceRanges = [{label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
{label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
{label: '$$$', tooltip: 'Pricey', minPerPerson: 21, maxPerPerson: 50}]
