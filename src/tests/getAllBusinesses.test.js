import { tranformIntoObj } from "../call-backend/getAllBusinesses";

// Test 1
    // Response from API
    const mockResponse1 = {

}
    // Expected
    const expected1 = {
    all : {
        all: {
            all: [],
            Woman: [],
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
    const mockResponse1 = {

    }
    // Expected
    const expected1 = {
        all : {
            all: {
                all: [],
                Woman: [],
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
    const mockResponse1 = {

    }
    // Expected
    const expected1 = {
        all : {
            all: {
                all: [],
                Woman: [],
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
    const mockResponse1 = {

    }
    // Expected
    const expected1 = {
        all : {
            all: {
                all: [],
                Woman: [],
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

test("Adds different food businesses to food type", () => {

})
test("Adds different clothing businesses to clothing type", () => {
    
})
test("Adds different home goods businesses to home goods type", () => {
    
})
test("Adds not-included businesses types to others type", () => {
    
})

