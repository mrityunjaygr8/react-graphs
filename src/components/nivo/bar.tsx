import { Text } from "@mantine/core"
import { useGetStats } from "~/src/fetchers/useGetStats"
import { ResponsiveBar } from "@nivo/bar"

import type BarTypes from "@nivo/bar"


const Bar = () => {
  const stats = useGetStats(["bar"], { "assetsByDept": true })
  if (stats.isLoading) {
    return <Text>Loading</Text>
  }
  /* console.log(stats.data.assetsByDept, Object.keys(stats.data.assetsByDept)) */
  let data = [] as BarTypes.BarDatum[];

  Object.keys(stats.data.assetsByDept).map((key) => { data.push({ value: stats.data.assetsByDept[key], id: key }) })

  return <>
    <div style={{ height: "300px", background: "#f0f0f0" }}>
      <ResponsiveBar
        data={data}
        /* keys={["key"]} */
        /* indexBy="value" */
        colors={{ scheme: 'nivo' }}
        valueScale={{ type: 'linear' }}
        margin={{ top: 50, right: 30, bottom: 100, left: 60 }}
        padding={0.3}
        indexScale={{ type: 'band', round: true }}
        borderWidth={2}
        borderColor="#a51d2d"
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 45,
          legend: 'Department',
          legendPosition: 'middle',
          legendOffset: 62
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Asset Count',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        role="application"
        ariaLabel="Nivo bar chart demo" />
    </div>
  </>
}

export default Bar
