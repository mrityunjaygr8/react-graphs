import { Card, Divider, Group, List, SimpleGrid, Title } from "@mantine/core"
import { Link, Outlet } from "@tanstack/router"
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

function App() {
  return (
    <>
      <SimpleGrid cols={3} spacing="lg" verticalSpacing="lg">
        <Card shadow="xs">
          <Title>Bar Chart</Title>
          <List>
            <Link to={"/nivo/bar"}>Nivo</Link>
          </List>
        </Card>
        <Card shadow="xs">
          <Title>Pie Chart</Title>
        </Card>
        <Card shadow="xs">
          <Title>Donut Chart</Title>
        </Card>
        <Card shadow="xs">
          <Title>Line Chart</Title>
        </Card>
        <Card shadow="xs">
          <Title>Heatmap Chart</Title>
        </Card>
        <Card shadow="xs">
          <Title>Calender Chart</Title>
        </Card>
      </SimpleGrid>
      <Group>
        <Link to="/">Index</Link>
        <Link to="/about">About</Link>
      </Group>
      <Divider />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}

export default App
