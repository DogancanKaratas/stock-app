import { Typography } from "@mui/material"

export const ErrorMsg = () => {
  return (
    <Typography variant="h4" color="error" mb={3}>
        Data can not be fetched
    </Typography>
  )
}

const DataFetchMsg = () => {
  return (
    <div>DataFetchMsg</div>
  )
}

export default DataFetchMsg