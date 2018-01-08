const mongo = require('../config/mongo')
const CollectRet = require('../utils/collectRet');
exports.set = function(req,rsp,next) {
    // mongo.getDb((err,db) =>{
    //     let collection = db.collection(mongo.collectionNames.baseSituation)
    //     collection.updateOnce(
    //         {},
    //         {$set: req.body},
    //         {upsert:true}
    //     )
    //     rsp.send({code:'0000',msg:'baseSituation set success'})
    // })
    rsp.send({code:'0001',msg:'登陆的学科和授权为只读'})
}
exports.get = function(req,rsp,next) {
    mongo.getDb((err,db) =>{
        let collectRet = CollectRet.create(2,rsp,`main get success`);
        let discipline = db.collection(mongo.collectionNames.discipline);
        discipline.find().toArray((err,docs) =>{
            if(err) throw err;
            console.log('discipline find success')
            collectRet.collect('discipline',docs)
        });
        let authLevel = db.collection(mongo.collectionNames.authLevel);
        authLevel.find().toArray((err,docs) =>{
            if(err) throw err;
            console.log('authLevel find success')
            collectRet.collect('authLevel',docs)
        })
        //rsp.send({code:'0000',msg:{disciplineList,authLevelList}})
    })
}
