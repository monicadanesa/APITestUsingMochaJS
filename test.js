var assert = require('assert'),
    request = require('supertest'),
    chai = require('chai'),
    http = require('http');

var express        = require('express'),
    app            = express(),
    expect         = chai.expect;

var server='localhost';
var request = request(server);
var data1= {"name" : "monica danesa", "phone" :"8122241111"};
var data2 = [
    { id: 0, name: "test 1", age: 15},
    { id: 1, name: "test 2", age: 30}
]
describe('request post', function() {

    it("create va should response 200",function(done){
         this.timeout(10000);
        //calling ADD api
        request
            .post('/')
            .send(data1)
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
           // console.log(res);
            expect(res.statusCode).to.equal(200);
            done();
        })
    }),
       it("double post should response 400",function(done){
         this.timeout(10000);
        //calling ADD api
        request
            .post('/')
            .send(data1)
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
           // console.log(res);
            expect(res.statusCode).to.equal(400);
            done();
        })
    }) 
}),

    
//sample get
    
describe('request get',function(){

        it('check data2 should contains id, name, age',function(){
        for(var i=0;i<data2.length;i++){
            request
            .get('/'+data2[i].id)
            expect(data2[i]).to.have.property(['id']);
            expect(data2[i]).to.have.property(['name']);
            expect(data2[i]).to.have.property(['age']);
        }

    }),
        it('age more than 20',function(){
        for(var i=0;i<data2.length;i++){
            request
            .get('/'+data2[i].id)
            expect(data2[i].age).to.be.above(20);
        }

    }),    it('age is 15',function(){
        for(var i=0;i<data2.length;i++){
            request
            .get('/'+data2[i].id)
            expect(data2[i].age).to.equal(15);
        }       
    }),
        it('data2 exists',function(){
        for(var i=0;i<data2.length;i++){
            request
            .get('/'+data2[i].id)
            assert(data2[i] != null);  
        }
    })   
});

