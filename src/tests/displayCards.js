const businesses = [
    {
        businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
        businessLocation: {id: 132, county: "Jackson", city: "Gladston", state: null, buildingNumber: null},
        businessType: {id: 132, name: "Coffee"},
        id: 1,
        likes: 1,
        name: "Business name is different account",
        owner: {id: 43, username: "owner@test.com"},
        ownerTypes: [{id: 203, name: "Woman"}],
    },
    {
        businessDetails: {id: 2, description: "description goes here", websiteUrl: "link.com"},
        businessLocation: {id: 132, county: "Platte", city: "Gladston", state: null, buildingNumber: null},
        businessType: {id: 132, name: "Coffee"},
        id: 2,
        likes: 1,
        name: "Business name is different account",
        owner: {id: 43, username: "owner@test.com"},
        ownerTypes: [{id: 203, name: "Woman"}, {id: 203, name: "Black"}],
    },
    {
        businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
        businessLocation: {id: 132, county: "Bates", city: "Gladston", state: null, buildingNumber: null},
        businessType: {id: 132, name: "Coffee"},
        id: 3,
        likes: 1,
        name: "Business name is different account",
        owner: {id: 43, username: "owner@test.com"},
        ownerTypes: [{id: 203, name: "Woman"}, {id: 203, name: "Black"}, {id: 203, name: "Latino"}],
    },
    {
        businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
        businessLocation: {id: 132, county: "Bates", city: "Gladston", state: null, buildingNumber: null},
        businessType: {id: 132, name: "Food"},
        id: 4,
        likes: 1,
        name: "Business name is different account",
        owner: {id: 43, username: "owner@test.com"},
        ownerTypes: [{id: 203, name: "LGBTQIA"}, {id: 203, name: "Immigrant"}, {id: 203, name: "Asian"}],
    }
]





const displayCards = (locationFilters, ownerTypeFilters, businessTypeFilters) => {
    let filteredBusinesses;
    if (businesses.length) {
      filteredBusinesses = businesses;
    }

    if (
      locationFilters.length ||
      ownerTypeFilters.length ||
      businessTypeFilters.length
    ) {
      filteredBusinesses = businesses.filter((business) => {
        if (
          locationFilters.length &&
          ownerTypeFilters.length &&
          businessTypeFilters.length
        ) {
          if (
            locationFilters.includes(
              business.businessLocation.county.toLowerCase()
            ) &&
            business.ownerTypes.some((owner) =>
              ownerTypeFilters.includes(owner.name.toLowerCase())
            ) &&
            businessTypeFilters.includes(
              business.businessType.name.toLowerCase()
            )
          ) {
            return true;
          }
          return false;
        } else if (locationFilters.length && ownerTypeFilters.length) {
          if (
            locationFilters.includes(
              business.businessLocation.county.toLowerCase()
            ) &&
            business.ownerTypes.some((owner) =>
              ownerTypeFilters.includes(owner.name.toLowerCase())
            )
          ) {
            return true;
          }
          return false;
        } else if (locationFilters.length && businessTypeFilters.length) {
          if (
            locationFilters.includes(
              business.businessLocation.county.toLowerCase()
            ) &&
            businessTypeFilters.includes(
              business.businessType.name.toLowerCase()
            )
          ) {
            return true;
          }
          return false;
        } else if (ownerTypeFilters.length && businessTypeFilters.length) {
          if (
            business.ownerTypes.some((owner) =>
              ownerTypeFilters.includes(owner.name.toLowerCase())
            ) &&
            businessTypeFilters.includes(
              business.businessType.name.toLowerCase()
            )
          ) {
            return true;
          }
          return false;
        } else if (
          locationFilters.length &&
          !ownerTypeFilters.length &&
          !businessTypeFilters.length
        ) {
          if (
            locationFilters.includes(
              business.businessLocation.county.toLowerCase()
            )
          ) {
            return true;
          }
          return false;
        } else if (
          ownerTypeFilters.length &&
          !locationFilters.length &&
          !businessTypeFilters.length
        ) {
          if (
            business.ownerTypes.some((owner) =>
              ownerTypeFilters.includes(owner.name.toLowerCase())
            )
          ) {
            return true;
          }
          return false;
        } else if (
          businessTypeFilters.length &&
          !locationFilters.length &&
          !ownerTypeFilters.length
        ) {
          if (
            businessTypeFilters.includes(
              business.businessType.name.toLowerCase()
            )
          ) {
            return true;
          }

          return false;
        }

        return business;
      });
    }

    let arrayOfCards = [];
    if (filteredBusinesses) {
      for (const business of filteredBusinesses) {
        arrayOfCards.push(business.id);
      }
    }
    return arrayOfCards;
  };


  module.exports = displayCards;