import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material"
import { useMemo } from "react"
import Layout from "../Layout/index.jsx"
import NotificationsProvider from "../Notifications/index.jsx"
import Home from "../Home/index.jsx"
import Login from "../Login/index.jsx"
import PrivateRoute from "./PrivateRoute.jsx"
import { UserContextProvider } from "../UserContext"
import { LoadingContextProvider } from "../LoadingContext/index"
import { SearchContextProvider } from "../SearchContext/index"

const router = createBrowserRouter([
  {
    element: (
      <LoadingContextProvider>
        <Layout />
      </LoadingContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Login isRegister />,
      },
    ],
  },
])

export default function Router() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

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
      <UserContextProvider>
        <SearchContextProvider>
          <RouterProvider router={router} />
        </SearchContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  )
}
