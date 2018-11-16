const express = require('express');
const utils  = require('utility');
const Router = express.Router();
const model = require('./model');

const User = model.getModel('user');

const salt = '#sf5S0Dx0…df%Fs*49Ws@*5v2Ay@9k.n';
const _filter = {pwd: 0, __v: 0};

function md5Pwd(pwd) {
    return utils.md5(utils.md5(pwd + salt))
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
//     name: '小甜甜'
// }, function(err, doc) {

// });

// app.get('/', function(req, res) {
//     res.send('<h1>Hello World!</h1>');
// });

// app.get('/data', function (req, res) {
//     console.log(req.query);
//     User.findOne({name: req.query.name}, function(err, doc) {
//         if(err) {
//           console.log(err);
//           return;
//         }
        
//         res.json(doc === null ? {} : doc);
//     });
// });

Router.get('/info', function (req, res) {
    const {uid} = req.cookies;

    if (!uid) {
        res.json({
            code: 3,
            msg: '用户未登录，请先登录',
            data: {
            }
        });
    } else {
        User.findOne({_id: uid}, _filter, function(err, doc) {
            if(err) {
                res.json({
                    code: -1,
                    msg: '后端出错了',
                    data: {}
                });
                return;
            }
            res.json({
                code: 0,
                msg: '',
                data: doc
            });
        })
    }
    
});

Router.get('/list', function (req, res) {
    User.find({}, _filter, function (err, doc) {
        res.json(doc);
    });
    
});

Router.post('/register', function (req, res) {
    const {name, pwd, type} = req.body;
        if(name === '') {
            res.json({
                code: -1,
                msg: '请输入用户名'
            });
            return;
        }
        if(pwd === '') {
            res.json({
                code: -1,
                msg: '密码不能为空'
            });
            return;
        }
        if(type === '') {
            res.json({
                code: -1,
                msg: '请选择用户类型'
            });
        }
        User.findOne({name}, _filter, function(err, doc) {
        if(doc) {
            res.json({
                code: 1,
                msg: '用户名已存在'
            });
        } else {
            User.create({
                name,
                pwd: md5Pwd(pwd),
                type
            }, function (err, doc) {
                res.json({
                    code: err ? -1 : 0,
                    msg: err ? err : '注册成功'
                });
            });
        }
    });
});

Router.post('/login', function(req, res) {
    const {name, pwd} = req.body;
    
    if (name === '') {
        res.json({
            code: -1,
            msg: '请输入用户名',
            data: {}
        });
        return;
    }
    if (pwd === '') {
        res.json({
            code: -1,
            msg: '密码不能为空',
            data: {}
        });
        return;
    }
    User.findOne({
        name
    }, function (err, doc) {
        if(!doc) {
            res.json({
                code: -1,
                msg: '用户名不存在',
                data: {}
            });
        } else {
            User.findOne({
                pwd: md5Pwd(pwd)
            },  _filter, function (err, doc) {
                if (!doc) {
                    res.json({
                        code: -1,
                        msg: '密码错误',
                        data: {}
                    });
                } else {
                    res.cookie('uid', doc._id);
                    res.json({
                        code: 0,
                        msg: '登录成功',
                        data: doc
                    });
                }
            });
        }
    });
});

module.exports = Router;