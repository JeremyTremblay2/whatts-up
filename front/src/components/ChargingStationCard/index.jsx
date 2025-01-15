import React from "react"
import PropTypes from "prop-types"
import { Card, CardContent, Typography } from "@mui/material"

const ChargingStationCard = ({ name, address, operatorName }) => {
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
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {operatorName}
        </Typography>
      </CardContent>
    </Card>
  )
}
ChargingStationCard.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  operatorName: PropTypes.string,
}

export default ChargingStationCard
