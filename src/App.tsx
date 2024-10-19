import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchCovidData } from './utilities/api';
import { setCovidData, setStateFilter } from './redux/actions'; // Import your action creator
import { CovidData, StateData, CovidTrackerProps } from './utilities/types';
import { Divider, SelectChangeEvent, Stack } from '@mui/material';
import { Loader, StateFilter, StatsSection } from './components/commmoncomponents';
import { BarChartComponent, PieChartComponent } from './components/charts';
import MapComponent from './components/MapView';

const getGraphData = (data:StateData[]) => {
  // Aggregate totalCases, activeCases, recoveredCases and deaths
  const graphData = data.reduce((acc, state) => {
    acc.totalCases += state.totalCases;
    acc.activeCases += state.activeCases;
    acc.recoveredCases += state.recoveredCases;
    acc.deaths += state.deaths;
    return acc;
}, { totalCases: 0, activeCases: 0, recoveredCases : 0, deaths: 0 });
  return graphData;
}

function CovidTracker(props:CovidTrackerProps) {
  const { data, stateFilter, setCovidData, setStateFilter } = props;
  const [stateOptions, setStateOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true); 
  const filteredStates = data.states.filter(state=>stateFilter.includes(state.name));
  const stateFilterApplied = stateOptions.length===stateFilter.length;
  const labelMap = {
    'Active':"activeCases",
    'Total':"totalCases",
    'Recovered':"recoveredCases",
    'Deaths':"deaths"
  }

  const graphData = getGraphData(filteredStates);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: CovidData | null = await fetchCovidData();
        if (response) {
          setCovidData(response);
          const filters = response.states.map(state => state.name);
          setStateFilter(filters);
          setStateOptions(filters);
        }
      } catch (error) {
        console.error("Error fetching COVID data:", error); // Handle error
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };
    fetchData();
  }, [setCovidData, setStateFilter]);

  const handleFilterChange = (event: SelectChangeEvent<typeof stateFilter>) => {
    var { target: { value } } = event;
    // To identify whether its a "Select All" click
    const isSelectAll = value.includes("Select All");
    if (isSelectAll) {
      if (value.length===stateOptions.length+1) value = []; else value = stateOptions;
    } 
    setStateFilter( typeof value === 'string' ? value.split(',') : value );
  };

  return (
    <Stack className="App" divider={<Divider flexItem sx={{background:"#635d68", height:"6px"}}></Divider>} >
      <h1 style={{minHeight:"60px",display:"flex",justifyContent:"center",alignItems:"center",background:"#e5e5e5",fontWeight:"500"}}>COVID-19 Tracker India</h1>
      <Stack direction={"row"} sx={{ height:"100%"}} divider={<Divider sx={{background:"#e5e5e5", width:"20px", border:"none"}} orientation="vertical" flexItem />}>
        <Stack sx={{ flex:"1"}}>
          <Stack sx={{background:"#e5e5e5"}}>
            <StatsSection graphData={graphData} stateFilterApplied={stateFilterApplied} />
          </Stack>
          {
            loading ?
            <Loader/> :
            <Stack direction={"row"} sx={{ background:"#e5e5e5", flex:"1", alignItems:"center"}}>
              <PieChartComponent labelMap={labelMap} graphData={graphData}/>
              <StateFilter label={"State"} value={stateFilter} options={stateOptions} onChange={handleFilterChange} />
            </Stack>
          }
          {
            loading ?
            <Loader/> :
            <Stack sx={{ flex:"1", alignItems:"center"}}>
              <BarChartComponent labelMap={labelMap} graphData={graphData}/>
            </Stack>
          }
        </Stack>
        <Stack sx={{ background:loading?"#e5e1e1":"#e5e5e5", flex:"1.5", padding:loading?"0px":"10px 10px 10px" }}>
          {
            loading ? 
            <Loader/> :
            <MapComponent mapData={filteredStates} />
          }
        </Stack>
      </Stack>
    </Stack>
  );
}

// Map state to props to connect the state from the Redux store to the component's props
const mapStateToComponent = (state: { data: CovidData, stateFilter: string[] }) => {
  return {
    data: state.data,
    stateFilter: state.stateFilter
  };
}

// Map dispatch to props to connect the action creators to the component's props
const mapDispatchToProps = {
  setCovidData,
  setStateFilter
};

export default connect(mapStateToComponent, mapDispatchToProps)(CovidTracker);
