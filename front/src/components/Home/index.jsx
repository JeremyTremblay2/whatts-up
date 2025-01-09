import useGameGeneralData from "../../hooks/useGameGeneralData"
import "./index.css"

import "./index.css"

import { useEffect, useState } from "react"
import TablePagination from "@mui/material/TablePagination"

const Home = () => {
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const { topGames, isLoading } = useGameGeneralData({ rowsPerPage, page })

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(1)
  }

  return (
    <>
      <h1>Plop</h1>
    </>
  )
}

export default Home
