const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect(
    'mongodb://<host>:<port>/products',    
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,      
    })
.catch(err => {
    console.log('Error connected!');
    console.error(err.reason);
});
requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3001); 