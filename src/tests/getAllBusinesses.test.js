import { tranformIntoObj } from "../call-backend/getAllBusinesses";
// Testing with mock response from API

    // Test 1
        // Response from API
        const mockResponse1 = []
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
        const mockResponse2 = []
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
        const mockResponse3 = []
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
        const mockResponse4 = []
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

// BUSINESS TYPE TESTS
    // Basic tests: business type composed of one word
    test("Adds different food businesses to food type when given one word", () => {

    })
    test("Adds different clothing businesses to clothing type when given one word", () => {
        
    })
    test("Adds different home goods businesses to home goods type when given one word", () => {
        
    })
    test("Adds not-included businesses types to others type when given one word", () => {
        
    })

    // Second level test: business type composed of to words of same category
    test("Adds different food businesses to food type when given two words", () => {

    })
    test("Adds different clothing businesses to clothing type when given two words", () => {
        
    })
    test("Adds different home goods businesses to home goods type when given two words", () => {
        
    })
    test("Adds not-included businesses types to others type when given two words", () => {
        
    })

    // Third level tests: business type composed of multiple words of different categories


// LOCATION TESTS

// OWNER TYPE TESTS



// What object from response array looks like
const bObj = {
    businessDetails: {id: 1, description: "description goes here", websiteUrl: "link.com"},
    businessLocation: {id: 132, county: "Clinton", city: "Gladston", state: null, buildingNumber: null},
    businessType: {id: 132, name: "Diner and Breakfast"},
    id: 132,
    likes: 1,
    name: "Business name is different account",
    owner: {id: 43, username: "owner@test.com"},
    ownerTypes: [{id: 203, name: "Woman"}, {id: 204, name: "Latino"}],
}
