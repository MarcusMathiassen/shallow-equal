"use strict";
var { keys, prototype: { hasOwnProperty: e, valueOf: d }} = Object, g = Array.isArray
function x(a, b) {
    if (a === b) return true
    if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') return (a !== a && b !== b)
    var c = a.constructor
    if (c !== b.constructor) return false
    switch (c) {
        case Object: {
            var ks = keys(a), i = ks.length
            if (i !== keys(b).length) return false
            var k
            for(; i--; ) if (!e.call(b, (k = ks[i])) || (a[k] !== b[k]) || (a[k] !== a[k] && b[k] !== b[k])) return false
            return true
        }
        case RegExp: return !(a.source !== b.source || a.flags !== b.flags)
        case Date: {
            var aT = a.getTime(), bT = b.getTime()
            return (aT === bT) || (aT !== aT && bT !== bT)
        }
        case Promise: return false
    }
    if (g(a)) {
        i = a.length
        if (i !== b.length) return false
        for(; i--; ) if ((a[i] !== b[i]) || (a[i] !== a[i] && b[i] !== b[i])) return false
        return true
    }
    if (a.valueOf !== d) return a.valueOf() === b.valueOf()
    return a === b
}
module.exports = { shallowEqual: x }