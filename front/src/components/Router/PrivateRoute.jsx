import PropTypes from "prop-types"
import { Navigate } from "react-router-dom"
import { CircularProgress } from "@mui/material"
import { useIsLoading } from "../LoadingContext/index.jsx"
import { useEffect } from "react"

const PrivateRoute = ({ children = null }) => {
  const authToken = localStorage.getItem("authToken")

  if (!authToken) {
    return <Navigate to="/login" replace />
  }

  return children
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PrivateRoute
