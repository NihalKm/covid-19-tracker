import React from 'react';
import Plot from 'react-plotly.js';
import { Layout, PlotData } from 'plotly.js'; // Import the Layout type from plotly.js
import { GraphData } from '../utilities/types';

const PieChartComponent = ({graphData,labelMap}:{graphData:GraphData,labelMap:{[key:string]:string}}) => {
  const labels : string[] = Object.keys(labelMap);
  const values : number[] = labels.map((key) => graphData[labelMap[key] as keyof GraphData]);
  const data: Partial<PlotData>[] = [
    {
      type: 'pie',
      labels,
      values,
      textinfo: 'percent',
      hoverinfo: 'y',
      orientation: 'h', // Keep text horizontal
      textposition: 'inside', 
      textfont : {
        color: "black",
        size:10
      },
      marker: {
        colors: ['#E8885B', '#3a7bd5', '#66b370', '#ff6666'],
        line: {
          color: 'grey', // Border color
          width: 0.5, // Border width
        }
      },
    },
  ];

  const layout: Partial<Layout> = {
    autosize: true, // Enable autosizing
    margin: {
      l: 0, // Left margin
      r: 0, // Right margin
      t: 30, // Top margin
      b: 10, // Bottom margin
      pad: 0,  // Padding
    },
    showlegend: true,
    legend: {
      itemwidth:10,
      x:0,
      y:0,
      xanchor:'left',
      yanchor:"middle",
      font: {
        family: 'Arial, sans-serif', 
        size: 10
      },
    },
    hovermode: 'closest',
    paper_bgcolor: '#e5e5e5', // Set the background color for the entire chart
    plot_bgcolor: '#e5e5e5',  // Set the background color for the plot area
  };

  return (
    <Plot
      data={data}
      layout={layout}
      style={{ width: '100%', height: '100%' }}
      config={{ responsive: true, displaylogo: false }} // Ensure responsiveness
    />
  );
};

const BarChartComponent = ({graphData,labelMap}:{graphData:GraphData,labelMap:{[key:string]:string}}) => {
  const labels : string[] = Object.keys(labelMap);
  const values : number[] = labels.map((key) => graphData[labelMap[key] as keyof GraphData]);
  const data: Partial<PlotData>[] = [
    {
      type: 'bar',
      x: labels,
      y: values,
      text: values.map(String),
      textposition:"inside",
      hoverinfo:'x+y',
      marker: {
        color: ['#E8885B', '#3a7bd5', '#66b370', '#ff6666'],
        opacity: 0.8,
        line: {
          color: 'grey',
          width: 1
        }
      },
      textfont: {
        color: "black",
        size:9
      }
    },
  ];

  const layout: Partial<Layout> = {
    autosize: true, // Enable autosizing
    margin: {
      l: 40, // Left margin
      r: 40, // Right margin
      t: 30, // Top margin
      b: 30, // Bottom margin
      pad: 0,  // Padding
    },
    showlegend: false,
    hovermode: 'closest',
    paper_bgcolor: '#e5e5e5', 
    plot_bgcolor: '#e5e5e5', 
    xaxis: {
      tickfont: {
        color: '#a18156', // X-axis tick color
      },
    },
    yaxis: {
      rangemode:"tozero",
      tickfont: {
        color: '#a18156', // X-axis tick color
      },
    },
  };

  return (
    <Plot
      data={data}
      layout={layout}
      style={{ width: '100%', height: '100%' }}
      config={{ responsive: true, displaylogo: false }} // Ensure responsiveness
    />
  );
};

export { PieChartComponent, BarChartComponent };
