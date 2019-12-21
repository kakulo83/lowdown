describe("Filter", () => {
  var _ = require('../../lowdown');

  it("should be able to access lowdown functions", () => {
    expect(typeof _.filter).toEqual("function");
  });

  it("works when the collection is empty", () => {
    let empty = [];
    expect(_.filter(empty, elm => !!elm)).toEqual(empty)
  });

  it("filters correctly", () => {
    let firstTenNums = [1,2,3,4,5,6,7,8,9,10];
    let expected = [2,4,6,8,10];
    expect(_.filter(firstTenNums, elm => elm % 2 === 0)).toEqual(expected);
  });
});
