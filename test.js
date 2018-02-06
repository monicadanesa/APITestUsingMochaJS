var assert = require('assert'),
    request = require('supertest'),
    chai = require('chai'),
    http = require('http');

var express        = require('express'),
    app            = express(),
    expect         = chai.expect;

var request = request('localhost');
describe('test 1', function() {

    it("create va should response 200",function(done){
         this.timeout(10000);
        //calling ADD api
        request
            .post('/')
            .send({"name" : "monica danesa", "phone" :"8122241111"})
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
            console.log(res);
            expect(res.statusCode).to.equal(200);
            done();
        })
    }),
       it("double post should response 400",function(done){
         this.timeout(10000);
        //calling ADD api
        request
            .post('/')
            .send({"name" : "monica danesa", "phone" :"8122241111"})
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
            console.log(res);
            expect(res.statusCode).to.equal(400);
            done();
        })
    }) 
});