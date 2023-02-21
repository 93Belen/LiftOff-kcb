import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'businesses',
    initialState: {
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
    },
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const businessesSlice = createSlice(options);
export const { changeState } = businessesSlice.actions;
export default businessesSlice.reducer;


