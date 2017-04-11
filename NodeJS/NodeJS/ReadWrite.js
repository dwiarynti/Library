var mongooseDrv = require('mongoose');
//connection with the MongooDB

mongooseDrv.connect('mongodb://192.168.1.99/Test_DB');
var db = mongooseDrv.Connection;

var student = mongooseDrv.Schema({
    Name: String,
    Image: { data: Buffer, contentType: String }
});