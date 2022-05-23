import { Box, Button, TextField } from "@mui/material";
import AddOrders from "../hooks/AddOrders";

export default function Menus() {
  return (
    <Box>
      <TextField inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} />
      <Button onClick={() => AddOrders()}>add Table</Button>
    </Box>
  );
}
