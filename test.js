var assert = require('assert')
var setTimeout = require('timers').setTimeout

var para = require('./index.js')

para({
    a: function (cb) {
        setTimeout(function () {
            cb(null, 'a')
        }, 100)
    },
    b: function (cb) {
        setTimeout(function () {
            cb(null, 'b')
        }, 50)
    }
}, function (err, result) {
    assert.ifError(err)
    assert.deepEqual(result, { a: 'a', b: 'b' })

    para([
        function (cb) {
            setTimeout(function () {
                cb(null, 'a')
            }, 100)
        },
        function (cb) {
            setTimeout(function () {
                cb(null, 'b')
            }, 50)
        }
    ])(function (err, result) {
        assert.ifError(err)
        assert.deepEqual(result, ['a', 'b'])

        console.log('ok')
    })
})
