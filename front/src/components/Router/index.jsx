import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material"
import { useMemo } from "react"
import Layout from "../Layout/index.jsx"
import NotificationsProvider from "../Notifications/index.jsx"
import Home from "../Home/index.jsx"
import Login from "../Login/index.jsx"
import PrivateRoute from "./PrivateRoute.jsx"
import { LoadingContextProvider } from "../LoadingContext/index"
import ChargingStationsChart from "../ChargingStationsChart/index.jsx"

export default function Router() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const router = createBrowserRouter([
    {
      element: (
        <LoadingContextProvider>
          <Layout prefersDarkMode={prefersDarkMode} />
        </LoadingContextProvider>
      ),
      children: [
        {
          path: "/",
          element: (
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          ),
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/charts",
          element: (
            <PrivateRoute>
              <ChargingStationsChart />
            </PrivateRoute>
          ),
        },
      ],
    },
  ])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
        shape: {
          borderRadius: 15,
        },
      }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NotificationsProvider prefersDarkMode={prefersDarkMode} />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
