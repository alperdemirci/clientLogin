const express = require('express');
const cors = require('cors');
const routes = require('./app/routes');
const bodyParser = require('body-parser');
const PORT = require('./config').server.PORT;

function run() {
    const app = express();
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json({limit: "50mb"}));

    //app.use(cors());
    app.use(routes);

    app.listen(PORT, () => {
        console.log(`Simple App is running on ${PORT}`);
    });    
}

run();