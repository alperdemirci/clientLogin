// const { init } = require('../routes');
const Promise = require('bluebird');
const ObjectID = require('mongodb').ObjectID;

const MongoClient = require('mongodb').MongoClient;
const uri = require('../../cred')().url;
const client = new MongoClient(uri, { useNewUrlParser: true });

class DB {
    // constructor() {
    //     this.client={};
    // }
    async connect() {
        return new Promise((resolve) => {
            if (!this.client) {
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
    disconnect = () => {
        this.client.close();
    }
    get = async (collection, query={}) => {
        const newQuery = { ...query };
        if(query._id) newQuery._id=Helper.objectIDConverter(query._id)

        await this.connect();
        const result = await this.client.db('clientLogin').collection(collection).find(newQuery).toArray();
        return result;

    }

    post = () => {

    }

    delete = () => {

    }
}

class Helper {
    static objectIDConverter = (id) => {
        return ObjectID(id);
    } 
}

module.exports = DB;