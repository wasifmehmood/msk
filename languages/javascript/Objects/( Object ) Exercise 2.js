function createAddress(street, city, zipCode){
    return { street, city, zipCode }
}

const addressFactory = new createAddress('1', 'Mardan', 23200);

console.log(addressFactory)

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address = new Address('1', 'Mardan', 23200)

console.log(address)