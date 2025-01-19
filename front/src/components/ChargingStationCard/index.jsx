import React from "react"
import PropTypes from "prop-types"
import { Card, CardContent, Typography, Skeleton } from "@mui/material"

const ChargingStationCard = ({ name, address, operatorName, isLoading }) => {
  return (
    <Card
      sx={{
        position: "relative",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s",
        width: "500px",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5" component="div">
          {isLoading || !name ? <Skeleton /> : name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {isLoading ? <Skeleton /> : address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {isLoading ? <Skeleton /> : operatorName}
        </Typography>
      </CardContent>
    </Card>
  )
}
ChargingStationCard.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  operatorName: PropTypes.string,
  isLoading: PropTypes.bool,
}

export default ChargingStationCard
