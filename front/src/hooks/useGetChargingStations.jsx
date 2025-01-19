import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { API_GET_CHARGING_STATIONS, API_BASE_URL } from "../utils/constants"
import { protobuf } from "../proto/charging_stations"

const useGetChargingStations = ({ rowsPerPage = 10, page = 1 }) => {
  const [chargingStations, setChargingStations] = useState([])
  const [totalElements, setTotalElements] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const authToken = sessionStorage.getItem("authToken")
      // API call
      const result = await fetch(
        `${API_BASE_URL}${API_GET_CHARGING_STATIONS}?size=${rowsPerPage}&page=${page}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/x-protobuf",
            Authorization: `Basic ${authToken}`,
          },
        }
      )

      if (!result.ok) {
        throw "There was a problem while collecting data, please retry."
      }

      const arrayBuffer = await result.arrayBuffer()
      try {
        const ChargingStationPageProto = protobuf.ChargingStationPageProto
        const message = ChargingStationPageProto.decode(new Uint8Array(arrayBuffer))
        const data = ChargingStationPageProto.toObject(message, {
          longs: String,
          enums: String,
          bytes: String,
        })
        console.log("Data:", data) // Debug: Log the data

        setChargingStations(data.chargingStations)
        setTotalElements(data.totalElements)
      } catch (error) {
        console.error("Decoding Error:", error) // Debug: Log the decoding error
      }
    }

    setIsLoading(true)

    getData().then(() => setIsLoading(false))
  }, [rowsPerPage, page])

  return { chargingStations, isLoading, totalElements }
}

export default useGetChargingStations

useGetChargingStations.propTypes = {
  department: PropTypes.string,
  hasMonth: PropTypes.bool,
}
