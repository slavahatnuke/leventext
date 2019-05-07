const Compare = require('..');

const expect = require('chai').expect;

describe('index', () => {
    it('different', function () {
        const compare = Compare();
        expect(compare('x', 'y')).equal(0)
    });

    it('equal', function () {
        const compare = Compare();
        expect(compare('x', 'x')).equal(1)
    });

    it('a bit different', function () {
        const compare = Compare();
        expect(+compare('hello world', 'hello men').toFixed(2)).equal(0.55)
        expect(+compare('hello world', 'hello dude').toFixed(2)).equal(0.55)
        expect(+compare('hello world', 'hello world here').toFixed(2)).equal(0.69)
        expect(+compare('hello world', 'dude').toFixed(2)).equal(0)
        expect(+compare('hello world', '').toFixed(2)).equal(0)
    });
})