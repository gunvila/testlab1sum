const minus = require('./minus')

test('10 - 8 เท่ากับ 2',() => {
    expect(minus(10,8)).toBe(2);
});

test('19 - 9 เท่ากับ 10',() => {
    expect(minus(19,9)).toBe(10);
});

test('25 - 5 เท่ากับ 20',() => {
    expect(minus(25,5)).toBe(20);
});

test('30 - 10 เท่ากับ 20',() => {
    expect(minus(30,10)).toBe(20);
});

test('19 - 8 เท่ากับ 11',() => {
    expect(minus(19,8)).toBe(11);
});