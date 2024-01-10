import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useEffect } from "react"
import useStockCalls from "../service/useStockCalls"

const Firms = () => {
  // const { getFirms, getSales } = useStockCalls()
  const { getStocks } = useStockCalls()

  useEffect(() => {
    // getFirms()
    // getSales()
    getStocks("firms")
    getStocks("sales")
  }, [])

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>
      <Button variant="contained">New Firm</Button>
    </div>
  )
}

export default Firms
