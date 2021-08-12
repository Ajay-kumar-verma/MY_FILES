import {ResponsiveContainer as Container ,LineChart,Line,
  XAxis,YAxis,CartesianGrid,Legend,Tooltip}  from 'recharts'

{/*    // This is responsive container  */}
  <Container     width="80%"   aspect={3} >
  
  {/* //This is for what type of chart we want to make  */}
<LineChart data={this.p_data}  height={300} width={500} margin={{right:50,top:50,bottom:50}} >
<CartesianGrid   strokeDasharray="3 3" />
{/* tickFormatter={(val)=>val +'programming' } 
It is for adding data in x axix 
*/}
<XAxis  dataKey="name"   />
<YAxis  dataKey="student" />
<Legend   />
<Tooltip  />
{/* For LineChart dataKey must be comparianable data */}
<Line type="natural" dataKey="student"  stroke="red"  activeDot={{r:10}} />
<Line type="monotoneX"  dataKey="fee" stroke="green"  activeDot={{r:10}} />




</LineChart>
</Container>    
