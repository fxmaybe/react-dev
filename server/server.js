const express = require('express');
const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/reactdev';

mongoose.connect(DB_URL);
mongoose.connection.on('connected', function() {
    console.log('reactdev连接成功！');
});

const User = mongoose.model('user', mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
}));

// 新建接口
// User.create({
//     name: 'xiaohua',
//     age: 10
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
//     age: 12
// }, function(err, doc) {

// });

const app = express();
app.listen(9023, function() {
    console.log('express启动，端口为9023');
});

app.get('/', function(req, res) {
    res.send('<h1>Hello World!</h1>');
});

app.get('/data', function (req, res) {
    
    User.find({name: req.query.name}, function(err, doc) {
        if(err) {
          console.log(err);
          return;
        } 
        res.json(doc);
    });
});