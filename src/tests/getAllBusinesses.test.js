// When testing uncomment this:
//const transformIntoObj = require('../call-backend/getAllBusinesses')
// Testing with mock response from API

    // Test 1
        // Response from API
        const mockResponse1 = [
            {
                businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                businessType: {id: 132, name: "Diner"},
                id: 1,
                likes: 1,
                name: "Business name is different account",
                owner: {id: 43, username: "owner@test.com"},
                ownerTypes: [{id: 203, name: "Woman"}],
            },
            {
                businessDetails: {id: 2, description: "description goes here", websiteUrl: "link.com"},
                businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                businessType: {id: 132, name: "Restaurant"},
                id: 2,
                likes: 1,
                name: "Business name is different account",
                owner: {id: 43, username: "owner@test.com"},
                ownerTypes: [{id: 203, name: "Woman"}],
            },
            {
                businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                businessType: {id: 132, name: "Food"},
                id: 3,
                likes: 1,
                name: "Business name is different account",
                owner: {id: 43, username: "owner@test.com"},
                ownerTypes: [{id: 203, name: "Woman"}],
            },
            {
                businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                businessType: {id: 132, name: "Brunch"},
                id: 4,
                likes: 1,
                name: "Business name is different account",
                owner: {id: 43, username: "owner@test.com"},
                ownerTypes: [{id: 203, name: "Woman"}],
            }
        ]
        // Expected
        const expected1 = {
        all : {
            all: {
                all: [1, 2, 3, 4],
                Woman: [1, 2, 3, 4],
                Latino: [],
                Black: [],
                Immigrant: [],
                LGBTQIA: [],
                Asian: []
            },
            coffee: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            food: {
                all: [1, 2, 3, 4],
                Woman: [1, 2, 3, 4],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            clothing: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            homegoods: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            others: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            }

        },
        Bates: {
            all: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            coffee:{
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            food: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            clothing: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            homegoods: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            others: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            }
        },
        Linn: {
            all: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            coffee: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            food: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            clothing: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            homegoods: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            others: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            }
        },
        Miami: {
            all: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            coffee: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            food: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            clothing: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            homegoods: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            others: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            }
        },
        Johnson: {
            all: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            coffee:{
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            food: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            clothing: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            homegoods: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            others: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            }
        },
        Wyandotte: {
            all: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            coffee:{
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            food: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            clothing: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            homegoods: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            others: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            }
        },
        Leavenworth: {
            all: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            coffee:{
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            food: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            clothing: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            homegoods: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            others: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            }
        },
        Platte: {
            all: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            coffee:{
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            food: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            clothing: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            homegoods: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            others: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            }
        },
        Clay: {
            all: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            coffee:{
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            food: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            clothing: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            homegoods: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            others: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            }
        },
        Clinton: {
            all: {
                all: [1, 2, 3, 4],
                Woman: [1, 2, 3, 4],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            coffee:{
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            food: {
                all: [1, 2, 3, 4],
                Woman: [1, 2, 3, 4],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            clothing: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            homegoods: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            others: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            }
        },
        Caldwell: {
            all: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            coffee:{
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            food: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            clothing: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            homegoods: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            others: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            }
        },
        Ray: {
            all: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            coffee:{
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            food: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            clothing: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            homegoods: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            others: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            }
        },
        Lafayette: {
            all: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            coffee:{
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            food: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            clothing: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            homegoods: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            others: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            }
        },
        Jackson: {
            all: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            coffee:{
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            food: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            clothing: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            homegoods: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            others: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            }
        },
        Cass: {
            all: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            coffee:{
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            food: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            clothing: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            homegoods: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            },
            others: {
                all: [],
                Woman: [],
                Latino: [],
                Black: [],
                Immigrant: [],
                Asian: [],
                LGBTQIA: []
            }
        }
    }

    // Test 2
        // Response from API
        const mockResponse2 = [
            {
                businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                businessType: {id: 132, name: "Clothing"},
                id: 1,
                likes: 1,
                name: "Business name is different account",
                owner: {id: 43, username: "owner@test.com"},
                ownerTypes: [{id: 203, name: "Woman"}],
            },
            {
                businessDetails: {id: 2, description: "description goes here", websiteUrl: "link.com"},
                businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                businessType: {id: 132, name: "clothing"},
                id: 2,
                likes: 1,
                name: "Business name is different account",
                owner: {id: 43, username: "owner@test.com"},
                ownerTypes: [{id: 203, name: "Woman"}],
            },
            {
                businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                businessType: {id: 132, name: "Fashion"},
                id: 3,
                likes: 1,
                name: "Business name is different account",
                owner: {id: 43, username: "owner@test.com"},
                ownerTypes: [{id: 203, name: "Woman"}],
            },
            {
                businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                businessType: {id: 132, name: "fashion"},
                id: 4,
                likes: 1,
                name: "Business name is different account",
                owner: {id: 43, username: "owner@test.com"},
                ownerTypes: [{id: 203, name: "Woman"}],
            },
        ]
        // Expected
        const expected2 = {
            all : {
                all: {
                    all: [1, 2, 3, 4], //all
                    Woman: [1, 2, 3, 4], //all
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    LGBTQIA: [],
                    Asian: []
                },
                coffee: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [1, 2, 3, 4], //all clothing
                    Woman: [1, 2, 3, 4], //all clothing
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
        
            },
            Bates: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Linn: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Miami: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Johnson: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Wyandotte: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Leavenworth: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Platte: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Clay: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Clinton: {
                all: {
                    all: [1, 2, 3, 4], //all clinton
                    Woman: [1, 2, 3, 4], //all clinton
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [1, 2, 3, 4], //clothing clinton
                    Woman: [1, 2, 3, 4], //clothing clinton
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Caldwell: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Ray: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Lafayette: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Jackson: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Cass: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            }
        }
    // Test 3
        // Response from API
        const mockResponse3 = [
            {
                businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                businessType: {id: 132, name: "home"},
                id: 1,
                likes: 1,
                name: "Business name is different account",
                owner: {id: 43, username: "owner@test.com"},
                ownerTypes: [{id: 203, name: "Woman"}],
            },
            {
                businessDetails: {id: 2, description: "description goes here", websiteUrl: "link.com"},
                businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                businessType: {id: 132, name: "furniture"},
                id: 2,
                likes: 1,
                name: "Business name is different account",
                owner: {id: 43, username: "owner@test.com"},
                ownerTypes: [{id: 203, name: "Woman"}],
            },
            {
                businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                businessType: {id: 132, name: "decor"},
                id: 3,
                likes: 1,
                name: "Business name is different account",
                owner: {id: 43, username: "owner@test.com"},
                ownerTypes: [{id: 203, name: "Woman"}],
            },
            {
                businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                businessType: {id: 132, name: "rugs"},
                id: 4,
                likes: 1,
                name: "Business name is different account",
                owner: {id: 43, username: "owner@test.com"},
                ownerTypes: [{id: 203, name: "Woman"}],
            }
        ]
        // Expected
        const expected3 = {
            all : {
                all: {
                    all: [1, 2, 3, 4],
                    Woman: [1, 2, 3, 4],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    LGBTQIA: [],
                    Asian: []
                },
                coffee: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [1, 2, 3, 4],
                    Woman: [1, 2, 3, 4],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
        
            },
            Bates: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Linn: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Miami: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Johnson: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Wyandotte: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Leavenworth: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Platte: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Clay: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Clinton: {
                all: {
                    all: [1, 2, 3, 4],
                    Woman: [1, 2, 3, 4],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [1, 2, 3, 4],
                    Woman: [1, 2, 3, 4],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Caldwell: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Ray: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Lafayette: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Jackson: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Cass: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            }
        }

    // Test 4
        // Response from API
        const mockResponse4 = [
            {
                businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                businessType: {id: 132, name: "caballo"},
                id: 1,
                likes: 1,
                name: "Business name is different account",
                owner: {id: 43, username: "owner@test.com"},
                ownerTypes: [{id: 203, name: "Woman"}],
            },
            {
                businessDetails: {id: 2, description: "description goes here", websiteUrl: "link.com"},
                businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                businessType: {id: 132, name: "lolailo"},
                id: 2,
                likes: 1,
                name: "Business name is different account",
                owner: {id: 43, username: "owner@test.com"},
                ownerTypes: [{id: 203, name: "Woman"}],
            },
            {
                businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                businessType: {id: 132, name: "raton"},
                id: 3,
                likes: 1,
                name: "Business name is different account",
                owner: {id: 43, username: "owner@test.com"},
                ownerTypes: [{id: 203, name: "Woman"}],
            },
            {
                businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                businessType: {id: 132, name: "abracadabra"},
                id: 4,
                likes: 1,
                name: "Business name is different account",
                owner: {id: 43, username: "owner@test.com"},
                ownerTypes: [{id: 203, name: "Woman"}],
            }
        ]
        // Expected
        const expected4 = {
            all : {
                all: {
                    all: [1, 2, 3, 4],
                    Woman: [1, 2, 3, 4],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    LGBTQIA: [],
                    Asian: []
                },
                coffee: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [1, 2, 3, 4],
                    Woman: [1, 2, 3, 4],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
        
            },
            Bates: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Linn: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Miami: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Johnson: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Wyandotte: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Leavenworth: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Platte: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Clay: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Clinton: {
                all: {
                    all: [1, 2, 3, 4],
                    Woman: [1, 2, 3, 4],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [1, 2, 3, 4],
                    Woman: [1, 2, 3, 4],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Caldwell: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Ray: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Lafayette: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Jackson: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            },
            Cass: {
                all: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                coffee:{
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                food: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                clothing: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                homegoods: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                },
                others: {
                    all: [],
                    Woman: [],
                    Latino: [],
                    Black: [],
                    Immigrant: [],
                    Asian: [],
                    LGBTQIA: []
                }
            }
        }


    // Test 5
            // Response from API
        const mockResponse5 = [
                {
                    businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                    businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                    businessType: {id: 132, name: "Breakfast and Dinner"},
                    id: 1,
                    likes: 1,
                    name: "Business name is different account",
                    owner: {id: 43, username: "owner@test.com"},
                    ownerTypes: [{id: 203, name: "Woman"}],
                },
                {
                    businessDetails: {id: 2, description: "description goes here", websiteUrl: "link.com"},
                    businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                    businessType: {id: 132, name: "smoothies and bakery"},
                    id: 2,
                    likes: 1,
                    name: "Business name is different account",
                    owner: {id: 43, username: "owner@test.com"},
                    ownerTypes: [{id: 203, name: "Woman"}],
                },
                {
                    businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                    businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                    businessType: {id: 132, name: "Pizza catering"},
                    id: 3,
                    likes: 1,
                    name: "Business name is different account",
                    owner: {id: 43, username: "owner@test.com"},
                    ownerTypes: [{id: 203, name: "Woman"}],
                },
                {
                    businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                    businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                    businessType: {id: 132, name: "Brunch and Cocktails"},
                    id: 4,
                    likes: 1,
                    name: "Business name is different account",
                    owner: {id: 43, username: "owner@test.com"},
                    ownerTypes: [{id: 203, name: "Woman"}],
                }
        ]
        // Expectes same result as test 1

    
    // Test 6
        // Response from API
        const mockResponse6 = [
                {
                    businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                    businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                    businessType: {id: 132, name: "Clothing and Fashion"},
                    id: 1,
                    likes: 1,
                    name: "Business name is different account",
                    owner: {id: 43, username: "owner@test.com"},
                    ownerTypes: [{id: 203, name: "Woman"}],
                },
                {
                    businessDetails: {id: 2, description: "description goes here", websiteUrl: "link.com"},
                    businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                    businessType: {id: 132, name: "clothing and fashion"},
                    id: 2,
                    likes: 1,
                    name: "Business name is different account",
                    owner: {id: 43, username: "owner@test.com"},
                    ownerTypes: [{id: 203, name: "Woman"}],
                },
                {
                    businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                    businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                    businessType: {id: 132, name: "Fashion and clothing"},
                    id: 3,
                    likes: 1,
                    name: "Business name is different account",
                    owner: {id: 43, username: "owner@test.com"},
                    ownerTypes: [{id: 203, name: "Woman"}],
                },
                {
                    businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                    businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                    businessType: {id: 132, name: "fashion Clothing"},
                    id: 4,
                    likes: 1,
                    name: "Business name is different account",
                    owner: {id: 43, username: "owner@test.com"},
                    ownerTypes: [{id: 203, name: "Woman"}],
                },
        ]
        // Expectes same result as test 2

    // Test 7
        // Response from API
        const mockResponse7 = [
                {
                    businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                    businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                    businessType: {id: 132, name: "Furniture and Electronics"},
                    id: 1,
                    likes: 1,
                    name: "Business name is different account",
                    owner: {id: 43, username: "owner@test.com"},
                    ownerTypes: [{id: 203, name: "Woman"}],
                },
                {
                    businessDetails: {id: 2, description: "description goes here", websiteUrl: "link.com"},
                    businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                    businessType: {id: 132, name: "Rugs and Appliances"},
                    id: 2,
                    likes: 1,
                    name: "Business name is different account",
                    owner: {id: 43, username: "owner@test.com"},
                    ownerTypes: [{id: 203, name: "Woman"}],
                },
                {
                    businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                    businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                    businessType: {id: 132, name: "Decor and Tools"},
                    id: 3,
                    likes: 1,
                    name: "Business name is different account",
                    owner: {id: 43, username: "owner@test.com"},
                    ownerTypes: [{id: 203, name: "Woman"}],
                },
                {
                    businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                    businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                    businessType: {id: 132, name: "Bed and Bath"},
                    id: 4,
                    likes: 1,
                    name: "Business name is different account",
                    owner: {id: 43, username: "owner@test.com"},
                    ownerTypes: [{id: 203, name: "Woman"}],
                }
        ]
        // Expectes same result as test 3
    
    // Test 8
        // Response from API
        const mockResponse8 = [
                {
                    businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                    businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                    businessType: {id: 132, name: "caballo and whatever"},
                    id: 1,
                    likes: 1,
                    name: "Business name is different account",
                    owner: {id: 43, username: "owner@test.com"},
                    ownerTypes: [{id: 203, name: "Woman"}],
                },
                {
                    businessDetails: {id: 2, description: "description goes here", websiteUrl: "link.com"},
                    businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                    businessType: {id: 132, name: "lolailo descomunal"},
                    id: 2,
                    likes: 1,
                    name: "Business name is different account",
                    owner: {id: 43, username: "owner@test.com"},
                    ownerTypes: [{id: 203, name: "Woman"}],
                },
                {
                    businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                    businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                    businessType: {id: 132, name: "raton and lawyer"},
                    id: 3,
                    likes: 1,
                    name: "Business name is different account",
                    owner: {id: 43, username: "owner@test.com"},
                    ownerTypes: [{id: 203, name: "Woman"}],
                },
                {
                    businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
                    businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
                    businessType: {id: 132, name: "abracadabra catapum"},
                    id: 4,
                    likes: 1,
                    name: "Business name is different account",
                    owner: {id: 43, username: "owner@test.com"},
                    ownerTypes: [{id: 203, name: "Woman"}],
                }
        ]
        // Expectes same result as test 4


// BUSINESS TYPE TESTS
    // Basic tests: business type composed of one word

    test("Adds different food businesses to food type when given one word", () => {
        expect(transformIntoObj(mockResponse1)).toEqual(expected1)
    })
    test("Adds different clothing businesses to clothing type when given one word", () => {
        expect(transformIntoObj(mockResponse2)).toEqual(expected2)
    })
    test("Adds different home goods businesses to home goods type when given one word", () => {
        expect(transformIntoObj(mockResponse3)).toEqual(expected3)
    })
    test("Adds not-included businesses types to others type when given one word", () => {
        expect(transformIntoObj(mockResponse4)).toEqual(expected4)
    })

    // Second level test: business type composed of to words of same category
    test("Adds different food businesses to food type when given two words", () => {
        expect(transformIntoObj(mockResponse5)).toEqual(expected1)
    })
    test("Adds different clothing businesses to clothing type when given two words", () => {
        expect(transformIntoObj(mockResponse6)).toEqual(expected2)
    })
    test("Adds different home goods businesses to home goods type when given two words", () => {
        expect(transformIntoObj(mockResponse7)).toEqual(expected3)
    })
    test("Adds not-included businesses types to others type when given two words", () => {
        expect(transformIntoObj(mockResponse8)).toEqual(expected4)
    })

    // Third level tests: business type composed of multiple words of different categories


// LOCATION TESTS

// OWNER TYPE TESTS



// What object from response array looks like
// const bObj = {
//     businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
//     businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
//     businessType: {id: 132, name: "Diner"},
//     id: 132,
//     likes: 1,
//     name: "Business name is different account",
//     owner: {id: 43, username: "owner@test.com"},
//     ownerTypes: [{id: 203, name: "Woman"}, {id: 204, name: "Latino"}],
// }
