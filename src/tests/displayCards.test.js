const displayCards = require('./displayCards');


test("Returns all the results when no filter is clicked", () => {
    let locationFilters = [];
    let ownerTypeFilters = [];
    let businessTypeFilters = [];
    const actual = displayCards(locationFilters, ownerTypeFilters, businessTypeFilters)
    expect(actual).toEqual([1, 2, 3, 4])
})
test("Returns all business of selected business type when no other filter is selected", () => {
    let locationFilters = [];
    let ownerTypeFilters = [];
    let businessTypeFilters = ['coffee'];
    const actual = displayCards(locationFilters, ownerTypeFilters, businessTypeFilters)
    expect(actual).toEqual([1, 2, 3])
})
test("Returns all business of selected owner type when no other filter is selected", () => {
    let locationFilters = [];
    let ownerTypeFilters = ['black'];
    let businessTypeFilters = [];
    const actual = displayCards(locationFilters, ownerTypeFilters, businessTypeFilters)
    expect(actual).toEqual([2, 3])
})
test("Returns all business of selected county when no other filter is selected", () => {
    let locationFilters = ['jackson'];
    let ownerTypeFilters = [];
    let businessTypeFilters = [];
    const actual = displayCards(locationFilters, ownerTypeFilters, businessTypeFilters)
    expect(actual).toEqual([1])
})
test("Returns all business of selected business type and owner type when no county is selected", () => {
    let locationFilters = [];
    let ownerTypeFilters = ['woman'];
    let businessTypeFilters = ['coffee'];
    const actual = displayCards(locationFilters, ownerTypeFilters, businessTypeFilters)
    expect(actual).toEqual([1, 2, 3])
})
test("Returns all business of selected business type and county when no owner type is selected", () => {
    let locationFilters = ['jackson'];
    let ownerTypeFilters = [];
    let businessTypeFilters = ['coffee'];
    const actual = displayCards(locationFilters, ownerTypeFilters, businessTypeFilters)
    expect(actual).toEqual([1])
})
test("Returns all business of selected owner type and county when no business type is selected", () => {
    let locationFilters = ['bates'];
    let ownerTypeFilters = [];
    let businessTypeFilters = ['coffee'];
    const actual = displayCards(locationFilters, ownerTypeFilters, businessTypeFilters)
    expect(actual).toEqual([3])
})
