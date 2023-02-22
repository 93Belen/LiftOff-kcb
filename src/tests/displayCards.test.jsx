const displayCards = require('./displayCards');


test("Returns all the results when no filter is clicked", () => {
    let locationFilters = [];
    let ownerTypeFilters = [];
    let businessTypeFilters = [];
    const actual = displayCards(locationFilters, ownerTypeFilters, businessTypeFilters)
    expect(actual.length).toEqual(4)
})