const mongoose   = require('mongoose');
const app        = require('./app');
const config     = require('./config');

mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(res => {
        console.log('DB Connection successfully!');
        app.listen(config.port);
        console.log('Server running on port ' + config.port);  
    }).catch(err => {
        throw err;
});