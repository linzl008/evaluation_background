const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

const collectionNames = {
    'baseSituation':'baseSituation',
    'discipline':'discipline',
    'authLevel':'authLevel',
};
const init = () => {
    //_createCollections();
}

const _createCollections = () => {
    for (let name in collectionNames) {
        getDb((err, db) => {
            if (err) throw err;
            db.createCollection(name, (err, res) => {
                if (err) {
                    console.log(`create collection ${name} error ${err}`)
                } else {
                    console.log(`create collection ${name} success`);
                }
                db.close();
            })
        })
    }
}

const getDb = (cb) =>{
    MongoClient.connect(url,(err,db) =>{
        if(err) throw err;
        console.log('getDb success');
        cb(err,db);
    })
}

module.exports = {
    init,
    getDb,
    collectionNames
}








