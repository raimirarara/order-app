import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import GetTableData from "../../hooks/GetTableData";

export default function TableId() {
  const router = useRouter();
  const { tableId } = router.query;
  const [data, setData] = useState<DocumentData>();
  useEffect(() => {
    console.log(tableId);
    async function getTableData() {
      const res = await GetTableData({ tableId: tableId as string });
      if (res) {
        setData(res);
      } else {
        console.log("このQRコードは使えません。");
      }
    }
    if (tableId) {
      getTableData();
    }
  }, [tableId]);
  return (
    <Box>
      {data && (
        <>
          <Typography>{data.tableNum}</Typography>
          <Button onClick={() => router.push(tableId + "/menus")}>注文</Button>
          <Button>お会計</Button>
          <Button>店員呼び出し</Button>
        </>
      )}
    </Box>
  );
}
