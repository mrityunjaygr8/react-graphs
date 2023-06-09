import {
  Route,
  RootRoute,
  Router,
} from '@tanstack/router'

import App from "./App";
import Index from "./index";
import About from "./about";
import nivoRoute from './components/nivo/route';

const rootRoute = new RootRoute({
  component: App,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index
})

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About
})

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, nivoRoute])

const router = new Router({ routeTree })

declare module "@tanstack/router" {
  interface RegisterRouter {
    router: typeof router
  }
}

export default router
export { rootRoute }
