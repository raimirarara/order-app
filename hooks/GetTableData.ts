import {
  collection,
  doc,
  DocumentData,
  getDoc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

type Props = {
  tableId: string;
};

export default async function GetTableData(
  props: Props
): Promise<false | DocumentData> {
  const docRef = doc(db, "tables", props.tableId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return false;
  }
}
