'use strict';
const testSuites = require('./testSuites.js')
const { shallowEqual } = require('./index.js')
testSuites.forEach(suite => {
    describe(suite.description, () => {
        suite.tests.forEach(t => {
            test(t.description, () => {
                expect(shallowEqual(t.value1, t.value2)).toBe(t.shallowEqual)
            })
        })
    })
})