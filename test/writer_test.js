'use strict';

var assert = require('assert');
var Writer = require('../lib/writer');
var path = require('path');
var fs = require('fs');

function errorHandler(err){
    process.nextTick(function rethrow() { throw err; });
}

var dest = path.join(__dirname, 'foo.js');

(new Writer).run(
    [{
        path: 'foo.js',
        contents: 'var foo;'
    }], // inputs
    {
        path: dest
    }, // options
    console // logger
).then(function(inputs){
    assert.equal(inputs[0].contents.toString(), fs.readFileSync(dest));
    fs.unlinkSync(dest);
}).catch(errorHandler)
