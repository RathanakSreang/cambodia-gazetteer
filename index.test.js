var {cambodia_gazetterr} = require('./index');
var banteayMeanchey = cambodia_gazetterr[0];

test('Provinces', () => {
  expect(banteayMeanchey["khmer"]).toBe("បន្ទាយមានជ័យ");
  expect(banteayMeanchey["latin"]).toBe("Banteay Meanchey1");
})

var districts = banteayMeanchey.districts;
test('Districts', () => {
  expect(districts.length).toBe(9);
  expect(districts[0]["khmer"]).toBe("មង្គលបូរី");
  expect(districts[0]["latin"]).toBe("Mongkol Borei");
})

var communes = districts[0].communes;

test('communes', () => {
  expect(communes.length).toBe(13);
  expect(communes[0]["khmer"]).toBe("បន្ទាយនាង");
  expect(communes[0]["latin"]).toBe("Banteay Neang");
})

var villages = communes[0].villages;
test('villages', () => {
  expect(villages.length).toBe(19);
  expect(villages[0]["khmer"]).toBe("អូរធំ");
  expect(villages[0]["latin"]).toBe("Ou Thum");
})
