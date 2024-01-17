import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PaymentsIcon from "@mui/icons-material/Payments"
import { deepPurple } from "@mui/material/colors"
import { Avatar, Paper, Stack } from "@mui/material"

const kpiData = [
  {
    id: 1,
    title: "sales",
    amount: "$16900",
    icon: <MonetizationOnIcon />,
    bgColor: deepPurple[100],
    color: deepPurple[600],
  },
]

const KPI = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Paper elevation={10}>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>N</Avatar>
      </Paper>
    </Stack>
  )
}

export default KPI
