import { Route } from "@tanstack/router"
import { rootRoute } from "../../routes"
import BarGrid from "./bar.grid"

const nivoRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/nivo"
})

const nivoBarRoute = new Route({
  getParentRoute: () => nivoRoute,
  path: "/bar",
  component: BarGrid
})

nivoRoute.addChildren([nivoBarRoute])

export default nivoRoute 
