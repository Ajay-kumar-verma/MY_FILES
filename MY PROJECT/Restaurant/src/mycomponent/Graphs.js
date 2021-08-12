// import React,{Component} from 'react'
import { Chart } from "react-google-charts";

  const  Graphs =()=>{

let  tableData=[
    [
      {type: 'string', label: 'EXAM ID' },
      {type: 'number', label: 'No. of Questions' },
      {type: 'number', label: 'Total Marks' },
      {type: 'number', label: 'Attempted'},
      {type: 'number', label: 'Unattempted'},
      {type: 'number', label: 'Correct'},
      {type: 'number', label: 'Incorrect'},
      {type: 'number', label: 'Marks Obtained'}
    ]
  ]

   tableData[1]=[123,12,74,540,4240,440,120,22];
   tableData[2]=[123,12,74,540,4240,440,120,22];
   tableData[3]=[123,12,74,540,4240,440,120,22];
   
   tableData[4]=[123,12,74,540,4240,440,120,22];
   tableData[5]=[123,12,74,540,4240,440,120,22];
   tableData[6]=[123,12,74,540,4240,440,120,22];
   

// End for tableData 

// Data for PieChart

//  let  results = [
//   ['Result', 'appeared'],
//   ['correct', latestAttempt.correct.length],
//   ['incorrect', latestAttempt.incorrect.length],
// ]


let results = [
  ['Result', 'appeared'],
  ['correct', 45],
  ['incorrect', 65],
]

// End of Piechart data

// DataFor line

// let dataForLine = [
//   ['x', 'total', 'attempted', 'correct', 'incorrect', 'obtained']
// ];

let dataForLine = [
  ['x', 'total', 'attempted', 'correct', 'incorrect', 'obtained'],
  [0, 100, 46, 12, 17, 66],
  [1, 120, 26, 76, 4, 98],
  [2, 130, 43, 82, 18, 5],
  [3, 110, 46, 62, 17, 66],
  [4, 90, 26, 34, 24, 8],
  [5, 98, 43, 50, 68, 65]

];

           return (
  <>   
<Chart
  width={'1500px'}
  height={'300px'}
  
  chartType="Table"
  loader={<div>Loading Chart</div>}
  data={tableData}
  options={{
    showRowNumber: true,
  }}
  rootProps={{ 'data-testid': '1' }}
/>


{/* PieChart  */}

<Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={results}
  options={{
      title: 'AIEEE Mock Test performance',
      subtitle: 'attempt wise growth',
    }}
  rootProps={{ 'data-testid': '1' }}
/>



{/* LineChart */}
<Chart
  width={'600px'}
  height={'400px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={dataForLine}
  options={{
    hAxis: {
      title: 'Attempt',
    },
    vAxis: {
      title: 'Score',
    },
    series: {
      1: { curveType: 'function' },
    },
  }}
  rootProps={{ 'data-testid': '2' }}
/>






</>

           )

    }


export default Graphs;