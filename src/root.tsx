import { Link, Outlet } from "@tanstack/router"
import { Group } from "@mantine/core"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

const Root = () => {
  return (
    <>
      <Group>
        <Link to="/">Index</Link>
        <Link to="/about">asdasd</Link>
      </Group>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}

export default Root
