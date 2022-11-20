const address = {
    street: '1',
    city: 'Mardan', 
    zipCode: 23200
}

function showObject(obj){
    for(let key in obj) console.log(key, obj[key])
}

showObject(address);