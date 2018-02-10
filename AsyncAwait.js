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

describe('script test using Async and Await',function(){
    it("Async await test 01", async function(done) {
        var testPromise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve("Hello World!");
            }, 200);
        });

        try {
            var result = await testPromise;

            expect(result).to.equal("Hello!");

            done();
        } catch(err) {
            done(err);
        }
    }),

        it('Async await test 02',async function(done){
        var TestOne = new Promise(function(resolve,reject){
            setTimeout(function(){
                request
                    .post('/')
                    .send(data1)
                    .expect("Content-type",/json/)
                    .end(function(err,res){
                    // console.log(res);
                    //resolve(res.statusCode);
                    expect(res.statusCode).to.equal(302);
                    resolve(res.header);
                })
            },200)
        });

        try {
            var result = await TestOne;
            console.log(result);
            //expect.result.to.equal(302);
            done();
        }catch(err) {
            done(err);
        }
    })
})