interface StateData {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    totalCases: number;
    activeCases: number;
    recoveredCases: number;
    deaths: number;
}

interface CovidData {
    totalCases: number;
    activeCases: number;
    recoveredCases: number;
    deaths: number;
    states: Array<StateData>;
}

interface ReducerAction {
    type: string,
    payload: any
}

// Define the props type for the CovidTracker component
interface CovidTrackerProps {
    data: CovidData;
    stateFilter: string[];
    setCovidData: (data: CovidData | null) => void;
    setStateFilter: (data: string[]) => void;
}

interface GraphData {
    totalCases:number; 
    activeCases:number; 
    recoveredCases:number; 
    deaths:number;
}

interface MarkerData {
    position: [number, number];
    name: string;
    totalCases:number; 
    activeCases:number; 
    recoveredCases:number; 
    deaths:number;
}

export type { StateData, CovidData, ReducerAction, CovidTrackerProps, GraphData, MarkerData };