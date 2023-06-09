import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  RouterProvider,
} from '@tanstack/router'
import { MantineProvider } from "@mantine/core"

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import router from "./routes.ts"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <QueryClientProvider client={queryClient} >
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>,
)
