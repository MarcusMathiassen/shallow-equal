import { testSuites } from './testSuites.js';
import { shallowEqual } from './index.js';
import ava from 'ava';

try {
    testSuites.forEach((suite) => {
        suite.tests.forEach((t, i) => {
            ava(`[${suite.description} ${i}] ${t.description}`, (test) => {
                test.is(shallowEqual(t.value1, t.value2), t.shallowEqual);
            });
        });
    });
} catch (err) {
    console.log(err);
}
