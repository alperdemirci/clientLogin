const app = module.exports = require('express')();
const authAction = require('../actions/auth');

app.get('/',(req, res) => {
    res.status(200).send({msg:"2server is up and running"});
})

app.post('/signup', async (req, res) => {
    res.status(200).send({msj:"signup"});
});

app.post('/login', async (req, res) => {
    res.status(200).send({msj:"login"});
});

app.get('/logout', async (req, res) => {
    let ttt = new authAction();
    ttt.logout();
    res.status(200).send({msj:"logout"});
})

