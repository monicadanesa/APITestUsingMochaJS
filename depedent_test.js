//2018-02-08 Mocha Js for promises cases
//describe grouping the test
//it() test case
//change main package.json if you want to run this test case or run with mocha depedent_test.js

//require
var assert = require('assert'),
    request = require('supertest'),
    chai = require('chai'),
    http = require('http');

var express        = require('express'),
    app            = express(),
    expect         = chai.expect;

//adjust with your local server
var server='localhost';
var request = request(server);

//adjust with your data
var data2 ={ id: 2, name: "test 1", age: 15}
var data3 ={id: 1, id_data2:1 , company:"company1"}

//sample test using promises
describe("MochaJS using promises",function(){
    it("test 01", function() {
        var testPromise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                request
                    .get('/'+data2.id)
                resolve(expect(data2.id).to.equal(1));
            }, 200);
        });

        //add promises 1
        return testPromise.then(function(result){
            console.log('let try to get some id');
            var testPromise_2 = new Promise(function(resolve, reject) {
                setTimeout(function() {
                    request
                        .get('/'+data3.id)
                    resolve(expect(data3.id_data2).to.equal(1));
                }, 200);
            });

            //add promises 2
            return testPromise_2.then(function(result){
                console.log('id data 2 equal 1');
            })
        });
    });
});
