import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import GetTableData from "../../hooks/GetTableData";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Drink from "../../public/images/m1.webp";

export default function Menus() {
  const router = useRouter();
  const { tableId } = router.query;

  useEffect(() => {
    console.log(tableId);
    async function getTableData() {
      const res = await GetTableData({ tableId: tableId as string });
    }
    if (tableId) {
      getTableData();
    }
  }, [tableId]);
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Image src={Drink} onClick={()} />
        </Grid>
        <Grid item xs={6}>
          <Image src={Drink} />
        </Grid>
        <Grid item xs={6}>
          <Image src={Drink} />
        </Grid>
        <Grid item xs={6}>
          <Image src={Drink} />
        </Grid>
      </Grid>
    </Box>
  );
}
