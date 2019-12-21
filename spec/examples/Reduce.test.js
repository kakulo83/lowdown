describe("Reduce", () => {
  var _ = require('../../lowdown');

  it("works when the collection is empty", () => {
    let empty = [];
    expect(_.reduce(empty, (accu, current) => accu += current, 0)).toEqual(0);
  });

  it("uses an initial aggregation value", () => {
    const initialAggro = 10;
    const firstFive = [1,2,3,4,5];
    const expected = 25;

    expect(_.reduce(firstFive, (accu, current) => {
      return accu += current;
    }, initialAggro)).toEqual(expected);
  });

  it("defaults to the first element if no aggregation provided", () => {
    const firstFive = [1,2,3,4,5];
    const expected = 16;

    expect(_.reduce(firstFive, (accu, current) => {
      return accu += current;
    })).toEqual(expected);
  });
});
