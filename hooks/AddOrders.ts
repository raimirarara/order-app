import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default async function AddOrders() {
  const tablesRef = doc(collection(db, "tables"));

  const tablesData = {
    tableId: tablesRef.id,
    tableNum: 1,
    created_at: Timestamp.now(),
  };

  const docRef = doc(db, "cities", "SF");
  await setDoc(tablesRef, tablesData).catch((e) => {
    console.log(e.messages);
  });
}
