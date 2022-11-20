const express = require('express');
const app = express();

// app.use((req, res, next) => {
//     console("First Middleware logged");
//     next();
// });

// app.use((req, res, next) => {
//     console("Second Middleware logged");
//     res.send();
// });

app.use('/users', (req, res, next) => {
    res.send({route: '/users', success: true});
});

app.use('/', (req, res, next) => {
    res.send({route: '/', success: true});
});

app.listen(3000);