const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', ()=> {
  expect(sum(1,2)).toBe(3);
});

// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21',()=> {
  expect(sum(20,1)).toBe(21);
});


// 2 + 5 เท่ากับ ?
test('2 + 5 เท่ากับ 7',() =>{
  expect(sum(2,5)).toBe(7);
});

// ทำอีก 3 อัน โดยการพิมพ์เอง อย่า copy

test('15 + 15 เท่ากับ 30',() =>{
  expect(sum(15,15)).toBe(30);
});

test('25 + 25 เท่ากับ 50',() =>{
  expect(sum(25,25)).toBe(50);
});

test('100 + 10 เท่ากับ 110',() =>{
  expect(sum(100,10)).toBe(110)
});
