import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { API_GET_CHARGING_STATIONS_QUANTITIES, API_BASE_URL } from "../utils/constants"

const useGetChargingStationsQuantities = ({ department, hasMonth = false }) => {
  const [chargingStations, setChargingStations] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const authToken = sessionStorage.getItem("authToken")
      // API call
      const result = await fetch(
        `${API_BASE_URL}${API_GET_CHARGING_STATIONS_QUANTITIES}?includeMonths=${hasMonth}${department ? `&department=${department}`: ""}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${authToken}`,
          },
        }
      )

      if (!result.ok) {
        throw "There was a problem while collecting data, please retry."
      }

      const data = await result.json()

      setChargingStations(data?.quantities)
    }

    setIsLoading(true)

    getData().then(() => setIsLoading(false))
  }, [department, hasMonth])

  return { chargingStations, isLoading }
}

export default useGetChargingStationsQuantities

useGetChargingStationsQuantities.propTypes = {
  hasMonth: PropTypes.boolean,
}
