// show dbs
// use training
// show collections

// MQL(MongoDb Query Language)
    // insert, insert
    // db.inspections.insert([ { "test": 1 }, { "test": 2 }, { "test": 3 } ])
    
    // Below query will insert only the first document and stops executing further with a duplicate key error.
        // as first two documents have similar _ids. Won't even insert the third unique document.  
    // db.inspections.insert([{ "_id": 1, "test": 1 },{ "_id": 1, "test": 2 },
        // { "_id": 3, "test": 3 }])

    // Through "ordered: false" we solve the above problem by inserting all unique documents first and then 
        // gives error on the duplicate one.
    // db.inspections.insert([{ "_id": 1, "test": 1 },{ "_id": 1, "test": 2 },
        // { "_id": 3, "test": 3 }],{ "ordered": false })


// MQL Update Operators
    // $inc, $set, $push