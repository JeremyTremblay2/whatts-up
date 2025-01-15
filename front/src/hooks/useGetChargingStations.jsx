import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { API_GET_CHARGING_STATIONS, API_BASE_URL } from "../utils/constants"

const useGetChargingStations = ({ rowsPerPage = 10, page = 1 }) => {
  const [chargingStations, setChargingStations] = useState([])
  const [totalElements, setTotalElements] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      // API call
      const result = await fetch(
        `${API_BASE_URL}${API_GET_CHARGING_STATIONS}?size=${rowsPerPage}&page=${page}`
      )

      if (!result.ok) {
        throw "There was a problem while collecting data, please retry."
      }

      const data = await result.json()

      setChargingStations(data?.content)
      setTotalElements(data?.totalElements)
      setTotalPages(data?.totalPages)
    }

    setIsLoading(true)

    getData().then(() => setIsLoading(false))
  }, [rowsPerPage, page])

  return { chargingStations, isLoading, totalElements, totalPages }
}

export default useGetChargingStations

useGetChargingStations.propTypes = {
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
}