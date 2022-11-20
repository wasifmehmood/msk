/******* Comparison of JSON and BSON Start *******/

// JSON:
    // PROS: 
        // Friendly, Readable, Familiar
    // Cons:
        // Text-based (text parsing is really slow)
        // Space not efficient
        // Support Limited number of data types

    // Encoding: UTF-8 String
    // Data Support: String, boolean, number, array
    // Readablity: Human, machine

// BSON:
    // Bridges the gap b/w binary representationand JSON format
    // Optimized for:
        // Speed, space, flexibility

    // Encoding: Binary
    // Data Support: String, boolean, number, array, date, 
        // raw binary
    // Readability: machine only

/******* Comparison END *******/

/******* Commands Start *******/

// JSON: 
    // mongoimport      ===> Imports data in JSON format
    // mongoexport      ===> Exports data in JSON format

// BSON:
    // mongorestore     ===> Imports data in BSON format
    // mongodump        ===> Exports data in BSON format 

    // Commands format:

    // mongoimport --uri "<Atlas cluster URI>"
        // --drop=<filename>.json
    // mongorestore --uri "<Atlas cluster URI>" --drop dump 

    // mongodump --uri "<Atlas cluster URI>"
    // mongoexport --uri "<Atlas cluster URI>" 
        // --collection=<collection name>
        // --out=<filename>.json

/******* Commands END *******/

/******* Commands Start *******/

/******* Commands END *******/