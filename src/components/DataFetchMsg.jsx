import { Alert, Skeleton, Stack, Typography } from "@mui/material";

export const ErrorMsg = () => {
  return (
    <Alert severity="error" sx={{ my: 3 }}>
      Oh, no Data!
    </Alert>
  );
};
export const NoDataMsg = () => {
  return (
    <Alert severity="warning" sx={{ my: 3 }}>
      There is no Data!
    </Alert>
  );
};

export const CardSkeleton = ({ children }) => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} my={3}>
      <Skeleton variant="rectangular">{children}</Skeleton>
    </Stack>
  );
};

const TableSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width="100%" height={80} />
      <Skeleton variant="rectangular" width="100%" height={40} />
      <Skeleton variant="rectangular" width="100%" height={40} />
      <Skeleton variant="rectangular" width="100%" height={40} />
    </Stack>
  );
};

export default TableSkeleton;
