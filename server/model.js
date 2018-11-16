const express = require('express');
const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/reactdev';

mongoose.connect(DB_URL);
mongoose.connection.on('connected', function() {
    console.log('reactdev connected success!');
});

const models = {
    user: {
        name: {
            type: String,
            require: true
        },
        pwd: {
            type: String,
            require: true
        },
        type: {
            type: String,
            require: true
        },
        avater: {
            type: String
        },
        desc: {
            type: String
        },
        title: {
            type: String
        },
        company: {
            type: String
        },
        money: {
            type: String
        }

    },
    chat: {

    }
}

for(let i in models) {
    mongoose.model(i, mongoose.Schema(models[i]));
}

module.exports = {
    getModel(name) {
        return mongoose.model(name);
    }
}

// 新建接口
// User.create({
//     name: 'xiaoming',
//     age: 18
// }, function(err, doc) {
//     if(err) {
//         console.log(err);
//     }
// });

// 更新接口
// User.update({name: 'xiaohua'}, {'$set': {age: 20}}, function(err, doc) {

// });

// 删除接口
// User.remove({
//     age: 18
// }, function(err, doc) {

// });

// User.findOne({name: req.query.name}, function(err, doc) {
//     if(err) {
//         console.log(err);
//         return;
//     }
    
//     res.json(doc === null ? {} : doc);
// });
