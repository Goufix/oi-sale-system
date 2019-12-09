import { useState, useEffect } from "react";
import TableTop from "tabletop";

export function useTableTop<T = any>(tableTopKey: string) {
  const [sheetData, setSheetData] = useState<T[]>([]);

  useEffect(() => {
    TableTop.init({
      key: tableTopKey,
      callback: (data: T[]) => {
        setSheetData(data);
        console.log(data);
      },
      simpleSheet: true
    });
    console.log(tableTopKey);
  }, [tableTopKey]);

  return sheetData;
}
