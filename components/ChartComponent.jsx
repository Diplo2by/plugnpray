import React from 'react'
import 'chart.js/auto'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line, Bar } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegends'
import {
  doughnutOptions,
  lineOptions,
  barOptions,
  doughnutLegends,
  lineLegends,
  barLegends,
} from '../data/chartData/chartData'

function ChartComponent() {
  return (
    <>

      <div className="grid gap-6 mb-8 md:grid-cols-2 ">
        <ChartCard title="Vulnerablity pie"  >
          <Doughnut {...doughnutOptions}   />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        {/* <ChartCard title="Lines">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard> */}

        <ChartCard title="Bars">
          <Bar {...barOptions} />
          <ChartLegend legends={barLegends} />
        </ChartCard>
      </div>
    </>
  )
}

export default ChartComponent