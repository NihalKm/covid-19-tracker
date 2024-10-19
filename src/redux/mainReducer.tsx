import { CovidData, ReducerAction } from "../utilities/types";

const initialState: { data: CovidData, stateFilter: string[] } = {
    data: {
        totalCases: 0,
        activeCases: 0,
        recoveredCases: 0,
        deaths: 0,
        states: [] 
    },
    stateFilter: []
};
  
const mainReducer = (state = initialState, action: ReducerAction) => {
    switch (action.type) {
        // Action to set the COVID data
        case 'SET_COVID_DATA': 
            return {
                ...state,
                // Update the data in the state
                data: action.payload, 
            };
        // Action to set the state filter
        case 'SET_STATE_FILTER': 
            return {
                ...state,
                // Update the filter in the state
                stateFilter: action.payload, 
            };
        default:
            return state;
    }
};
  
export default mainReducer;
  
  