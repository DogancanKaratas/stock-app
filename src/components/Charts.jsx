import { Grid, Container } from "@mui/material"
import { AreaChart, Card, Title } from "@tremor/react"
import { useSelector } from "react-redux"

const chartdata = [
  {
    date: "Jan 22",
    price: "",
  },
]

const valueFormatter = function (number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString()
}

const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock)

  const salesData = sales?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString("tr-TR"),
    amount: item.amount,
  }))

  const purchasesData = purchases?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString("tr-TR"),
    amount: item.amount,
  }))

  return (
    <Container>
      <Grid container mt={2} spacing={2}>
        <Grid item xs={12} lg={6}>
          <Card>
            <Title>TOTAL SALES (USD)</Title>
            <AreaChart
              className=" mt-4"
              data={salesData}
              index="date"
              categories={["amount"]}
              colors={["indigo"]}
              valueFormatter={valueFormatter}
            />
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <Title>TOTAL PURCHASES (USD)</Title>
            <AreaChart
              className="mt-4"
              data={purchasesData}
              index="date"
              categories={["amount"]}
              colors={["cyan"]}
              valueFormatter={valueFormatter}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Charts
