import "./index.css"

import "./index.css"

import { useEffect, useState } from "react"
import TablePagination from "@mui/material/TablePagination"
import useGetChargingStations from "../../hooks/useGetChargingStations"
import ChargingStationCard from "../ChargingStationCard"

const Home = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const { chargingStations, isLoading, totalElements } = useGetChargingStations({
    rowsPerPage,
    page,
  })

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(1)
  }

  return (
    <>
      <h1>Charging Stations</h1>
      <div className="cards-list">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {chargingStations.map(station => (
              <ChargingStationCard
                key={station.id}
                name={station.name}
                address={station.address}
                operatorName={station.operatorName}
              />
            ))}
          </>
        )}
      </div>
      <TablePagination
        component="div"
        style={{ display: "flex", justifyContent: "center" }}
        page={page}
        count={totalElements}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelDisplayedRows={({ from, to, count }) =>
          `${from}–${to} de ${count !== -1 ? count : `plus de ${to}`}`
        }
        labelRowsPerPage=""
      />
    </>
  )
}

export default Home
