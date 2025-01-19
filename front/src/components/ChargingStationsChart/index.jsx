import React, { useState } from "react"
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@mui/material"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  Colors,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js"
import { useOutletContext } from "react-router-dom"
import useGetChargingStationsQuantities from "../../hooks/useGetChargingStationsQuantities"
import { departmentList, monthList } from "./utils"
import "./index.css"

const ChargingStationsChart = () => {
  const { prefersDarkMode } = useOutletContext()
  const [department, setDepartment] = useState(null)
  console.log("department", department)
  const [hasMonth, setHasMonth] = useState(false)
  console.log("hasMonth", hasMonth)
  const { chargingStations } = useGetChargingStationsQuantities({ department, hasMonth })

  if (prefersDarkMode) {
    ChartJS.defaults.borderColor = "rgba(255,255,255,0.25)"
    ChartJS.defaults.color = "white"
  }

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Colors)

  const years = [...new Set(chargingStations.map(item => item.year))].sort((a, b) => a - b)
  const months = [...new Set(chargingStations.map(item => item.month))].sort((a, b) => a - b)

  const datasets = months.map(month => {
    const data = years.map(year => {
      const entry = chargingStations.find(item => item.year === year && item.month === month)
      return entry ? entry.count : null
    })

    return {
      label: monthList.find(item => item.value === month)?.name,
      data: data,
      borderWidth: 1,
    }
  })

  const handleChangeDepartment = e => {
    setDepartment(e.target.value)
  }

  const handleChangeMonth = e => {
    setHasMonth(e.target.checked)
  }

  return (
    <div>
      <h1>Charging Stations Chart</h1>
      <div className="filter-container">
        <FormControl fullWidth>
          <InputLabel id="department-select-label">Department</InputLabel>
          <Select
            labelId="department-select-label"
            id="department-select"
            value={department}
            label="Department"
            onChange={handleChangeDepartment}
          >
            {departmentList.map(department => (
              <MenuItem key={department.value} value={department.value}>
                {department.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Months"
          checked={hasMonth}
          onChange={handleChangeMonth}
        />
      </div>
      <div className="chart-container">
        <Bar
          data={{
            labels: years,
            datasets: datasets,
          }}
          options={{
            responsive: true,
            plugins: {
              colors: {
                enabled: true,
                forceOverride: true,
              },
            },
            scales: {
              x: {
                stacked: false,
                title: {
                  display: true,
                  text: "Years",
                },
              },
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Count",
                },
              },
            },
          }}
        />
      </div>
    </div>
  )
}

export default ChargingStationsChart
