describe("Map", () => {
  var _ = require('../../lowdown');

  it("works when the collection is empty", () => {
    let empty = [];
    expect(_.map(empty, elm => elm)).toEqual(empty);
  });

  it("maps correctly", () => {
    let firstFive = [1,2,3,4,5];
    let expected = [2,4,6,8,10];
    expect(_.map(firstFive, elm => elm * 2)).toEqual(expected);
  });
});
