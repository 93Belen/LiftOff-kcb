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
test("Returns all business of selected owner type, county, and business type when all filters are selected", () => {
    let locationFilters = ['bates'];
    let ownerTypeFilters = ['asian'];
    let businessTypeFilters = ['food'];
    const actual = displayCards(locationFilters, ownerTypeFilters, businessTypeFilters)
    expect(actual).toEqual([4])
})
test("Returns empty array when all filters are selected and no business fullfil the search", () => {
    let locationFilters = ['bates'];
    let ownerTypeFilters = ['black'];
    let businessTypeFilters = ['food'];
    const actual = displayCards(locationFilters, ownerTypeFilters, businessTypeFilters)
    expect(actual).toEqual([])
})
test("Returns all business of selected owner type, county, and business type when all filters are selected with multiple options", () => {
    let locationFilters = ['bates', 'jackson', 'platte'];
    let ownerTypeFilters = ['asian', 'woman'];
    let businessTypeFilters = ['food', 'coffee'];
    const actual = displayCards(locationFilters, ownerTypeFilters, businessTypeFilters)
    expect(actual).toEqual([1, 2, 3, 4])
})
test("Returns all business of selected owner type, county, and business type when all filters are selected with multiple options and one option is not present in any business", () => {
    let locationFilters = ['bates', 'jackson', 'platte', 'almeria'];
    let ownerTypeFilters = ['asian', 'woman'];
    let businessTypeFilters = ['food', 'coffee'];
    const actual = displayCards(locationFilters, ownerTypeFilters, businessTypeFilters)
    expect(actual).toEqual([1, 2, 3, 4])
})
test("Returns all business of selected owner type, county, and business type when all filters are selected with multiple options and one business fullfil multiple options", () => {
    let locationFilters = ['bates', 'jackson', 'platte'];
    let ownerTypeFilters = ['asian', 'woman', 'lgbtqia'];
    let businessTypeFilters = ['food', 'coffee'];
    const actual = displayCards(locationFilters, ownerTypeFilters, businessTypeFilters)
    expect(actual).toEqual([1, 2, 3, 4])
})
