const app = require('express')();

app.get('/',(req, res) => {
    res.status(200).send({msg:"server is up and running"});
})
app.use('/auth', require('./auth'));

module.exports = app;