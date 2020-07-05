const app = module.exports = require('express')();
const AuthAction = require('../actions/auth');
const Promise = require('bluebird');
let authAction = new AuthAction();

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
    try {
        authAction.logout();
        res.status(200).send({msj:"logout"});
    } catch (e) {
        res.status(e.code || 400).send({msj:e.message||"sonething went wrong!"})
    }
})

app.get('/user/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
    const result = await authAction.getUser('users',{_id});
    res.status(200).send(result)
    } catch(e) {
        console.log('adf')
        res.status(400).send({msj:e.message || "something went wrong!"})
    }
})

