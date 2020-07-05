// const { init } = require('../routes');
const Promise = require('bluebird');

const MongoClient = require('mongodb').MongoClient;
const uri = require('../../cred')().url;
const client = new MongoClient(uri, { useNewUrlParser: true });




class DB {
    // constructor() {
    //     this.client={};
    // }
    async init() {
        
            return new Promise((resolve)=> {
                if(!this.client) {
                    return client.connect(err => {
                        console.log('connected');
                        //const collection = client.db("test").collection("devices");
                        // perform actions on the collection object
                    this.client = client;
                    resolve();
                  });

                 } else resolve();
            })
        
    }
    get = async (collection, id) => {
        const ttt = await this.init();
        let result = await this.client.db('clientLogin').collection('users').find().toArray();
        return result;

    }

    post = () => {

    }

    delete = () => {

    }
}

module.exports = DB;